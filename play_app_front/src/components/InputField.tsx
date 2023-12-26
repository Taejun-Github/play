import React from "react";
import styles from "../assets/css/components/InputField.module.css";
import mailIcon from "../assets/svg/mail.svg";

interface InputFieldProps {
  title: string;
  placeholder: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <div className={styles.basicInput}>
      <p className={styles.basicInput__title}>{props.title}</p>
      <div className={styles.basicInput__field}>
        <input
          type="text"
          placeholder={props.placeholder}
          className={styles.basicInput__form}
        />
        {/*  filter()로 type에 맞는 아이콘을 넣어야 한다. */}
        <img
          src={mailIcon}
          alt="Mail Icon"
          className={styles.basicInput__icon}
        />
      </div>
      <p className={styles.underline}></p>
    </div>
  );
};

export default InputField;
