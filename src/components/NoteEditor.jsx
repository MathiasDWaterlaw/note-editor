import "./NoteEditor.css";
import { useEffect, useState } from "react";

import {
  useHeading,
  useParagraph,
  useNoteObject,
} from "../context/NoteContext";

import TextareaAutosize from "react-textarea-autosize";
import { text } from "@fortawesome/fontawesome-svg-core";

function NoteEditor() {
  // global
  const [headingState, setHeadingState] = useHeading();
  const [paragraphState, setParagraphState] = useParagraph();
  const { noteObject, setNoteObject } = useNoteObject();

  useEffect(() => {
    console.log(noteObject);
  }, [headingState, paragraphState, noteObject]);

  return (
    <div className='NoteEditor'>
      <TextareaAutosize
        className='input-area note-heading'
        onFocus={() => {}}
        onChange={(e) => {
          setHeadingState(e.target.value);
          setNoteObject({
            ...noteObject,
            note: { title: e.target.value, content: paragraphState },
          });
        }}
        value={headingState}
        placeholder='Title...'
        minRows={1}
      ></TextareaAutosize>

      <TextareaAutosize
        className='input-area note-paragraph'
        onChange={(e) => {
          setParagraphState(e.target.value);
          setNoteObject({
            ...noteObject,
            note: { title: headingState, content: e.target.value },
          });
        }}
        placeholder='Add your text here...'
        value={paragraphState}
        minRows={4}
      ></TextareaAutosize>
    </div>
  );
}

export default NoteEditor;
