"use client";
import React, { useState } from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      fetch("/api/add-post", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (error) {
      console.log(error);
    }

    setTitle();
    setContent();
  };

  return (
    <div className={styles.main}>
      <h1>Add New Post</h1>
      <form action="" onSubmit={handleSubmit}>
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
            {" "}
            <label htmlFor="title">Title New Post</label>
            <input
              onChange={handleTitleChange}
              style={{ height: "50px", width: "300px", margin: "10px" }}
              type="text"
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
            {" "}
            <label htmlFor="content">Content New Post</label>
            <input
              onChange={handleContentChange}
              style={{ height: "100px", width: "300px", margin: "10px" }}
              type="text"
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
