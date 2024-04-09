import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./asset/images/email.png"
            text="john@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./asset/images/github.png"
            text="https://github.com"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
