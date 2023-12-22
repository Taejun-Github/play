import React from "react";
import styles from "../assets/css/components/ChatBoxLight.module.css";
import copyIcon from "../assets/svg/copy.svg";
import shareIcon from "../assets/svg/share.svg";

interface ChatBoxLightProps {
  text: string;
}

const ChatBoxLight: React.FC<ChatBoxLightProps> = (props) => {
  return (
    <div className={styles.chatBox}>
      <div className={styles.chatBox__text}>{props.text}</div>
      <div className={styles.chatBox__icons}>
        <img src={copyIcon} alt="Save Icon" className={styles.chatBox__icon} />
        <img src={shareIcon} alt="Save Icon" className={styles.chatBox__icon} />
      </div>
    </div>
  );
};

export default ChatBoxLight;
