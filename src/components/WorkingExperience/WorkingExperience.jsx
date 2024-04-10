import React, { useRef } from "react";
import "./WorkingExperience.css";
import { WORKING_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";
import { PiArrowLeftBold } from "react-icons/pi";
import { PiArrowRightBold } from "react-icons/pi";

const WorkingExperience = () => {
  const sliceRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliceRight = () => {
    sliceRef.current.slickNext();
  }

  const sliceLeft = () => {
    sliceRef.current.slickPrev();
  }


  return (
    <section className="experience-container">
      <h5>Work Experienct</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={sliceRight}>
            {/* <span className="material-symbols-outline"> */}
              <PiArrowRightBold/>
            {/* </span> */}
        </div>
        <div className="arrow-left" onClick={sliceLeft}>
            {/* <span className="material-symbols-outline"> */}
            <PiArrowLeftBold/>
            {/* </span> */}
        </div>
        <Slider ref={sliceRef} {...settings}>
        {WORKING_EXPERIENCE.map((item) => (
          <ExperienceCard key={item.title} detail={item} />
        ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkingExperience;
