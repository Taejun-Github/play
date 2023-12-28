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
import api from "../api/api.ts";
import {AxiosError} from "axios";

interface errorResponseData {
    message: string[];
    oldInput: { [key: string]: string };
}

const Login = () => {
    const navigate = useNavigate();
    const toModule = () => {
        alert('사용한 컴포넌트 모음');
        navigate(`/module`);

    }

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const validateEmail = (emailValue: string) => {
        const isValid = /\S+@\S+\.\S+/.test(emailValue);
        setIsEmailValid(isValid);
    }

    const validatePassword = (passwordValue: string) => {
        const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(passwordValue);
        setIsPasswordValid(isPasswordValid);
    }

    const sendLoginData = async (email: string, password: string): Promise<void> => {
        validateEmail(email);
        validatePassword(password);

        if (!isEmailValid && !isPasswordValid) {
            window.alert('유효성 검사에 실패했습니다');
            return;
        }

        try {
            const response = await api.post('/login', {email, password});
            console.log(response.data);
        } catch(e) {
            const error = e as AxiosError<errorResponseData>;
            const errorData: errorResponseData | undefined = error.response?.data;
            if (errorData !== undefined) {
                setError(true);
                setErrorMessage(errorData.message[0])
            }
        }
    }
    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword);
    };

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handleCheckboxChange = (isChecked: boolean) => {
        setCheckboxChecked(isChecked);

        // 체크박스가 체크된 경우 아이디와 비밀번호를 로컬스토리지에 저장
        if (checkboxChecked) {
            localStorage.setItem('savedEmail', email);
            localStorage.setItem('savedPassword', password);
        } else {
            // 체크가 해제된 경우 로컬스토리지에서 데이터 제거
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('savedPassword');
        }
    };


    useEffect(() => {
        // email, password 유효성 검사
        // 페이지가 렌더링될 때 로컬스토리지에서 데이터를 가져와서 입력란에 설정
        const storedEmail = localStorage.getItem('savedEmail');
        const storedPassword = localStorage.getItem('savedPassword');

        if (storedEmail) {
            setEmail(storedEmail);
        }

        if (storedPassword) {
            setPassword(storedPassword);
        }
        
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
        <Checkbox text="Remember me" object="login" onCheckboxChange={handleCheckboxChange}/>
        {error && <p className="login__error">{errorMessage}</p>}
        {/*스타일링 해야 한다.*/}
        <BigButton text="Sign in" onButtonClick={sendLoginData.bind(null, email, password)} disabled={false}/>
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
