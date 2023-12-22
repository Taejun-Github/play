import React from "react";
import styles from "../assets/css/components/BigButton.module.css";

interface BigButtonProps {
  text: string;
}

const BigButton: React.FC<BigButtonProps> = (props) => {
  return <button className={styles.bigButton}>{props.text}</button>;
};

export default BigButton;
