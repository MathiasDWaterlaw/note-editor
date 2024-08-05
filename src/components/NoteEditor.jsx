import "./NoteEditor.css";
import { useEffect } from "react";
import { useHeading, useParagraph } from "../context/NoteContext";
import TextareaAutosize from "react-textarea-autosize";

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
      <TextareaAutosize
        ref={headingRef}
        className='input-area note-heading'
        onChange={(e) => {
          setHeadingState(e.target.value);
        }}
        value={headingState}
        placeholder='Title...'
        minRows={1}
      ></TextareaAutosize>

      <TextareaAutosize
        ref={paragraphRef}
        className='input-area note-paragraph'
        onChange={(e) => {
          setParagraphState(e.target.value);
        }}
        placeholder='Add your text here...'
        value={paragraphState}
        minRows={4}
      ></TextareaAutosize>
    </div>
  );
}

export default NoteEditor;
