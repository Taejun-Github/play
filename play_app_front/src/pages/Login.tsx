import StatusBar from "../components/StatusBar.tsx";
import "../assets/css/pages/login.scss";
import InputField from "../components/InputField.tsx";
import PasswordField from "../components/PasswordField.tsx";
import BigButton from "../components/BigButton.tsx";
import {Link, useNavigate} from "react-router-dom";
import OAuthLogin from "../components/OAuthLogin.tsx";
import greeting from "../assets/svg/greeting.svg";
import Checkbox from "../components/Checkbox.tsx";
import backIcon from "../assets/svg/back.svg";
import {useEffect, useState} from "react";

const Login = () => {
    const navigate = useNavigate();
    const toModule = () => {
        alert('사용한 컴포넌트 모음');
        navigate(`/module`);

    }

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');

    const sendLoginData = (email: string, password: string): void => {
        console.log(email, password);
    }
    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword);
    };

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
    };


    useEffect(() => {
        // email, password 유효성 검사
    }, [email, password])

    return <>
        <StatusBar />
        <div className="login">
            <div className="login__backIcon">
                <img
                    src={backIcon}
                    alt="Back Icon"
                    onClick={toModule}
                />
            </div>
            <div className="login__titleContent">
                <div className="login__title">Welcome back</div>
                <img
                    src={greeting}
                    alt="greetings"
                />
            </div>
            <div className="login__description">
                Please enter you email & password to sign in
            </div>
        </div>
        <InputField title="Email" placeholder="Email" type="text" onInputChange={handleEmailChange}/>
        <PasswordField title="Password" placeholder="Password" onPasswordChange={handlePasswordChange} />
        <Checkbox text="Remember me" object="login"/>
        <BigButton text="Sign in" onButtonClick={sendLoginData.bind(null, email, password)}/>
        <button className="login__forgetPassword">Forget Password?</button>
        {/* 이 부분에서 토큰을 사용해서 사용자에게 메일을 보내는 로직을 백엔드에서 구현한다.*/}
        <div className="login__toSignup">
            <span>Don't have an account?</span>
            <Link to="/signup">sign up</Link>
        </div>
        <OAuthLogin  text="or continue with"/>
    </>
}

export default Login;
