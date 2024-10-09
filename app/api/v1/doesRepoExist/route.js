import {NextResponse} from "next/server";
import {headers} from 'next/headers'
import {writeData} from "@/lib/db";


export async function fetchPublicRepos(username) {
    const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?type=public`;
    const token = process.env.GITHUB_TOKEN;
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

    const repos = await response.json();
    return repos
}

export async function GET(request) {
    try {
        const {searchParams} = new URL(request.url);
        const user = searchParams.get('user') ?? "";
        const id = 1;
        if (user === "") return NextResponse.json({msg: "send some shit"}, {status: 400});
        const data = await fetchPublicRepos(user);
        const newRepos = data.filter((repo) => repo.name === `git-game_${user}`);
        if (newRepos.length === 1) {
            await writeData({
                collection: 'progress',
                data: [{
                    identifier: id,
                    username: user,
                    completedTime: newRepos[0].created_at
                }]

            })
        }
        return NextResponse.json({status: 200,success: newRepos.length === 1}, {status: 200});
    } catch (err) {
        console.error(err); // Log the error for debugging
        return NextResponse.json({success: false, message: 'Error: Internal Error', ErrorMsg: err?.toString()}, {status: 500});
    }
}
