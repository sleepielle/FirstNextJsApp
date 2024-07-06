"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "@/app/page.module.css";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Send POST request to add the new post
      const response = await fetch("/api/post/add-post", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error("Failed to add post");
      }

      // Step 2: Refresh router to update state

      // Optionally, you can push to a different route if needed
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  const viewFeed = () => {
    router.push("/");
  };

  return (
    <div className={styles.main}>
      <h1>Add New Post</h1>
      <button
        onClick={viewFeed}
        style={{
          width: "300px",
          padding: "10px",
          backgroundColor: "grey",
          textAlign: "center",
        }}
      >
        View Feed
      </button>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "30px",
            }}
          >
            <label>Title New Post</label>
            <input
              onChange={handleTitleChange}
              style={{ height: "50px", width: "300px", margin: "10px" }}
              type="text"
              value={title}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "30px",
            }}
          >
            <label>Content New Post</label>
            <input
              onChange={handleContentChange}
              style={{ height: "100px", width: "300px", margin: "10px" }}
              type="text"
              value={content}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "300px",
              padding: "10px",
              backgroundColor: "grey",
              textAlign: "center",
            }}
          >
            Add New Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
