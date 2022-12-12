import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="blog">
                    <h1>BLOG</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio a adipisci deserunt, modi maiores temporibus
                        aspernatur repudiandae vel iste sint?
                    </p>
                </div>
                <div className="categories">
                    <h1>CATEGORIES</h1>
                </div>
                <div className="tags">
                    <h1>TAGS</h1>
                </div>
                <div className="footer_quicklink">
                    <h1>QUICK LINKS</h1>
                    <ul>
                        <li>
                            <Link to="#" className="footer_link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="footer_link">
                                Advertise
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="footer_link">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="footer_link">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="footer_link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* © blog. All Rights Reserved. */}
        </div>
    );
};

export default Footer;
