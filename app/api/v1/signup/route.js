import { NextResponse } from "next/server";
import {readDataOne, writeData } from "@/lib/db";
import { v4 as uuid } from 'uuid';


export async function POST(request) {
    try {
        const body= await request.json()
        if (!(body.username && body.email && body.name)) {
            return NextResponse.json({status: 400, message: "Required Fields are missing"});
        }
        const data = await readDataOne({
            'collection': 'users',
            query: {
                'username': body.username,
            }
        })
        if (data != null) {
            return NextResponse.json({status: 200, success: true, identifier: data.identifier});
        }
        const uid = uuid();
        const user = await writeData({
            'collection': 'users',
            data: [
                {
                    'username': body.username,
                    'email': body.email,
                    'name': body.name,
                    'identifier': uid
                }
            ]
        })
        return NextResponse.json({status: 200, success: true, identifier: uid, data: user});
    } catch (err) {
        return NextResponse.json({ success: false, message: 'Error: Internal Error', 'ErrorMsg': err.toString() });
    }
}