import {NextResponse} from "next/server";

export async function fetchPulls(owner, repo) {
    const since = process.env.STARTING;
    const token = process.env.GITHUB_TOKEN;
    const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${repo}/pulls?state=all&sort=created&direction=desc`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error(`GitHub API responded with status ${response.status}: ${response.statusText}`);
    }
    return await response.json()
}
export async function GET(request) {
    try {
        const {searchParams} = new URL(request.url);
        const user = searchParams.get('user') ?? "";
        const repo = searchParams.get('repo') ?? "";
        const owner = searchParams.get('owner') ?? "";
        if (user === "" || repo === "") return NextResponse.json({msg: "send some shit"});
        let pulls = await fetchPulls(owner, repo);
        pulls = pulls.filter(pull => {
            let d1 = new Date(pull.created_at ?? "");
            let d2 = new Date(process.env.STARTING)
            return d1 > d2;
        } );
        return NextResponse.json({status: 200, success: pulls.some(pull => pull.user.login === user)});
    } catch (err) {
        console.error(err); // Log the error for debugging
        return NextResponse.json({success: false, message: 'Error: Internal Error', ErrorMsg: err?.toString()});
    }
}