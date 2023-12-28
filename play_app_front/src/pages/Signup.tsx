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
import {useEffect, useState} from "react";
import api from "../api/api.ts";
import {AxiosError} from "axios";

interface errorResponseData {
    message: string[];
    oldInput: { [key: string]: string };
}

const Signup = () => {
    const navigate = useNavigate();
    const toModule = () => {
        alert('사용한 컴포넌트 모음');
        navigate(`/module`);
    }

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    // const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

    const validateEmail = (emailValue: string) => {
        const isValid = /\S+@\S+\.\S+/.test(emailValue);
        setIsEmailValid(isValid);
    }

    const validatePassword = (passwordValue: string) => {
        const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(passwordValue);
        setIsPasswordValid(isPasswordValid);
    }

    // const validateConfirmPassword = (confirmPasswordValue: string) => {
    //     const isConfirmPasswordValid = confirmPasswordValue === password;
    //     setIsConfirmPasswordValid(isConfirmPasswordValid);
    // }

    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword);
    };

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
    };

    const handleConfirmPasswordChange = (newConfirmPassword: string) => {
        setConfirmPassword(newConfirmPassword);
    }

    const handleCheckboxChange = (isChecked: boolean) => {
        setCheckboxChecked(isChecked);
    };


    const sendSignupData = async (email: string, password: string, confirmPassword: string): Promise<void> => {
        validateEmail(email);
        validatePassword(password);
        // validateConfirmPassword(confirmPassword);
        
        if (!isEmailValid && !isPasswordValid) {
            window.alert('유효성 검사에 실패했습니다');
            return;
        }
        

        try {
            const response = await api.post('/signup', {email, password, confirmPassword});
            console.log(response.data);
            alert('회원가입 완료');
            navigate(`/login`);

        } catch(e) {
            const error = e as AxiosError<errorResponseData>;
            const errorData: errorResponseData | undefined = error.response?.data;
            if (errorData !== undefined) {
                setError(true);
                setErrorMessage(errorData.message[0])
            }
        }
    }

    useEffect(() => {
    }, [email, password, confirmPassword])

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
        <PasswordField title="Confirm Password" placeholder="Confirm your password" onPasswordChange={handleConfirmPasswordChange}/>
        <Checkbox text="I agree to Chatbot_AI  Public Agreement, Terms, & Privacy Policy." object="signup" onCheckboxChange={handleCheckboxChange}/>
        {error && <p className="login__error">{errorMessage}</p>}
        <BigButton text="Sign up" onButtonClick={sendSignupData.bind(null, email, password, confirmPassword)} disabled={!checkboxChecked}/>
        {/* 이 부분에서 토큰을 사용해서 사용자에게 메일을 보내는 로직을 백엔드에서 구현한다.*/}
        <div className="signup__toLogin">
            <span>Already have an account?</span>
            <Link to="/login">Sign In</Link>
        </div>
        <OAuthLogin  text="or continue with"/>
    </>
}

export default Signup;
