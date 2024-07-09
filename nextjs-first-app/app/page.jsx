"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Post from "./components/Post";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  const [posts, setPosts] = useState([]);
  const [idCount, setIdCount] = useState(0);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/post/get-posts");

        const data = await response.json();

        setIdCount(data.posts.length);
        setPosts(data.posts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    fetchPosts();
    route.refresh();
  }, []); // Empty dependency array ensures this runs once on mount

  const handleDelete = (deletedPostId) => {
    setIdCount((prevCount) => prevCount - 1);
  };
  return (
    <main className={styles.main}>
      <h1>Feed</h1>
      <p>Total posts: {idCount}</p>
      <Link
        href="/add-post"
        style={{
          margin: "10px",
          width: "100px",
          padding: "10px",
          backgroundColor: "grey",
          textAlign: "center",
        }}
      >
        Add Post
      </Link>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            authorName={post.author.name}
            content={post.content}
            title={post.title}
            idCount={idCount}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </main>
  );
}
