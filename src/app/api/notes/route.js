import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Note from "../../../../models/notes";
export async function POST(request){
    const {title,noteData} = await request.json();
    await connectMongoDB();
    await Note.create({title,noteData});
    return NextResponse.json({message:"New Note Created"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const notes = await Note.find();
    return NextResponse.json({notes})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({message:"Note Deleted"},{status:200});
}