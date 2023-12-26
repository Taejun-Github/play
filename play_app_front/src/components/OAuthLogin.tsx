import styles from '../assets/css/components/OAuthLogin.module.css';
import google from "../assets/svg/google.svg";
import facebook from "../assets/svg/facebook.svg";
import apple from "../assets/svg/apple.svg";
import line from "../assets/svg/line.svg";

interface oAuthLoginProps {
    text: string;
}

const OAuthLogin = (props: oAuthLoginProps) => {
    return <div className={styles.oAuthLogin}>
        <div className={styles.oAuthLogin__title}>
            <img src={line} className={styles.oAuthLogin__line}  alt="line"/>
            <div className={styles.oAuthLogin__titleText}>{props.text}</div>
            <img src={line} className={styles.oAuthLogin__line}  alt="line"/>
        </div>
        <div className={styles.oAuthLogin__icons}>
            <div className={styles.oAuthLogin__icon}>
                <img src={google} alt="google"  />
            </div>
            <div className={styles.oAuthLogin__icon}>
                <img src={facebook} alt="facebook"  />
            </div>
            <div className={styles.oAuthLogin__icon}>
                <img src={apple} alt="apple"  />
            </div>
        </div>
    </div>
}

export default OAuthLogin;
