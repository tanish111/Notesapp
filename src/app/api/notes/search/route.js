import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Note from "../../../../../models/notes";
export async function GET(request){
    const what = request.nextUrl.searchParams.get('what');
    await connectMongoDB();
    const notes = await Note.find({ $text: { $search: what } });
    return NextResponse.json({notes})
}