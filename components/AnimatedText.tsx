import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  direction: "left" | "right" | "top" | "bottom";
};

const AnimatedImage = (props: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const direction = props.direction;

  const rightVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const leftVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const topVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const bottomVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="Box"
      initial="hidden"
      animate={controls}
      variants={
        direction === "left"
          ? leftVariants
          : direction === "right"
          ? rightVariants
          : direction === "top"
          ? topVariants
          : bottomVariants
      }
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedImage;
