import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1, }}>
        {/* display: "flex", flexWrap: "wrap", alignContent: "space-between"  */}
          <ContactInfoCard
            iconUrl="./asset/images/email.png"
            text="khantmaw48@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./asset/images/github.png"
            text="https://github.com/neykhant"
          />
          <ContactInfoCard
            iconUrl="./asset/images/address.png"
            text="ChanAyeTharsan(Township), Mandalay"
          />
          <ContactInfoCard
            iconUrl="./asset/images/phone.jpeg"
            text="09-979032433"
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
