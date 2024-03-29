"use client";

import { FC } from "react";
import { motion, Variants } from "framer-motion";

const TransitionVariants: Variants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition: FC = () => {
  return (
    <div key="parent">
      <motion.div
        key="child1"
        className="fixed top-0 bottom-0 h-screen w-screen right-full z-[30] bg-yellow-800"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        key="child2"
        className="fixed top-0 bottom-0 h-screen w-screen right-full z-[20] bg-yellow-700"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        key="child3"
        className="fixed top-0 bottom-0 h-screen w-screen right-full z-[10] bg-yellow-600"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Transition;
