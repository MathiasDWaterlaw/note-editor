import "./NoteEditor.css";
import { useEffect, useRef, useState } from "react";
import { useHeading, useParagraph } from "../context/NoteContext";

function NoteEditor() {
  const [headingState, setHeadingState] = useHeading();
  const [paragraphState, setParagraphState] = useParagraph();

  useEffect(() => {
    if (headingState !== "") {
      console.log(headingState);
    }
    if (paragraphState !== "") {
      console.log(paragraphState);
    }
  }, [headingState, paragraphState]);

  return (
    <div className='NoteEditor'>
      <textarea
        // ref={headingRef}
        className='input-area note-heading'
        // contentEditable
        onChange={(e) => {
          setHeadingState(e.target.value);
        }}
        value={headingState}
        placeholder='Title...'
        rows={1}
      ></textarea>

      <textarea
        className='input-area note-paragraph'
        onChange={(e) => {
          setParagraphState(e.target.value);
        }}
        placeholder='Add your text here...'
        value={paragraphState}
      ></textarea>
    </div>
  );
}

export default NoteEditor;
