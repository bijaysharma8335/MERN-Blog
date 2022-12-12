import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { Context } from "./../../context/Context";

const Topbar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5006/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-square-facebook"></i>{" "}
                <i className="topIcon fab fa-square-twitter"></i>{" "}
                <i className="topIcon fab fa-square-pinterest"></i>{" "}
                <i className="topIcon fab fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            ABOUT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact">
                            CONTACT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>

            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img
                            className="topImage"
                            src={PF + user?.profilePic}
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default Topbar;
