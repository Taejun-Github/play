import React from "react";
import styles from "../assets/css/components/LightButton.module.css";

interface LightButtonProps {
  text: string;
}

const LightButton: React.FC<LightButtonProps> = (props) => {
  return <button className={styles.lightButton}>{props.text}</button>;
};

export default LightButton;
