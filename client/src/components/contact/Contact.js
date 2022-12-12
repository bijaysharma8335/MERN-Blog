import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact_container">
            <div className="contact_title">
                <h1>Contact Us for any Queries</h1>
            </div>

            <div className="container">
                <div className="contact_left">
                    <h3>Get in touch </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis, quisquam laudantium dicta iste temporibus
                        dolore adipisci possimus. Amet quam laborum eaque
                        consequuntur id alias, et, animi pariatur, aliquid nemo
                        dicta.
                    </p>
                    <div className="contact_contactAddress">
                       
                        <div className="contact_email-outerdiv">
                            <MdEmail
                                size="2em"
                                color="red"
                                style={{ marginRight: "10px" }}
                            />
                            <div className="contact_email-innerdiv">
                                <h5>Email Us </h5>
                                <span>bijay.gamd@gmail.com</span>
                            </div>
                        </div>
                        <div className="contact_email-outerdiv">
                            <FiPhoneCall
                                size="2em"
                                color="red"
                                style={{ marginRight: "10px" }}
                            />
                            <div className="contact_email-innerdiv">
                                <h5>Call Us </h5>
                                <span>+123 456 7890</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_right">
                    <form>
                        <div className="contact_inputs">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="contact_input"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="contact_input"
                            />
                        </div>

                        <input
                            type="text"
                            className="contact_input"
                            placeholder="subject"
                            style={{ width: "96%" }}
                        />

                        <textarea
                            placeholder="Message"
                            type="text"
                            className="contact_input"
                            style={{ width: "96%" }}
                        ></textarea>
                        <button type="submit" className="btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
