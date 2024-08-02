import "../components/TextInput.css";
import { useState, useEffect } from "react";

function TextInput() {
  const [headingState, setHeadingState] = useState("");
  const [paragraphState, setParagraphState] = useState("");

  useEffect(() => {
    if (headingState !== "") {
      console.log(headingState);
    }
    if (paragraphState !== "") {
      console.log(paragraphState);
    }
  }, [headingState, paragraphState]);

  return (
    <div className='text-input'>
      <div
        className='input-area note-heading'
        contentEditable
        onInput={(e) => {
          setHeadingState(e.target.innerText);
        }}
      ></div>
      <div
        className='input-area note-paragraph'
        contentEditable
        onInput={(e) => {
          setParagraphState(e.target.innerText);
        }}
      ></div>
    </div>
  );
}

export default TextInput;
