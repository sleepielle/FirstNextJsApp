"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function DeletePostButton({ postId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      const response = await fetch(`/api/post/delete-post/${postId}`, {
        method: "DELETE",
      });
      console.log(postId);
      router.refresh();

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      console.log(`Post ${id} deleted successfully`);
      // Optionally, update the UI or notify the parent component
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  return (
    <button onClick={handleClick} style={{ width: "100px", height: "50px" }}>
      Delete Post
    </button>
  );
}
