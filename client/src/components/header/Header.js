import React from "react";
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://thumbs.dreamstime.com/b/sunrise-over-bangalore-beautiful-march-hebbal-neighborhood-india-65291184.jpg"
                alt=""
            />
        </div>
    );
};

export default Header;
