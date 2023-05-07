import Text from "../Text";
import { motion } from "framer-motion";
import styles from "./Button.module.css";
import React, { useState } from "react";
// import soundFile from "../../../public/assets/click.mp3";

export default function Button(props) {
  const { children, icon, fontSize, fontWeight, onClick, type, color, padding, bgColor } = props;

  // const padding = size == "large" ? "1em 2em" : "0.4em 0.9rem";

  const [audio] = useState(new Audio("/assets/click.wav"));

  function playSound() {
    audio.play();
  }

  return (
    <motion.button
      onClick={() => {
        playSound();
        onClick();
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      style={{ padding: padding, background: bgColor }}
      className={type === "secondary" ? styles.secondary : styles.primary}
    >
      {icon}
      <Text
        size={fontSize ? fontSize : "sm"}
        weight={fontWeight ? fontWeight : "bold"}
        color={type === "secondary" ? "light" : color}
      >
        {children}
      </Text>
    </motion.button>
  );
}
