import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  function myFunction() {
    var link = document.createElement("a");
    (link.href = text), (link.target = "_blank");
    link.click();
  }

  return (
    <div
      className="contact-details-card"
      style={{
        pointerEvents: `${
          text === "https://github.com/neykhant" ? "all" : "none"
        }`,
        cursor: `${text === "https://github.com/neykhant" ? "pointer" : ""}`,
      }}
      onClick={myFunction}
    >
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
