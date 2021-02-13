import React from "react";
import "./About.css";
import profile from "./images/profile.jpg";

function About() {
  return (
    <>
      <div className="about-container">
        <img src={profile} alt="Profile Picture" className="profile-pic" />
        <div className="about-container">
          <h1 className="about-logo">About Me</h1>
          <p className="about-body">
            Henry is a student of the KU full stack flex bootcamp, and aspiring
            full stack developer. He has learned the basics of HTML5, CSS, and
            Bootstrap and is now venturing into Javascript. Originally based in
            New York where he was born, he is now in Kansas City for the time
            being. He is proficient with Windows, while not so much with
            MacOS.He aspires to work at a company like CD Project Red, or
            Google, but would also like to start his own freelance company. In
            his free time Henry likes to play video games, build computers,
            cook, and find new restaurants.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
