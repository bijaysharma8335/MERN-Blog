import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./Write.css";
const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { username: user.username, title, desc, file };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="write">
            {file && (
                <img
                    src={URL.createObjectURL(file)}
                    className="writeImg"
                    alt=""
                />
            )}

            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story ..."
                        type="text"
                        value={desc}
                        className="writeInput writeText"
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default Write;
