//post requests are handled here.

import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const { title, content } = res;
  console.log(res);
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        create: {
          name: "Meche",
        },
      },
      published: true,
    },
  });

  return NextResponse.json({ result });
}
