import React, { useEffect, useRef } from "react";
import "./WorldTycoonDetails.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import ShotingStars from "../../../Shotingstars/ShotingStars";
import HorizontalImgRunIrr from "../../../HorizontalImgRun/HorizontalImgRunIrr";
import { useNavigate } from "react-router-dom";
const WorldTycoonDetails = () => {
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
    "12.png",
    "13.png",
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
          className="ImageProject12 worldimg"
          src="Project/WorldLogo.png"
          alt=""
        />
        <div className="WorldTycoonVid">
          <iframe
            class="youtubeFrame"
            src="https://www.youtube.com/embed/IyT0KLEcRm4?si=Z6K5GT2Ue-IBUkv0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="AboutWorldT">
            <h2>About World Tycoon</h2>
            <p>
              World Tycoon is a large-scale, multiplayer strategic board game
              that transforms classic property-trading mechanics into a modern,
              real-time global experience. Designed for up to four players, the
              game expands beyond a traditional board, placing players into an
              immersive world where economic power, strategic planning, and
              timely decisions determine victory.
            </p>
            <p>
              In World Tycoon, players don’t just roll dice and collect
              rent—they step into the role of global leaders, industrial
              tycoons, or financial strategists competing to dominate the world
              economy. Every move carries weight, and every asset can shift the
              balance of power.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Gameplay Experience</h2>
            <div className="gameplayExpMotImg">
              <HorizontalImgRunIrr
                folder={"/Project1"}
                device={""}
                urls={imgURL}
                MyPro={"MyProjects"}
                durration={50}
              />
            </div>
            <p>
              Players traverse a global map where each country is represented as
              a unique property tile with its own strategic value. Landing on a
              nation opens opportunities to purchase territory, expand
              infrastructure, and generate income. The game blends turn-based
              mechanics with real-time multiplayer interaction, ensuring smooth
              gameplay while keeping all participants constantly engaged.
            </p>
            <p>
              A centralized banking system manages all transactions, tracking
              ownership, assets, and cash flow in real time. Players can also
              liquidate their holdings by selling properties back to the bank,
              allowing for flexible strategies when capital is tight—but at the
              cost of long-term income.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Core Game Mechanics</h2>
            <h4>Dynamic Dice System</h4>
            <p>
              Dice rolls determine player movement across the world map,
              introducing risk, probability, and strategic anticipation with
              every turn.
            </p>
            <h4>Property Ownership & Ticket Status</h4>
            <p>
              Each country’s ownership is tracked in real time. Players must pay
              rent when landing on rival territories or seize the opportunity to
              acquire unclaimed nations.
            </p>
            <h4>Real-Time Turn Management</h4>
            <p>
              The server controls turn order and game state, ensuring
              consistency and fairness while synchronizing every action across
              connected players.
            </p>
            <h4>Persistent Game State</h4>
            <p>
              All moves, purchases, and financial changes are instantly
              reflected for every player, creating a seamless and competitive
              multiplayer environment.
            </p>
          </div>
          <div className="AboutWorldT">
            <h2>Strategic Depth</h2>
            <p>
              World Tycoon rewards players who think ahead. Whether you focus on
              aggressive expansion, calculated investment, or cautious asset
              management, success depends on reading the board, predicting
              opponents’ moves, and knowing when to take risks. The balance
              between growth and liquidity adds constant tension, making each
              decision meaningful.
            </p>
          </div>
          <div className="AboutWorldT">
            <p>
              World Tycoon is a game of economic warfare, strategic foresight,
              and competitive dominance. Build your empire carefully—because in
              this world, power is measured not by chance alone, but by the
              assets you control and the decisions you make.
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

export default WorldTycoonDetails;
