import React from "react";
import styles from "../assets/css/components/PasswordField.module.css";
import eyeSvg from "../assets/svg/eye.svg";
import eyeOffSvg from "../assets/svg/eye-off.svg";

interface PasswordFieldProps {
  title: string;
  placeholder: string;
}

const PasswordField: React.FC<PasswordFieldProps> = (props) => {
  return (
    <div className={styles.passwordInput}>
      <p className={styles.passwordInput__title}>{props.title}</p>
      <div className={styles.passwordInput__field}>
        <input
          type="password"
          placeholder={props.placeholder}
          className={styles.passwordInput__form}
        />
        <img
          src={eyeSvg}
          alt="Password Icon"
          className={styles.passwordInput__icon}
        />
        <img
          src={eyeOffSvg}
          alt="Password Icon"
          className={styles.passwordInput__icon}
        />
      </div>
      <p className={styles.underline}></p>
    </div>
  );
};

export default PasswordField;
