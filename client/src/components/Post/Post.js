import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
    const PF = "http://localhost:5006/images/";
    return (
        <div className="post">
            {post.photo && (
                <img className="postImage" src={PF + post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c, i) => (
                        <span className="postCat" key={i}>
                            {c.name}
                        </span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    {" "}
                    <span className="postTitle">{post.title}</span>
                </Link>

                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString}
                </span>

                <p className="postDesc">{post.desc}</p>
            </div>{" "}
        </div>
    );
};

export default Post;
