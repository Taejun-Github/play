import StatusBar from "../components/StatusBar.tsx";
import greeting from "../assets/svg/greeting.svg";
import InputField from "../components/InputField.tsx";
import PasswordField from "../components/PasswordField.tsx";
import BigButton from "../components/BigButton.tsx";
import {Link, useNavigate} from "react-router-dom";
import OAuthLogin from "../components/OAuthLogin.tsx";
import "../assets/css/pages/signup.scss";
import Checkbox from "../components/Checkbox.tsx";
import backIcon from "../assets/svg/back.svg";
import {useState} from "react";

const Signup = () => {
    const navigate = useNavigate();
    const toModule = () => {
        alert('사용한 컴포넌트 모음');
        navigate(`/module`);
    }

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');

    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword);
    };

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
    };

    const sendSignupData = (email: string, password: string): void => {
        console.log(email, password);
    }

    return <>
        <StatusBar />
        <div className="signup">
            <div className="login__backIcon">
                <img
                    src={backIcon}
                    alt="Back Icon"
                    onClick={toModule}
                />
            </div>
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
        <InputField title="Your email" placeholder="Enter your email" type="text" onInputChange={handleEmailChange}/>
        <PasswordField title="Create password" placeholder="Create your password" onPasswordChange={handlePasswordChange}/>
        <Checkbox text="I agree to Chatbot_AI  Public Agreement, Terms, & Privacy Policy." object="signup"/>
        <BigButton text="Sign up" onButtonClick={sendSignupData.bind(null, email, password)}/>
        {/* 이 부분에서 토큰을 사용해서 사용자에게 메일을 보내는 로직을 백엔드에서 구현한다.*/}
        <div className="signup__toLogin">
            <span>Already have an account?</span>
            <Link to="/login">Sign In</Link>
        </div>
        <OAuthLogin  text="or continue with"/>
    </>
}

export default Signup;
