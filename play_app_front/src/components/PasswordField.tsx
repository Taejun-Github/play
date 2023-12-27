import React, {ChangeEvent, useState} from "react";
import styles from "../assets/css/components/PasswordField.module.css";
import eyeSvg from "../assets/svg/eye.svg";
import eyeOffSvg from "../assets/svg/eye-off.svg";

interface PasswordFieldProps {
  title: string;
  placeholder: string;
  onPasswordChange: (newPassword: string) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const inputType = showPassword ? "text" : "password";


    const handleInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        props.onPasswordChange(newPassword);
    }

  return (
    <div className={styles.passwordInput}>
      <p className={styles.passwordInput__title}>{props.title}</p>
      <div className={styles.passwordInput__field}>
        <input
          type={inputType}
          placeholder={props.placeholder}
          className={styles.passwordInput__form}
          onChange={handleInputPassword}
        />
          {!showPassword ? (
              <img
                  src={eyeSvg}
                  alt="Password Icon"
                  className={styles.passwordInput__icon}
                  onClick={togglePasswordVisibility}
              />
          ) : (
              <img
                  src={eyeOffSvg}
                  alt="Password Icon"
                  className={styles['passwordInput__icon--show']}
                  onClick={togglePasswordVisibility}
              />
          )}
      </div>
      <p className={styles.underline}></p>
    </div>
  );
};

export default PasswordField;
