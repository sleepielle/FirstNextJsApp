import Image from "next/image";
import styles from "./page.module.css";
import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";
import Post from "./components/post";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <h1>Feed</h1>
      <Link
        href="/add-post"
        style={{
          margin: "10px ",
          width: "100px",
          padding: "10px",
          backgroundColor: "grey",
          textAlign: "center",
        }}
      >
        Add Post
      </Link>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            authorName={post.author.name}
            content={post.content}
            title={post.title}
          />
        );
      })}
    </main>
  );
}
