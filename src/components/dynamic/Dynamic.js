import { useState } from "react";
import { FaPlay } from "react-icons/fa6"; // play button and pause button
import {
  MdSkipPrevious,
  MdSkipNext,
  MdOutlineReplay,
  MdOutlineArrowBackIosNew,
} from "react-icons/md"; // prev and next
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongDown,
} from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { motion, useAnimate } from "framer-motion";

import { gridAnimation, codeAnimation } from "./animation.js";

import Grid from './Grid.js'

import "./Dynamic.css";

const Dynamic = () => {
  const [textButton, setTextButton] = useState(false);
  const [codeButton, setCodeButton] = useState(false);
  const [startAnimation, setAnimation] = useState(false);
  const [scope, animate] = useAnimate();
  const [scopeCode, animateCode] = useAnimate();

  const handleTextButton = () => {
    setTextButton(!textButton);
  };

  const handleCodeButton = () => {
    setCodeButton(!codeButton);
  };

  const handleAnimation = async () => {
    setAnimation(!startAnimation)
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
          <motion.div id="code-0">function solve(grid):</motion.div>
          <motion.div id="code-1">
            &nbsp;&nbsp;{`if i < 0 or j < 0 or i >= m or j >= m:`}
          </motion.div>
          <motion.div id="code-2">&nbsp;&nbsp;&nbsp;&nbsp;return 0</motion.div>
          <motion.div id="code-3">&nbsp;&nbsp;if grid[i][j]:</motion.div>
          <motion.div id="code-4">&nbsp;&nbsp;&nbsp;&nbsp;return 0</motion.div>
          <motion.div id="code-5">
            &nbsp;&nbsp;if i == m - 1 and j == n - 1 and !grid[i][j]:
          </motion.div>
          <motion.div id="code-6">&nbsp;&nbsp;&nbsp;&nbsp;return 1</motion.div>
          <motion.div id="code-7">
            &nbsp;&nbsp;{`return solve(grid, i + 1, j) +`}
          </motion.div>
          <motion.div id="code-8">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`solve(grid, i, j + 1)`}
          </motion.div>
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
