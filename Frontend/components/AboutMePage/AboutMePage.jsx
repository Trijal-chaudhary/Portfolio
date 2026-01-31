import React, { useEffect, useRef, useState } from "react";
import "./AboutMePage.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import ShotingStars from "../Shotingstars/ShotingStars";
import Phase from "./Phase/Phase";
import PhaseProgBar from "./PhaseProgBar/PhaseProgBar";

const AboutMePage = () => {
  const [currectPhase, setCurrPhase] = useState(1);
  const mousex = useMotionValue(0);
  const mousey = useMotionValue(0);
  const x = useSpring(mousex);
  const y = useSpring(mousey);
  useEffect(() => {
    const track = (e) => {
      mousex.set(e.clientX);
      mousey.set(e.clientY);
    };
    console.log(Math.random());
    window.addEventListener("mousemove", track);
    return () => window.removeEventListener("mousemove", track);
  }, []);
  useEffect(() => {
    const section = document.querySelectorAll(".sectionPhase");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((ele) => {
          if (ele.isIntersecting) {
            setCurrPhase(Number(ele.target.id));
          }
        });
      },
      {
        threshold: "0.6",
      }
    );
    section.forEach((ele) => observer.observe(ele));
  }, []);
  const background = useMotionTemplate`
    radial-gradient(
      500px at ${x}px ${y}px,
      rgba(255,255,255,0.15),
      transparent 60%
    ), #020617
  `;
  return (
    <div className="home">
      <svg
        className="BackSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <path d="M144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144C151.2 144 144 151.2 144 160L144 480zM160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544zM224 320C224 313.3 226.8 307 231.7 302.4L343.7 198.4C350.7 191.9 360.9 190.2 369.6 194C378.3 197.8 384 206.5 384 216L384 424C384 433.5 378.3 442.2 369.6 446C360.9 449.8 350.7 448.1 343.7 441.6L231.7 337.6C226.8 333.1 224 326.7 224 320z" />
      </svg>
      <motion.div
        initial={{ height: 100 }}
        animate={{ height: [100, 0, 100] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: ["easeInOut", "easeIn"],
          times: [0.5, 0.7, 1],
          // delay: 6,
        }}
        className="ScrollDownImgCOnt"
      >
        <img src="images/scrollDown.png" alt="" />
      </motion.div>
      <PhaseProgBar currectPhase={currectPhase} />
      {[0, 1, 3, 4, 5].map((i) => (
        <ShotingStars key={i} />
      ))}
      <section id="1" className="HomeCont sectionPhase">
        <Phase
          url={"images/Phase01.png"}
          ph={"1. The Curiosity & Imagination Phase"}
          p1={"(Early childhood)"}
          p2={`This phase represents the foundation of my thinking and
              mindset.From the early age, I was drawn towards creative things,
              and I had a great imagining power to some extent, and from combing
              both i always found myself doing something creative, like for
              example if i were to talk about, one time I had build a vending
              machine of cardboard`}
          p3={`Playing games on my old laptop also helped me to thing better, I
              was always curious like how this character is moving and the
              environment it rendering, these were always my question at that
              time.`}
          p4={`without just playing games and enjoying myself, i started to thing
              more technical way, which shapes my creative and imagining power,
              this phase was the root of my journey.`}
        />
      </section>
      <section id="2" className="HomeCont sectionPhase">
        <Phase
          url={"images/Phase02.png"}
          ph={"2. The Exploration & Awareness Phase"}
          p1={"(Pre-teen to early teenage years)"}
          p2={`In this phase, I started to explore more technical things,  to develop technical thinking ability, I moved beyond from curiosity and started exploring technical things, now the use of computer become more experimental in my day to day life.`}
          p3={`I explore the basic computer software's, which develop the creative and technical thinking, during this time I develop a key interest in the house layouts and visual designs, i always imaging how the house will be turn out if it do this or that.`}
          p4={`In this phase i develop the ability to visualize things before building it, and before I knew it become my habit.`}
        />
      </section>
      <section id="3" className="HomeCont sectionPhase">
        <Phase
          url={"images/Phase03.png"}
          ph={"3. The Direction-Finding Phase"}
          p1={"(Mid-teenage years)"}
          p2={`This phase marked a significant shift in my journey—from curiosity and exploration to intentional direction. I began to realize that technology was not just a hobby or an interest, but a field where I could build a long-term career. My perspective changed from using technology to understanding and creating with it.`}
          p3={`During this time, I started learning what engineering and software development actually involve. I explored the fundamentals, observed how real-world problems are solved through technology, and gained exposure to the broader landscape of technical careers. Rather than rushing to master everything, this phase was about discovering where I belonged and what excited me the most.`}
          p4={`I learned the importance of choosing a path before accelerating on it. This period helped me align my interests with practical possibilities and gave me the confidence to move forward with a clear goal in mind.`}
        />
      </section>
      <section id="4" className="HomeCont sectionPhase">
        <Phase
          url={"images/Phase04.png"}
          ph={"4. The Skill-Building Phase"}
          p1={"(Early college years)"}
          p2={`This phase represents my transition from a passive learner to an active practitioner. Entering college gave structure to my interests and exposed me to the depth and discipline required in software engineering. I began formally studying core technical concepts while simultaneously applying them through hands-on work.`}
          p3={`During this period, I worked with Java, strengthened my understanding of Data Structures and Algorithms, and explored full-stack development using the MERN stack. What made this phase crucial was not just learning these technologies, but using them to build real projects, debug issues, and understand how individual components come together to form complete systems.`}
          p4={`I moved beyond simply following tutorials and started focusing on problem-solving, logical thinking, and code quality. Each project helped me understand real-world constraints such as scalability, maintainability, and user experience.`}
        />
      </section>
      <section id="5" className="HomeCont sectionPhase">
        <Phase
          url={"images/Phase05.png"}
          ph={"5. The Growth & Experimentation Phase"}
          p1={"(Current phase)"}
          p2={`This phase represents a period of active refinement and self-discovery. Rather than focusing only on learning new concepts, I am now deeply engaged in strengthening what I already know and pushing those skills into real-world scenarios. My focus has shifted from “can I do this?” to “how well can I do this, and how far can I take it?”`}
          p3={`I am consistently improving my understanding of Data Structures and Algorithms, sharpening my problem-solving ability, and developing the habit of writing cleaner, more efficient code.`}
          p4={`Building real-world projects and participating in hackathons have become key parts of this phase. These experiences expose me to uncertainty, tight deadlines, and unfamiliar problems—forcing me to experiment, fail, adapt, and iterate. Each failure becomes feedback, and each iteration improves both my technical skills and my mindset.`}
        />
      </section>
      <motion.div
        className="back"
        style={{
          background,
          pointerEvents: "none",
        }}
      ></motion.div>
    </div>
  );
};

export default AboutMePage;
