import "./NoteEditor.css";
import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import {
  useHeading,
  useParagraph,
  useNoteObject,
} from "../context/NoteContext";

import useLocalStorage from "../custom-hooks/useLocalStorage";

function NoteEditor() {
  // local storage
  const [setDraft, getDraft] = useLocalStorage("draft");

  // global
  const [headingState, setHeadingState] = useHeading();
  const [paragraphState, setParagraphState] = useParagraph();
  const { noteObject, setNoteObject } = useNoteObject();

  useEffect(() => {
    const draft = getDraft();

    if (draft) {
      if (draft.state) {
        setNoteObject(draft.draftNoteObject);
        setHeadingState(draft.draftNoteObject.note.title);
        setParagraphState(draft.draftNoteObject.note.content);
      }
    }
  }, []);

  useEffect(() => {
    if (headingState !== "" || paragraphState !== "") {
      setDraft({ state: true, draftNoteObject: noteObject });
    } else {
      setDraft({ state: false, draftNoteObject: "" });
    }
  }, [headingState, paragraphState, noteObject]);

  return (
    <div className='NoteEditor'>
      <TextareaAutosize
        className='input-area note-heading'
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
