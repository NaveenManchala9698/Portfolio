import React from "react";
import "./Testimonials.css";
import Image3 from "../../assets/avatar-3.svg";
import Image4 from "../../assets/avatar-4.svg";
import Woman1 from "../../assets/Woman 1.png";
import Woman2 from "../../assets/Woman 2.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: Woman1,
      title: "Samreen Saba",
      subtitle: "Frontend Developer",
      comment:
        "Ridiculously efficient’ is the phrase that comes to mind when I think about Naveen. I had the pleasure of working with Naveen while studying Frontend development at Epicode. I worked with Naveen on projects and I was particularly impressed by Naveen's ability to handle toughest task efficiently. Naveen is very organised and maintains dead lines.",
    },
    {
      id: 2,
      image: Woman2,
      title: "Harika Kommuri",
      subtitle: "Frontend Developer",
      comment:
        "My first interaction with Naveen was during the build week project at Epicode. Our task was to recreate the LinkedIn web page using HTML, CSS, JavaScript, Bootstrap and React JS. I found him helpful and patient. He was able to handle stress during tight deadlines. He has an extensive knowledge in deploying various Frontend tools. It was a pleasure working together with him and I would highly recommend him. 👍",
    },
  ];

  return (
    <section className="testimonials container section">
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
