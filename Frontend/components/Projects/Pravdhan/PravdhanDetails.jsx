import React, { useEffect, useRef } from "react";
// import "./WorldTycoonDetails.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import HorizontalImgRunIrr from "../../HorizontalImgRun/HorizontalImgRunIrr";
import ShotingStars from "../../Shotingstars/ShotingStars";
const PravdhanDetails = () => {
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
        <img
          className="ImageProject12"
          src="Project/Pravdhan/logo.png"
          alt=""
        />

        <div className="WorldTycoonVid">
          <div className="AboutWorldT">
            <h2>Crowdsourced Civic Issue Reporting and Resolution System</h2>
          </div>
          <div className="AboutWorldT">
            <h2>Background</h2>

            <p>
              Local governments often face difficulties in identifying,
              prioritizing, and resolving everyday civic issues such as
              potholes, broken streetlights, water leakage, sanitation failures,
              and waste management problems. Although citizens encounter these
              issues frequently, existing complaint mechanisms are often
              fragmented, slow, and lack transparency. Many systems require
              physical visits or manual follow-ups, which discourages citizen
              participation and delays resolution. A centralized,
              technology-driven web platform can bridge this gap by enabling
              citizens to report real-world issues digitally while allowing
              authorities to manage and resolve them efficiently.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Problem Statement</h2>

            <p>
              The project addresses the problem of crowdsourced civic issue
              reporting and resolution. There is currently no unified platform
              that allows citizens to report issues easily, track their progress
              transparently, and ensure accountability from concerned
              authorities. At the same time, municipal bodies lack real-time
              visibility into ground-level problems, making prioritization and
              efficient resource allocation difficult. This system aims to
              create a centralized digital bridge between citizens and local
              authorities to improve governance and service delivery.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Project Overview</h2>
            <p>
              This project is a full-stack web application designed to support
              civic engagement through digital issue reporting and resolution
              tracking. The platform provides a responsive web interface that
              works seamlessly across desktops, tablets, and mobile browsers
              without being limited to a mobile-only experience. Citizens can
              submit civic issues through the web interface, while authorities
              can monitor, manage, and resolve these issues through a
              centralized administrative dashboard. The system emphasizes
              accessibility, transparency, and scalability to support long-term
              use across different regions.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>User Interaction and Community Engagement</h2>
            <div className="gameplayExpMotImg">
              <HorizontalImgRunIrr
                folder={"/Pravdhan"}
                device={"/Laptop"}
                urls={imgURL}
                MyPro={"MyProjects"}
                durration={50}
              />
            </div>
            <p>
              The platform introduces a community-driven interaction model that
              allows users to view civic issues reported near their location.
              Users can upload problems they encounter and also engage with
              issues posted by others by upvoting, commenting, and reacting. The
              upvote mechanism plays a critical role in prioritization, as
              issues with higher engagement gain more visibility and are treated
              as higher priority for verification and resolution. While the
              system incorporates interaction features similar to social
              platforms, its focus remains strictly on civic participation and
              collective problem-solving rather than social networking.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Administrative Workflow</h2>
            <p>
              On the administrative side, the platform provides a web-based
              dashboard for municipal staff and authorities. Administrators can
              view, filter, and categorize reported issues based on location,
              issue type, and community engagement levels. The system uses
              structured metadata and user interactions such as upvotes to
              assist in prioritizing issues. Reports are routed to the relevant
              departments, ensuring that problems are addressed through an
              organized and traceable workflow. Status updates allow progress
              tracking from report submission to resolution.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Expected Solution</h2>
            <p>
              The final solution delivers a scalable full-stack web platform
              that enables citizens to report issues, engage with
              community-reported problems, and track resolution progress
              transparently. Authorities benefit from a centralized system that
              highlights high-priority issues based on collective input rather
              than isolated complaints. The backend architecture is designed to
              handle high volumes of concurrent users, image uploads, and
              real-time interactions while maintaining consistent performance.
              The platform is extensible and can support future enhancements or
              integrations with governance systems.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Impact and Benefits</h2>
            <p>
              The platform empowers citizens by transforming them from passive
              observers into active contributors in civic governance.
              Community-driven engagement increases transparency and ensures
              that urgent issues receive appropriate attention. Authorities gain
              better visibility into real-world problems and can allocate
              resources more effectively. The system reduces delays, improves
              accountability, and strengthens trust between citizens and
              governing bodies by making issue resolution a shared and visible
              process.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Environmental and Social Impact</h2>
            <p>
              By enabling faster identification of issues related to waste
              management, pollution, water leakage, and sanitation, the platform
              contributes to improved environmental conditions and public
              health. Socially, the system encourages collective responsibility
              and civic awareness by allowing communities to rally around common
              problems. Transparent engagement mechanisms promote accountability
              and foster a sense of shared ownership over public spaces.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Feasibility and Viability</h2>
            <p>
              Technically, the project is feasible using modern web technologies
              such as responsive frontends, geolocation services, image
              handling, and scalable backend systems. Operationally, the
              platform is intuitive for citizens and efficient for authorities
              through its centralized dashboard. Economically, the solution is
              cost-effective and can be supported through government funding,
              CSR initiatives, or partnerships. Its modular design allows it to
              scale from local deployments to city, state, or national
              governance systems.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Conclusion</h2>
            <p>
              This crowdsourced civic issue reporting and resolution system
              redefines how citizens and authorities collaborate to improve
              public infrastructure. By combining a full-stack web architecture
              with community-driven engagement and structured administrative
              workflows, the platform enables faster responses, greater
              transparency, and stronger public trust. It serves as a practical
              step toward smarter, more responsive, and accountable governance.
            </p>
          </div>
          <div className="AboutWorldT flex cont">
            <p>
              Want something like this built for you? <span>Contact me.</span>
            </p>
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

export default PravdhanDetails;
