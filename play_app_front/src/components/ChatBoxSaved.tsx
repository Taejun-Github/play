import styles from "../assets/css/components/ChatBoxSaved.module.css";
import arrowRight from "../assets/svg/arrow-right.svg";
import archiveAdd from "../assets/svg/archive-add.svg";
import { format } from "date-fns";
import React from "react";

interface chatBoxSavedProps {
  title: string;
  content: string;
  date: Date;
}

const ChatBoxSaved: React.FC<chatBoxSavedProps> = (props) => {
  const formattedDate = format(props.date, "d MMM yyyy");
  return (
    <div className={styles.savedChat}>
      <div className={styles.savedChat__article}>
        <div className={styles.savedChat__chatArea}>
          <div className={styles.savedChat__container}>
            <div className={styles.savedChat__title}>{props.title}</div>
            <div className={styles.savedChat__content}>{props.content}</div>
          </div>
          <img
            src={arrowRight}
            alt="Arrow Right"
            className={styles.savedChat__icon}
          />
        </div>
        <div className={styles.savedChat__date}>{formattedDate}</div>
      </div>
      <div className={styles.savedChat__archive}>
        <div>
          <img
            src={archiveAdd}
            alt="Archive Add"
            className={styles.savedChat__archiveIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBoxSaved;
