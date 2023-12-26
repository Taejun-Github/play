import StatusBar from "../components/StatusBar.tsx";
import "../assets/css/pages/login.scss";
import InputField from "../components/InputField.tsx";
import PasswordField from "../components/PasswordField.tsx";
import BigButton from "../components/BigButton.tsx";
import {Link} from "react-router-dom";
import OAuthLogin from "../components/OAuthLogin.tsx";
import greeting from "../assets/svg/greeting.svg";

const Login = () => {
    return <>
        <StatusBar />
        <div className="login">
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
        <div>
            <InputField title="Email" placeholder="Email" type="text" />
            <PasswordField title="Password" placeholder="Password" />
        </div>
        <div>
        {/*    체크박스 자리  */}
        </div>
        <div>
            <BigButton text="Sign in" />
            <button className="login__forgetPassword">Forget Password?</button>
            {/* 이 부분에서 토큰을 사용해서 사용자에게 메일을 보내는 로직을 백엔드에서 구현한다.*/}
            <div className="login__toSignup">
                <span>Don't have an account?</span>
                <Link to="/signup">sign up</Link>
            </div>
        </div>
        <OAuthLogin  text="or continue with"/>
    </>
}

export default Login;
