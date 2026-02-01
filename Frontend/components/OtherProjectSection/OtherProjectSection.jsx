import React, { useEffect, useRef } from "react";
import "./OtherProjectSection.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import HorizontalImgRunIrr from "../HorizontalImgRun/HorizontalImgRunIrr";
import ShotingStars from "../Shotingstars/ShotingStars";
const OtherProjectSection = () => {
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
  const mousex = useMotionValue(0);
  const mousey = useMotionValue(0);
  const x = useSpring(mousex);
  const y = useSpring(mousey);
  useEffect(() => {
    const track = (e) => {
      mousex.set(e.clientX);
      mousey.set(e.clientY);
    };
    window.addEventListener("mousemove", track);
    return () => window.removeEventListener("mousemove", track);
  }, []);
  const background = useMotionTemplate`
    radial-gradient(
    500px at ${x}px ${y}px,
    rgba(255,255,255,0.15),
    transparent 60%), #020617`;
  const redirectUser = (where) => {
    window.open(where, "_blank");
  };
  const CamUrls = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
    "09.png",
    "10.png",
    "11.png",
    "12.png",
  ];
  const TriUrls = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
  ];
  const navigate = useNavigate();
  return (
    <>
      <svg
        className="homeSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        onClick={() => navigate("/")}
      >
        <path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" />
      </svg>
      <div className="WorldTyDetMainOuter">
        <div className="WorldTycoonVid CampusBuddy">
          <h1 className="Camp">1. CampusBuddy</h1>
          <img
            className="HeroImageCam"
            src="Project/CampusBuddy/01.png"
            alt=""
          />
          <div className="AboutWorldT">
            <h2>Campus Companion – Student Utility Web Platform</h2>
            <div className="gameplayExpMotImg">
              <HorizontalImgRunIrr
                folder={"/CampusBuddy"}
                device={""}
                urls={CamUrls}
                MyPro={"MyProjects"}
                durration={50}
              />
            </div>
            <h2>About CampusBuddy</h2>
            <p>
              CampusBuddy is an all-in-one student utility platform designed to
              simplify campus navigation and academic resource access. It helps
              students quickly find essential information related to classes,
              faculty, and study materials, all from a single, easy-to-use
              interface.
            </p>
            <h2>My Mission</h2>
            <p>
              CampusBuddy was built with a clear goal: to solve common
              day-to-day challenges faced by college students. Having personally
              experienced confusion around classroom locations and schedules,
              especially during the early college years, I wanted to create a
              solution that makes campus life smoother, more organized, and
              stress-free for students.
            </p>
            <h2>Key Features</h2>
            <h4>1. Professor Tracker</h4>
            <p>
              Helps students check the availability or location of professors,
              reducing unnecessary waiting and repeated visits.
            </p>
            <h4>2. Classroom Finder</h4>
            <p>
              Allows students to identify vacant classrooms at specific times,
              useful for self-study or group discussions.
            </p>
            <h4>3. Lab Locator</h4>
            <p>
              Enables quick and easy identification of assigned laboratory
              locations across campus.
            </p>
            <h4>4. Smart Schedule</h4>
            <p>
              Provides access to class schedules and upcoming lectures, helping
              students stay organized and prepared.
            </p>
            <h4>5. Study Resources</h4>
            <p>
              Offers centralized access to notes, previous year question papers,
              and other academic materials.
            </p>
            <h4>Upcoming Classes Overview</h4>
            <p>
              Displays upcoming classes at a glance, making daily academic
              planning easier.
            </p>
            <h2>Built by a Student, for Students</h2>
            <p>
              <i>
                “I built this platform after struggling to find classrooms
                during my freshman year. My goal is to make campus navigation
                stress-free for everyone.”
              </i>
            </p>
          </div>

          <div className="AboutWorldT flex cont">
            <p>
              Want something like this built for you? <span>Contact me.</span>
            </p>
          </div>
          <div className="AboutWorldT flex cont hei">
            <div className="LinksContProject1">
              <div className="LinksIons1 githubIcon">
                <motion.img
                  onClick={() =>
                    redirectUser(
                      "https://github.com/Trijal-chaudhary/CampusBuddy"
                    )
                  }
                  whileHover={anim}
                  src="Icon/github.png"
                  title="GitHub Repo"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="WorldTycoonVid CampusBuddy">
          <h1 className="Camp">2. TrijalMusic</h1>
          <img
            className="HeroImageCam"
            src="Project/TrijalMusic/01.png"
            alt=""
          />
          <div className="AboutWorldT">
            <h2>Trijal Music – Web-Based Music Player</h2>
            <div className="gameplayExpMotImg">
              <HorizontalImgRunIrr
                folder={"/TrijalMusic"}
                device={""}
                urls={TriUrls}
                MyPro={"MyProjects"}
                durration={50}
              />
            </div>
            <p>
              Trijal Music is a browser-based music player built using HTML,
              CSS, and JavaScript during my early learning phase of JavaScript.
              The purpose of this project was to understand core web development
              concepts, JavaScript event handling, and audio control through
              practical implementation.
            </p>
            <p>
              The music player supports multiple playlists, allowing users to
              switch between different collections of songs. Users can play,
              pause, seek through tracks, and enable loop playback, providing
              basic yet essential music player functionality. The application
              also allows users to create and manage their own playlists,
              helping reinforce concepts such as dynamic DOM manipulation and
              state handling using JavaScript.
            </p>
            <p>
              From a technical perspective, the project focuses on working with
              the HTML5 Audio API, managing playback controls, and synchronizing
              UI elements like progress bars and buttons with audio events. CSS
              was used to design a clean and simple interface, while JavaScript
              handled all interactive behavior, including track navigation and
              playlist management.
            </p>

            <p>
              Trijal Music represents one of my foundational projects, where I
              transitioned from learning JavaScript syntax to building a
              functional, user-interactive application. While simple in scope,
              the project played an important role in strengthening my
              understanding of frontend fundamentals and preparing me for more
              complex, full-stack projects later on.
            </p>
          </div>

          <div className="AboutWorldT flex cont">
            <p>
              Want something like this built for you? <span>Contact me.</span>
            </p>
          </div>
          <div className="AboutWorldT flex cont hei">
            <div className="LinksContProject1 flexCenter">
              <div className="LinksIons1 githubIcon">
                <motion.img
                  onClick={() =>
                    redirectUser(
                      "https://github.com/Trijal-chaudhary/TrijalMusic"
                    )
                  }
                  whileHover={anim}
                  src="Icon/github.png"
                  title="GitHub Repo"
                  alt=""
                />
              </div>
              <div className="LinksIons1 githubIcon">
                <motion.img
                  onClick={() =>
                    redirectUser("https://trijalmusic.netlify.app/")
                  }
                  whileHover={anim}
                  src="Icon/redirect.png"
                  alt=""
                  title="Live Preview"
                />
              </div>
            </div>
          </div>
        </div>
        {[0, 1, 3, 4, 5].map((i) => (
          <ShotingStars key={i} />
        ))}
        <img src="" alt="" />
        <motion.div
          className="back"
          style={{
            background,
            pointerEvents: "none",
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default OtherProjectSection;
