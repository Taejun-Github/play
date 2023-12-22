import React from "react";
import styles from "../assets/css/components/ChatBoxDark.module.css";
import saveIcon from "../assets/svg/save.svg"; // 나중에 아이콘 바꾸기

interface ChatBoxDarkProps {
  text: string;
}

const ChatBoxDark: React.FC<ChatBoxDarkProps> = (props) => {
  return (
    <div className={styles.chatBox}>
      <div className={styles.chatBox__icons}>
        <img src={saveIcon} alt="Save Icon" className={styles.chatBox__icon} />
      </div>
      <div className={styles.chatBox__text}>{props.text}</div>
    </div>
  );
};

export default ChatBoxDark;
