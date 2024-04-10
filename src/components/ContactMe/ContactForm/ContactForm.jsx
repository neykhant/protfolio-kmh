import React, { useEffect, useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 1500);
  }, [error, success]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wslsajv",
        "template_sn0d98c",
        formRef.current,
        "669588XhrB2vZHOGu"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="contact-form-content">
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" type="text" id="message" rows="3" />
        <button>SEND</button>
        {error && "Error"}
        {success && "Success"}
      </form>
    </div>
  );
};

export default ContactForm;
