import React, { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Testimonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            console.log(res.data);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
            <Testimonials />
            {/* <Footer /> */}
        </>
    );
};

export default Home;
