import styles from "../assets/css/components/ChatInput.module.css";
import scanIcon from "../assets/svg/scan.svg";
import microphoneIcon from "../assets/svg/microphone.svg";
import sendIcon from "../assets/svg/send.svg";
import React from "react";

interface ChatInputProps {
  text: string;
  placeholder: string;
}

const ChatInput: React.FC<ChatInputProps> = (props) => {
  return (
    <div className={styles.chatInput}>
      <div className={styles.chatInput__frame}>
        <input
          type="text"
          className={styles.chatInput__form}
          placeholder={props.placeholder}
        />
        <img
          src={scanIcon}
          alt="Scan Icon"
          className={styles.chatInput__icon}
        />
        <img
          src={microphoneIcon}
          alt="Microphone Icon"
          className={styles.chatInput__icon}
        />
      </div>
      <button className={styles.chatInput__sendButton}>
        <img
          src={sendIcon}
          alt="Send Icon"
          className={styles.chatInput__buttonIcon}
        />
      </button>
    </div>
  );
};

export default ChatInput;
