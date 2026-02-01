import React, { useEffect, useRef } from "react";
// import "./WorldTycoonDetails.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import ShotingStars from "../../Shotingstars/ShotingStars";
import HorizontalImgRunIrr from "../../HorizontalImgRun/HorizontalImgRunIrr";
const LocalConnectDetails = () => {
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
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
  const background = useMotionTemplate`
    radial-gradient(
    500px at ${x}px ${y}px,
    rgba(255,255,255,0.15),
    transparent 60%), #020617`;
  const imgURL = [
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
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
  ];
  const navigate = useNavigate();
  const redirectUser = (where) => {
    window.open(where, "_blank");
  };
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
        <img
          className="ImageProject12 worldimg"
          src="Project/LocalConnect/logo.png"
          alt=""
        />
        <div className="WorldTycoonVid">
          <iframe
            class="youtubeFrame"
            src="https://www.youtube.com/embed/7gugs0cXaPw?si=bLRVTV4_8kIDqUMl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="AboutWorldT">
            <h2>Project Overview</h2>
            <p>
              LocalConnect is a hyperlocal peer-to-peer service platform
              designed to connect community members with verified local service
              providers such as electricians, plumbers, tutors, and technicians.
              The platform addresses common issues in existing service
              ecosystems, including lack of trust, overpricing, and limited
              digital exposure for skilled local workers. By focusing on
              transparency, verification, and fair opportunity, LocalConnect
              creates a reliable and inclusive service marketplace.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Problem Statement</h2>

            <p>
              In many semi-urban and urban communities, people still depend
              heavily on word-of-mouth to find local services. This often leads
              to:
            </p>
            <p>Unreliable or unverified service providers</p>
            <p>Inconsistent pricing and overpayment</p>
            <p>Lack of accountability and trust</p>
            <p>
              At the same time, talented local service providers struggle to
              reach genuine customers due to limited digital platforms tailored
              to their needs. LocalConnect aims to bridge this gap by offering a
              centralized and trustworthy digital solution.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Objectives</h2>
            <p>
              Bridge the gap between local service providers and community
              members
            </p>
            <p>Build a strong trust system using multi-layer verification</p>
            <p>
              Empower independent service providers through digital registration
              and visibility
            </p>
            <p>
              Create growth opportunities for freshers via mentorship and
              experience-based recognition
            </p>
            <p>Ensure fair and stable pricing using data-driven insights</p>
          </div>
          <div className="AboutWorldT">
            <h2>System Architecture & Technical Implementation</h2>

            <p>
              LocalConnect is built using a modern full-stack architecture
              focused on scalability, real-time interaction, and security. The
              frontend is developed with React.js to deliver a responsive and
              user-friendly interface, while the backend is powered by Node.js
              and Express.js to handle authentication, business logic, and API
              communication efficiently. MongoDB is used as the database to
              manage user profiles, service records, and verification data in a
              scalable manner. Real-time features such as live updates and
              communication are implemented using Socket.io, ensuring smooth
              interaction between users and service providers.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Three Distinct User Interfaces</h2>
            <div className="gameplayExpMotImg">
              <HorizontalImgRunIrr
                folder={"/LocalConnect"}
                device={"/Laptop"}
                urls={imgURL}
                MyPro={"MyProjects"}
                durration={50}
              />
            </div>
            <h4>1. Customer Interface</h4>
            <p>
              The Customer Interface is designed to help community members
              easily discover reliable local service providers in their nearby
              area. Users can search and browse verified providers and view
              detailed profiles that display skills, verification status,
              ratings, and customer reviews. These transparent profiles allow
              users to make informed decisions based on real experiences shared
              by others, helping build trust and confidence before choosing a
              service provider. The interface focuses on simplicity and clarity,
              ensuring that users can quickly find the right professional
              without confusion or dependency on word-of-mouth.
              <h4>2. Service Provider Interface</h4>
            </p>
            <p>
              The Service Provider Interface enables local professionals to
              digitally onboard themselves onto the platform and create a
              verified profile. Service providers can upload necessary documents
              such as identity proofs and skill certificates to complete the
              verification process. Their profile visibility is rendered
              dynamically based on customer reviews and ratings, allowing
              consistent and quality work to naturally improve reach and
              credibility. This interface is designed to help independent
              service providers establish a strong digital presence and connect
              directly with genuine customers in their locality.
            </p>
            <h4>3. Admin Interface</h4>
            <p>
              The Admin Interface plays a crucial role in maintaining the
              reliability and integrity of the platform. Administrators are
              responsible for verifying service provider documents, approving
              profiles, and managing overall platform access. This interface
              ensures that only authenticated and verified professionals are
              visible to customers, helping maintain trust across the ecosystem.
              It also supports the smooth functioning of the platform by
              overseeing user data and verification workflows.
            </p>
          </div>
          <div className="AboutWorldT">
            <p>
              LocalConnect is more than a service-booking platform—it is a
              community-driven initiative that promotes trust, transparency, and
              local economic empowerment. By combining technology with
              mentorship, verification, and fair pricing, the platform redefines
              how communities interact with local service providers.
            </p>
          </div>
          <div className="AboutWorldT flex cont">
            <p>
              Want something like this built for you?{" "}
              <span onClick={() => navigate("/contactme")}>Contact me.</span>
            </p>
          </div>
          <div className="AboutWorldT flex cont hei">
            <div className="LinksContProject1 flexCenter">
              <div className="LinksIons1 githubIcon">
                <motion.img
                  onClick={() =>
                    redirectUser(
                      "https://github.com/Trijal-chaudhary/LocalConnect"
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
                    redirectUser("https://localconnect-p703.onrender.com/")
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

export default LocalConnectDetails;
