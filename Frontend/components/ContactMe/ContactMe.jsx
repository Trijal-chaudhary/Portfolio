import React from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
const ContactMe = () => {
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
  const redirectUser = (where) => {
    window.open(where, "_blank");
  };
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
      <div className="LinksContProject1 conlink">
        <div className="LinksIons1 githubIcon">
          <motion.img
            onClick={() => redirectUser("https://github.com/Trijal-chaudhary")}
            whileHover={anim}
            src="./public/Icon/github.png"
            title="GitHub"
            alt=""
          />
        </div>
        <div className="LinksIons1">
          <motion.img
            onClick={() =>
              redirectUser(
                "https://www.linkedin.com/in/harsh-vardhan-chaudhary-0b31b1367/"
              )
            }
            whileHover={anim}
            src="./public/Icon/Linkdin.svg"
            alt=""
            title="linkdin"
          />
        </div>
        <div className="LinksIons1">
          <motion.img
            onClick={() =>
              redirectUser("https://www.instagram.com/trijal_chaudhary_/")
            }
            whileHover={anim}
            src="./public/Icon/insta.png"
            alt=""
            title="instagram"
          />
        </div>
        <div className="LinksIons1">
          <motion.img
            onClick={() =>
              redirectUser(
                "https://www.youtube.com/@HarshVardhanChaudhary-g1o8z"
              )
            }
            whileHover={anim}
            src="./public/Icon/yt.png"
            alt=""
            title="YT"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
