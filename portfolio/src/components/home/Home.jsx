import React from "react";
import "./Home.css";
import Me from "../../assets/avatar-1.svg";
import me from "../../assets/Naveen.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={me} alt="" className="home__img" width="150" />
        <h1 className="home__name">Naveen Kumar Manchala</h1>
        <span className="home__education">I'm a Frontend Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          {" "}
          Contact Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
