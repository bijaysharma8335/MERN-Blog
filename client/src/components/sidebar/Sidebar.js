import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCat(res.data);
        };
        getCats();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate qui necessitatibus nostrum illum reprehenderit.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cat.map((c, i) => (
                        <Link to={`/?cat=${c.name}`} className="link" key={i}>
                            {" "}
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-square-facebook"></i>
                    <i className="sidebarIcon fab fa-square-twitter"></i>
                    <i className="sidebarIcon fab fa-square-pinterest"></i>
                    <i className="sidebarIcon fab fa-square-instagram"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
