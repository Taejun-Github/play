import React from "react";
import styles from "../assets/css/components/BigButton.module.css";

interface BigButtonProps {
  text: string;
  onButtonClick: () => void;
  disabled: boolean;
}

const BigButton: React.FC<BigButtonProps> = (props) => {

  const buttonClick = () => {
    props.onButtonClick();
  }

  return <button
      className={`${styles.bigButton} ${props.disabled ? styles['bigButton--disabled'] : ''}`}
      onClick={buttonClick}
      disabled={props.disabled}
  >
    {props.text}
  </button>;
};

export default BigButton;
