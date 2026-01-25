import React from "react";
import "./WorldTycoon.css";
import { motion } from "framer-motion";
import ButtonHover from "../../ButtonHover/ButtonHover";
const WorldTycoon = () => {
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
  return (
    <div className="WorldTycoonCont">
      <div className="descripCont">
        <h1>Discription</h1>
        <div className="ParaCont">
          <h2>World Tycoon — Real-Time Strategy Board Game</h2>
          <p>
            World Tycoon is a real-time multiplayer strategic board game for up
            to four players, where global dominance is achieved through smart
            investments and calculated decisions. Players travel across a world
            map of country-based properties, acquiring assets, paying rent, and
            managing resources through dice-driven turns.
          </p>
          <p>
            The game features synchronized real-time turns, centralized banking,
            and persistent state management, ensuring every action is instantly
            reflected for all players. With high-stakes financial strategy and
            competitive gameplay, World Tycoon challenges players to build an
            empire—or risk economic collapse.
          </p>
        </div>
      </div>
      <div className="FeatureCont">
        <h1>Features</h1>
        <div className="FeatCard">
          <div className="FeatCont">
            <h3>Real-Time Multiplayer Gameplay</h3>
            <p>
              Play with up to four players in a synchronized, server-controlled
              environment.
            </p>
          </div>
          <div className="FeatCont">
            <h3>Centralized Banking System</h3>
            <p>
              Handles transactions, rent collection, asset purchases, and
              liquidation in real time.
            </p>
          </div>
          <div className="FeatCont">
            <h3>Turn-Based Strategy Engine</h3>
            <p>
              Dice-based movement and server-managed turns ensure fair and
              structured gameplay.
            </p>
          </div>
          <div className="FeatCont">
            <h3>Persistent Game State</h3>
            <p>
              Every move, transaction, and ownership change is instantly
              reflected across all connected players.
            </p>
          </div>
          <div className="FeatCont">
            <h3>Strategic Asset Liquidation</h3>
            <p>
              Players can sell properties to regain liquidity and fund future
              acquisitions.
            </p>
          </div>
        </div>
      </div>
      <div className="LinksContProject1">
        <div className="LinksIons1 githubIcon">
          <motion.img
            whileHover={anim}
            src="./public/Icon/github.png"
            title="GitHub Repo"
            alt=""
          />
        </div>
        <div className="LinksIons1 githubIcon">
          <motion.img
            whileHover={anim}
            src="./public/Icon/redirect.png"
            alt=""
            title="Live Preview"
          />
        </div>
      </div>
      <ButtonHover text={"Details"} />
    </div>
  );
};

export default WorldTycoon;
