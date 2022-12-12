import React from "react";
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                {/* <span className="headerTitleSm">React & Node</span> */}
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://previews.123rf.com/images/maximleshkovich/maximleshkovich1702/maximleshkovich170200217/71771189-beauty-blog-background-workspace-with-laptop-gold-style-feminine-accessories-golden-tinsel-scissors-.jpg"
                alt=""
            />
        </div>
    );
};

export default Header;
