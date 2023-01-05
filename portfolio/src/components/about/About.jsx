import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import Image2 from "../../assets/Naveen 3.png";
import NaveenCV2 from "../../assets/Naveen CV2.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(NaveenCV2, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image2} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Naveen, and I live in Freiberg, Germany. I recently
              completed a 6-month intense Frontend Web Development course at
              EPICODE, a digital skills training institution that provides Web
              Development bootcamps.
              <br />
              <br />
              I am a mechanical engineering graduate who has always wanted to be
              a web developer. I've attended many web development classes and
              self-taught HTML, CSS, and JavaScript. I worked on various
              real-world projects that provided me with valuable skills for Web
              Development. I'm now seeking for new projects to add to my
              portfolio.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Redux</li>
              <li>RESI API's</li>
            </ul>
            <button className="custom-btn btn-12" onClick={downloadResume}>
              <span>Click!</span>
              <span>Donwload CV</span>
            </button>
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development">
                                </span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">
                                </span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage photography">
                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
