import React from "react";
import classes from "./BigButton.module.css";

interface BigButtonProps {
  text: string;
}

const BigButton: React.FC<BigButtonProps> = (props) => {
  return <button className={classes.bigButton}>{props.text}</button>;
};

export default BigButton;
