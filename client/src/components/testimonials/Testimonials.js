import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonials.css";
import { users } from "../../constants/constant";
const Testimonials = () => {
    return (
        <div>
            {" "}
            <Swiper
                loop={true}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {}}
                onSlideChange={() => {}}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    756: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1222: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {" "}
                {users.map((slideContent, index) => {
                    return (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <div className="testimonial-container">
                                <img
                                    className="img-fluid testimonial-img user"
                                    src={slideContent.img}
                                    alt="customer pic"
                                />
                                <p className="testimonial-content">
                                    {" "}
                                    {slideContent.content}
                                </p>
                                <h3 className="testimonial-heading">
                                    {slideContent.name}
                                </h3>
                            </div>
                           
                        </SwiperSlide>
                    );
                })}
                ...
            </Swiper>
        </div>
    );
};

export default Testimonials;
