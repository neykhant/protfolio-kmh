import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Unique Ideas for your business</h2>
        {/* <h2>Build Digital Experiense That Inspire</h2> */}
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Virtual Stunning Web Solution
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./asset/images/react.png" alt="" />
          </div>
          <img src="./asset/images/KMH.png" alt="" className="hero-logo"/>
        </div>

        <div>
            <div className="tech-icon">
                <img src="./asset/images/next.png" alt="" />
            </div>
            <div className="tech-icon">
                <img src="./asset/images/ts.webp" alt="" />
            </div>
            <div className="tech-icon">
                <img src="./asset/images/laravel.png" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
