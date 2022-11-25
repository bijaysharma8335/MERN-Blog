import axios from "axios";
import React, { useContext, useState, useRef } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./Settings.css";

const Settings = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5006/images/";
    const hiddenFileInput = useRef(null);

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = { userId: user._id, username, email, password };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : PF + user.profilePic
                            }
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i
                                className="settingsPPIcon far fa-user-circle"
                                onClick={handleClick}
                            ></i>
                        </label>
                        <input
                            type="file"
                            className="fileInput"
                            ref={hiddenFileInput}
                            style={{ display: "none" }}
                            onChange={(e) => {
                                setFile(e.target.files[0]);
                            }}
                        />
                    </div>
                    <label>UserName</label>
                    <input
                        type="text"
                        placeholder={user.username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="settingsSubmit" type="submit">
                        Update
                    </button>
                    {success && (
                        <span
                            style={{
                                color: "green",
                                textAlign: "center",
                                margin: "20px",
                            }}
                        >
                            Profile has been updated ...
                        </span>
                    )}
                </form>
            </div>
            <Sidebar />
        </div>
    );
};

export default Settings;
