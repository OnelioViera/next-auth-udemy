import prisma from "@/helpers/prisma";
import {NextResponse} from "@/helpers/nextResponse";

export async function GET(request) {
  try {
    const posts = await prisma.post.findMany()
    return NextResponse.json({posts}, {status: 200})
  } 
  catch (error) {
    console.error(error)
    return NextResponse.json({message: "Something went wrong while trying to load the post.", result: error}, {status: 500})
  }
}