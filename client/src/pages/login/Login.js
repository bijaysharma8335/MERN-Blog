import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import "./Login.css";

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });

        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter your username...."
                    className="loginInput"
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password...."
                    className="loginInput"
                    ref={passwordRef}
                />
                <button
                    className="loginButton"
                    type="submit"
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    Register
                </Link>
            </button>
        </div>
    );
};

export default Login;
