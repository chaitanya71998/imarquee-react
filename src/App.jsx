import "./styles.css";
import Marquee from "react-easy-marquee";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [shouldShowText, setShouldShowText] = useState(false);

  const onChangeTextContent = (e) => {
    setText(e.target.value);
  };

  const onClickResetText = () => {
    setText("");
  };

  const onClickShowText = () => {
    setShouldShowText(!shouldShowText)
  };
  return (
    <div className="App">
      <input
        placeholder={"Enter you text"}
        value={text}
        onChange={onChangeTextContent}
      />
      <button onClick={onClickShowText}>
        {shouldShowText ? "Hide" : "Show"} full screen
      </button>
      <button onClick={onClickResetText}>Reset Text</button>
      {shouldShowText && (
        <Marquee background="#fafafa" height="250px" reverse={true}>
          <span>{text}</span>
        </Marquee>
      )}
    </div>
  );
}
