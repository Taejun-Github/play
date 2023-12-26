import StatusBar from "../components/StatusBar.tsx";
import greeting from "../assets/svg/greeting.svg";
import InputField from "../components/InputField.tsx";
import PasswordField from "../components/PasswordField.tsx";
import BigButton from "../components/BigButton.tsx";
import {Link} from "react-router-dom";
import OAuthLogin from "../components/OAuthLogin.tsx";
import "../assets/css/pages/signup.scss";

const Signup = () => {
    return <>
        <StatusBar />
        <div className="signup">
            <div className="signup__titleContent">
                <div className="signup__title">Hello there</div>
                <img
                    src={greeting}
                    alt="greetings"
                />
            </div>
            <div className="signup__description">
                Please enter you email & password to create an account
            </div>
        </div>
        <div>
            <InputField title="Your email" placeholder="Enter your email" type="text" />
            <PasswordField title="Create password" placeholder="Create your password" />
        </div>
        <div>
            {/*    체크박스 자리  */}
        </div>
        <div>
            <BigButton text="Sign up" />
            {/* 이 부분에서 토큰을 사용해서 사용자에게 메일을 보내는 로직을 백엔드에서 구현한다.*/}
            <div className="signup__toLogin">
                <span>Already have an account?</span>
                <Link to="/login">Sign In</Link>
            </div>
        </div>
        <OAuthLogin  text="or continue with"/>
    </>
}

export default Signup;
