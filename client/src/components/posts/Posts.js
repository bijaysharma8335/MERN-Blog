import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {posts.map((p, index) => (
                <Post key={index} post={p} />
            ))}
        </div>
    );
};

export default Posts;
