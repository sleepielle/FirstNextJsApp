import React from "react";
import DeletePostButton from "./DeletePostButton";
function Post({ id, title, content, authorName }) {
  return (
    <div
      style={{
        marginTop: "20px",
        border: "1px solid white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          padding: "15px",
          margin: "10px 5px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>{authorName}</h3>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <div
        style={{
          alignContent: "center",
          width: "150px",
        }}
      >
        <DeletePostButton postId={id} />
      </div>
    </div>
  );
}

export default Post;
