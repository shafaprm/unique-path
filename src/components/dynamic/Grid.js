import { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongDown,
} from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import "./Dynamic.css";

const Grid = ({ startAnimation }) => {
  const [scope, animate] = useAnimate();
  const [box0, setBox0] = useState("0");
  const [box1, setBox1] = useState("0");
  const [box2, setBox2] = useState("0");
  const [box3, setBox3] = useState("0");
  const [box4, setBox4] = useState("1");
  const [box5, setBox5] = useState("0");
  const [box6, setBox6] = useState("1");
  const [box7, setBox7] = useState("0");
  const [box8, setBox8] = useState("0");
  const [box9, setBox9] = useState("0");
  const [box10, setBox10] = useState("0");
  const [box11, setBox11] = useState("0");

  useEffect(() => {
    console.log(startAnimation);
    if (startAnimation) {
      dynamicAnimation();
    }
  }, [startAnimation]);

  const dynamicAnimation = async () => {
      animate("#box-4", { backgroundColor: "#D65775" }, { duration: 1 });
    await animate("#box-6", { backgroundColor: "#D65775" }, { duration: 1 });

    animate("#box-4", { backgroundColor: "#fff" }, { duration: 1, delay: 1 });
    await animate(
      "#box-6",
      { backgroundColor: "#fff" },
      { duration: 1, delay: 1 }
    );

    setBox0("1");
    await animate(
      "#box-0",
      { backgroundColor: "#4B65BA", color: "#fff" },
      { duration: 1 }
    );

    await animate("#box-0 .right-arrow", { opacity: 1 }, { duration: 0.6 });

    animate(
      "#box-0",
      { backgroundColor: "#fff", color: "#000" },
      { duration: 1, delay: 0.6 }
    );

    setBox1("1");
    animate("#box-0 .right-arrow", { opacity: 0 }, { duration: 1, delay: 0.2 });
    await animate(
      "#box-1",
      { backgroundColor: "#4B65BA", color: "#fff" },
      { duration: 1, delay: 0.6 }
    );

    await animate("#box-1 .right-arrow", { opacity: 1 }, { duration: 0.6 });

    animate(
      "#box-1",
      { backgroundColor: "#fff", color: "#000" },
      { duration: 1, delay: 0.6 }
    );

    setBox2("1");
    animate("#box-1 .right-arrow", { opacity: 0 }, { duration: 1, delay: 0.6 });

    await animate(
      "#box-2",
      { backgroundColor: "#4B65BA", color: "#fff" },
      { duration: 1, delay: 0.2 }
    );

    await animate("#box-2 .right-arrow", { opacity: 1 }, { duration: 0.6 });

    animate(
      "#box-2",
      { backgroundColor: "#fff", color: "#000" },
      { duration: 1, delay: 0.6 }
    );

    setBox3("1");
    animate("#box-2 .right-arrow", { opacity: 0 }, { duration: 1, delay: 0.6 });
    await animate(
      "#box-3",
      { backgroundColor: "#4B65BA", color: "#fff" },
      { duration: 1, delay: 0.6 }
    );


    await animate(
      "#box-3",
      { backgroundColor: "#fff", color: "#000" },
      { duration: 1, delay: 0.6 }
    );

    setBox4("0");
    await animate(
      "#box-4",
      { backgroundColor: "#FEC515", color: "#fff" },
      { duration: 1, delay: 0.2 }
    );

    await animate("#box-4 .down-arrow", { opacity: 1 }, { duration: 0.6 });
    animate(
      "#box-4",
      { backgroundColor: "#fff", color: "#000" },
      { duration: 1, delay: 0.6 }
    );

    setBox8("0");
    animate("#box-4 .down-arrow", { opacity: 0 }, { duration: 1, delay: 0.2 });

    await animate(
      "#box-8",
      { backgroundColor: "#FEC515", color: "#fff" },
      { duration: 1, delay: 0.2 }
    );

    await animate(
      "#box-8",
      { backgroundColor: "#fff", color: "#000" },
      { duration: 1, delay: 0.2 }
    );

    // starting point
    await animate('#box-5', {backgroundColor: "#4B65BA", color: "#fff"}, {duration: 1, delay: 0.2})

    animate('#box-1 .down-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})

    await animate('#box-4 .right-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})
    setBox5('1');

    animate('#box-5', {backgroundColor: "#fff", color: "#000"}, {duration: 1, delay: 0.2})

    animate('#box-1 .down-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})
    await animate('#box-4 .right-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})
    // end point

    await animate('#box-6', {backgroundColor: "#FEC515", color: "#fff"}, {duration: 1, delay: 0.2})
    setBox6('0');

    await animate('#box-6', {backgroundColor: "#fff", color: "#000"}, {duration: 1, delay: 0.7})
    
    //box 7
    await animate('#box-7', {backgroundColor: "#4B65BA", color: "#fff"}, {duration: 1, delay: 0.2})

    animate('#box-3 .down-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})

    await animate('#box-6 .right-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})
    setBox7('1');

    animate('#box-7', {backgroundColor: "#fff", color: "#000"}, {duration: 1, delay: 0.2})

    animate('#box-3 .down-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})
    await animate('#box-6 .right-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})

    //box 9
    await animate('#box-9', {backgroundColor: "#4B65BA", color: "#fff"}, {duration: 1, delay: 0.2})

    animate('#box-5 .down-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})

    await animate('#box-8 .right-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})
    setBox9('1');

    animate('#box-9', {backgroundColor: "#fff", color: "#000"}, {duration: 1, delay: 0.2})

    animate('#box-5 .down-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})
    await animate('#box-8 .right-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})
    
    //box 10
    await animate('#box-10', {backgroundColor: "#4B65BA", color: "#fff"}, {duration: 1, delay: 0.2})

    animate('#box-6 .down-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})

    await animate('#box-9 .right-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})
    setBox10('1');

    animate('#box-10', {backgroundColor: "#fff", color: "#000"}, {duration: 1, delay: 0.2})

    animate('#box-6 .down-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})
    await animate('#box-9 .right-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})

    // box 11
    await animate('#box-11', {backgroundColor: "#4B65BA", color: "#fff"}, {duration: 1, delay: 0.2})

    animate('#box-7 .down-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})

    await animate('#box-10 .right-arrow', {opacity: 1}, {duration: 0.6, delay: 0.3})
    setBox11('2');

    animate('#box-11', {backgroundColor: "#fff", color: "#000"}, {duration: 1, delay: 0.2})

    animate('#box-7 .down-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})
    await animate('#box-10 .right-arrow', {opacity: 0}, {duration: 0.6, delay: 0.2})

    // complete path
    
    await animate(
      "#box-0 .right-arrow",
      { opacity: 1, color: "#4B65BA" },
      { duration: 0.5 }
    );
  
    animate(
      "#box-1 .right-arrow",
      { opacity: 1, color: "#4B65BA" },
      { duration: 0.5, delay: 0.2 }
    );
    await animate(
      "#box-1 .down-arrow",
      { opacity: 1, color: "#FF8A27" },
      { duration: 0.5, delay: 0.2 }
    );
  
    animate(
      "#box-2 .right-arrow",
      { opacity: 1, color: "#4B65BA" },
      { duration: 0.5, delay: 0.2 }
    );
    await animate(
      "#box-5 .down-arrow",
      { opacity: 1, color: "#FF8A27" },
      { duration: 0.5, delay: 0.2 }
    );
  
    animate(
      "#box-3 .down-arrow",
      { opacity: 1, color: "#4B65BA" },
      { duration: 0.5, delay: 0.2 }
    );
    await animate(
      "#box-9 .right-arrow",
      { opacity: 1, color: "#FF8A27" },
      { duration: 0.5, delay: 0.2 }
    );
  
    animate(
      "#box-7 .down-arrow",
      { opacity: 1, color: "#4B65BA" },
      { duration: 0.5, delay: 0.2 }
    );
    await animate(
      "#box-10 .right-arrow",
      { opacity: 1, color: "#FF8A27" },
      { duration: 0.5, delay: 0.2 }
    );
  };

  return (
    <div ref={scope} className="grid-container">
      <motion.div id="box-0">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" /> {box0}
      </motion.div>
      <motion.div id="box-1">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box1}
      </motion.div>
      <motion.div id="box-2">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box2}
      </motion.div>
      <motion.div id="box-3">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box3}
        <IoClose className="close-icon" />
      </motion.div>
      <motion.div id="box-4">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box4}
      </motion.div>
      <motion.div id="box-5">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box5}
      </motion.div>
      <motion.div id="box-6">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box6}
      </motion.div>
      <motion.div id="box-7">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box7}
        <IoClose className="close-icon" />
      </motion.div>
      <motion.div id="box-8">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box8}
      </motion.div>
      <motion.div id="box-9">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box9}
        <IoClose className="close-icon" />
      </motion.div>
      <motion.div id="box-10">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box10}
        <IoClose className="close-icon" />
      </motion.div>
      <motion.div id="box-11">
        <HiOutlineArrowLongRight className="right-arrow" />
        <HiOutlineArrowLongDown className="down-arrow" />
        {box11}
      </motion.div>
    </div>
  );
};

const codeAnimation = async (animate) => {
  await animate('#code-0', {backgroundColor: "#000"}, {duration: 0.2})

  await animate('#code-0', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 2})

  await animate('#code-1', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.4})

  await animate('#code-1', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 13})

  await animate('#code-7', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.4})

  await animate('#code-7', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 2})

  animate('#code-4', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.2})
  await animate('#code-5', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.2})

  animate('#code-4', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 2})
  await animate('#code-5', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 2})

  await animate('#code-7', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.4})

  await animate('#code-7', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 12})
}

export {codeAnimation, Grid}
