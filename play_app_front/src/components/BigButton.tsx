import React from "react";
import styles from "../assets/css/components/BigButton.module.css";

interface BigButtonProps {
  text: string;
  onButtonClick: () => void;
}

const BigButton: React.FC<BigButtonProps> = (props) => {

  const buttonClick = () => {
    props.onButtonClick();
  }

  return <button className={styles.bigButton} onClick={buttonClick}>{props.text}</button>;
};

export default BigButton;
