import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const id = params.id;
  const deletedPosts = await prisma.post.delete({
    where: { id },
  });
  return NextResponse.json({ deletedPosts });
}
