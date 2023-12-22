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
      </div>
    </>
  );
}

export default App;
