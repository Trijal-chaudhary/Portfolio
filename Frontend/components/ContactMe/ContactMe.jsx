import React from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
const ContactMe = () => {
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
  return (
    <div className="ContactMeMainCont">
      <h2 className="ContactMeTxt">Get In Touch</h2>
      <div className="ContactInfoCont">
        <div className="contactImgCont">
          <img src="images/heroPhoroBG.png" alt="Harsh Vardhan" />
        </div>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
