"use client";
import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

function AddPost() {
  return (
    <div className={styles.main}>
      <h1>Add New Post</h1>
      <form action="">
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
              style={{ height: "100px", width: "300px", margin: "10px" }}
              type="text"
            />
          </div>
          <Link
            href="/"
            style={{
              width: "300px",
              padding: "10px",
              backgroundColor: "grey",
              textAlign: "center",
            }}
          >
            Add New Post
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
