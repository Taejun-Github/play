import React from "react";
import styles from "../assets/css/components/DarkButton.module.css";

interface DarkButtonProps {
  text: string;
}

const DarkButton: React.FC<DarkButtonProps> = (props) => {
  console.log(styles.darkButton);
  return <button className={styles.darkButton}>{props.text}</button>;
};

export default DarkButton;
