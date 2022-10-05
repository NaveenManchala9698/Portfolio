import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/NaveenManchala9698"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      {/* <a
        href="https://hashnode.com/@gregsithole"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiHashnode />
      </a> */}

      <a
        href="https://dev.to/gregsithole"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/in/naveen9698/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://wwww.facebook.com/Greg.Sithole"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.twitter.com/GregSithole"
        className="home__social-link"
        target="__blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
