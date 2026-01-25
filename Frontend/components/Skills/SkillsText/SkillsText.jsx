import React from "react";
import "./SkillsText.css";
import { motion } from "framer-motion";
const SkillsText = () => {
  const SkillsObj = [
    { Name: "JAVA", per: 70 },
    { Name: "HTML & CSS", per: 80 },
    { Name: "JavaStript", per: 70 },
    { Name: "React.js", per: 80 },
    { Name: "Node.js & Express.js", per: 80 },
    { Name: "Mongoose & MongoDB", per: 80 },
  ];
  return (
    <div className="SkillTxtCont">
      <h1>My Skills</h1>
      {SkillsObj.map((ele) => (
        <div className="SkillCont">
          <h2>{ele.Name}:</h2>
          <div className="barcont">
            <div className="bar3">
              <motion.div
                className="bar-fill3"
                style={{
                  height: "100%",
                  width: `0%`,
                  // backgroundColor: "#fca311",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
                whileInView={{ width: `${ele.per}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            <h2>{ele.per}%</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsText;
