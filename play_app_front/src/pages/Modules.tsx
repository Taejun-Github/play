import "../assets/css/pages/modules.scss";
import BigButton from "../components/BigButton";
import DarkButton from "../components/DarkButton";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import LightButton from "../components/LightButton";
import ChatBoxLight from "../components/ChatBoxLight";
import ChatBoxDark from "../components/ChatBoxDark";
import ChatInput from "../components/ChatInput";
import NavBar from "../components/NavBar";
import CategoryNav from "../components/CategoryNav";
import ChatBoxSaved from "../components/ChatBoxSaved";
import StatusBar from "../components/StatusBar.tsx";
import CategoryItem from "../components/CategoryItem.tsx";
import OAuthLogin from "../components/OAuthLogin.tsx";

function App() {
  const myStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <>
      <div className="test">
        <BigButton text="Sign in" />
        <InputField title="Email" placeholder="Email" type="mail" />
        <PasswordField title="Password" placeholder="Password" />
        <div style={myStyle}>
          <LightButton text="Skip" />
          <DarkButton text="Continue" />
        </div>
        <ChatBoxDark text="dark" />
        <ChatBoxLight text="light" />
        <ChatInput text="chatInput" placeholder="Ask me anything" />
        <NavBar item1="chat" item2="category" item3="Saved" />
        <CategoryNav
          item1="All"
          item2="Writing"
          item3="Social"
          item4="Coding"
        />
        <ChatBoxSaved
          title="Write article on impact of social me Write article on impact of social me.."
          content="Social media has become an integral part of our day-to-day lives. It has changed the way"
          date={new Date()}
        />
        <StatusBar />
        <CategoryItem logo="writing" color_outer="rgba(255, 234, 234, 0.60)" color_inner="rgba(231, 108, 108, 0.40)" title="Write an Articles" content="Generate well- written articles on any topic you want." />
        <CategoryItem logo="academic" color_outer="rgba(186, 246, 250, 0.23)" color_inner="rgba(108, 194, 231, 0.40)" title="Academic Writer" content="Generate educational writing such as essays, reports, etc." />
        <OAuthLogin text="or continue with"/>
      </div>
    </>
  );
}

export default App;
