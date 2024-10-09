import { NextResponse } from "next/server";
import { headers } from 'next/headers'
import {readDataMany} from "@/lib/db";


export async function GET(request) {
    try {
        const header = headers()
        const { searchParams }= new URL(request.url);
        const task = searchParams.get('task') ?? "";
        if (task === "") return NextResponse.json({msg: "send some shit"});
        const data = await readDataMany({
            "collection": 'milestones',
        })
        return NextResponse.json({status: 200, data: data});
    } catch (err) {
        console.error(err); // Log the error for debugging
        return NextResponse.json({ success: false, message: 'Error: Internal Error', ErrorMsg: err?.toString() });
    }
}
