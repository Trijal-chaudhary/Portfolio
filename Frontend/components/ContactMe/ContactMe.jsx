import React from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
import { postingMessage } from "../../src/services/fetching";
import { useNavigate } from "react-router-dom";
const ContactMe = ({ redit }) => {
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
  const redirectUser = (where) => {
    window.open(where, "_blank");
  };
  const navigate = useNavigate();
  const handelSummit = (e) => {
    e.preventDefault();
    postingMessage({
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }).then(() => {
      alert("message sended succesfully");
      navigate("/");
    });
  };
  return (
    <div
      className="ContactMeMainCont"
      style={redit ? { background: "#020617" } : {}}
    >
      <h2 className="ContactMeTxt">Get In Touch</h2>
      <div className="ContactInfoCont">
        <div className="contactImgCont">
          <img src="images/heroPhoroBG.png" alt="Harsh Vardhan" />
        </div>
        <form onSubmit={handelSummit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="LinksContProject1 conlink">
        <div className="LinksIons1 githubIcon">
          <motion.img
            onClick={() => redirectUser("https://github.com/Trijal-chaudhary")}
            whileHover={anim}
            src="Icon/github.png"
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
            src="Icon/Linkdin.svg"
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
            src="Icon/insta.png"
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
            src="Icon/yt.png"
            alt=""
            title="YT"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
