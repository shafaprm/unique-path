import { useState } from "react";
import { FaPlay } from "react-icons/fa6"; // play button and pause button
import {
  MdSkipPrevious,
  MdSkipNext,
  MdOutlineReplay,
  MdOutlineArrowBackIosNew,
} from "react-icons/md"; // prev and next

import { motion, useAnimate } from "framer-motion";

import {codeAnimation, Grid} from './Grid.js'

import "./Dynamic.css";

const Dynamic = () => {
  const [textButton, setTextButton] = useState(false);
  const [codeButton, setCodeButton] = useState(false);
  const [startAnimation, setAnimation] = useState(false);
  const [scopeCode, animateCode] = useAnimate();

  const handleTextButton = () => {
    setTextButton(!textButton);
  };

  const handleCodeButton = () => {
    setCodeButton(!codeButton);
  };

  const handleAnimation = async () => {
    setAnimation(!startAnimation)
    codeAnimation(animateCode)
  };

  return (
    <div className="container">
      <Grid startAnimation = {startAnimation} />
      <div className="settings-container">
        <div className="settings-wrapper">
          <button className="prev-button">
            <MdSkipPrevious />
          </button>
          <button className="main-button" onClick={handleAnimation}>
            {startAnimation ? (
              <MdOutlineReplay className="replay-button" />
            ) : (
              <FaPlay className="start-button" />
            )}
          </button>
          <button className="next-button">
            <MdSkipNext />
          </button>
        </div>
      </div>
      <div className="text-container">
        <motion.div
          className="text-wrapper"
          animate={{ x: textButton ? 425 : 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <p className = "title-text">Dynamic Programming</p>
          Algoritma Dynamic Programming memetakan array dua dimensi dengan
          menginisiasi kolom paling kiri dan baris dengan nilai 1.
        </motion.div>
        <button className="text-button" onClick={handleTextButton}>
          <MdOutlineArrowBackIosNew
            className={`text-icon${textButton ? " active" : ""}`}
          />
        </button>
      </div>
      <div className="code-container">
        <motion.div
          className="code-wrapper"
          animate={{ x: codeButton ? 425 : 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          ref={scopeCode}
        >
          <motion.div id="code-0">function uniquePathsWithObstacles(grid):</motion.div>
          <motion.div id="code-1">
            &nbsp;&nbsp;{`fill first cols and rows with 0 or 1`}
          </motion.div>
          <motion.div id="code-2">&nbsp;&nbsp;for i from 1 to rows</motion.div>
          <motion.div id="code-3">&nbsp;&nbsp;&nbsp;&nbsp;for i from 1 to cols</motion.div>
          <motion.div id="code-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if grid[i][j] == 1:`}</motion.div>
          <motion.div id="code-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`dp[i][j] = 0`}</motion.div>
          <motion.div id="code-6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`else:`}</motion.div>
          <motion.div id="code-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]`}</motion.div>
          <motion.div id="code-8">&nbsp;&nbsp;return dp[rows - 1][cols - 1]</motion.div>
        </motion.div>
        <button className="code-button" onClick={handleCodeButton}>
          <MdOutlineArrowBackIosNew
            className={`code-icon${codeButton ? " active" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Dynamic;
