"use client";
import React from "react";
import DeletePostButton from "./DeletePostButton";
import { useState } from "react";
export function Post({ id, title, content, authorName, idCount, onDelete }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [countId, setCountId] = useState(idCount);

  async function fetchPosts() {
    try {
      const response = await fetch(`/api/post/delete-post/${id}`, {
        method: "DELETE",
      });
      console.log("Deleted!");

      setIsDeleted(true);
      setCountId(countId - 1);
      onDelete(id);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      setIsDeleted(false);
    }
  }

  return (
    <>
      {countId == 0 ? (
        <div style={{ height: "100px" }}> No posts available</div>
      ) : isDeleted ? (
        <div className="none" style={{ display: "none" }}></div>
      ) : (
        <div
          className=""
          style={{
            border: "1px solid white",
            padding: "15px",
            margin: "10px 5px",
            width: "400px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="">
              {" "}
              <h3>{authorName}</h3>
              <h4>{title}</h4>
              <p>{content}</p>{" "}
            </div>
          </div>
          <div>
            {/*<DeletePostButton postId={id} />*/}
            <button
              onClick={fetchPosts}
              style={{ width: "150px", height: "50px" }}
            >
              Delete Post
            </button>
          </div>{" "}
        </div>
      )}
    </>
  );
}

export default Post;
