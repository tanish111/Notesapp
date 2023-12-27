import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Note from "../../../../../models/notes";

export async function PUT(request, {params}){
    const { id } = params;
    const {newTitle: title,newnoteData:noteData} = await request.json();
    await connectMongoDB();
    await Note.findByIdAndUpdate(id,{title,noteData});
    return NextResponse.json({message:"Topic updated"},{status:200});
}

export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const note = await Note.findOne({_id:id});
    return NextResponse.json({note},{status:200});
}