import "./NoteEditor.css";
import { useEffect } from "react";
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

  // global context
  const [headingState, setHeadingState] = useHeading();
  const [paragraphState, setParagraphState] = useParagraph();
  const { noteObject, setNoteObject, createNewNoteObject } = useNoteObject();

  const draft = getDraft();
  // on component load
  useEffect(() => {
    if (draft.state === false && !("id" in noteObject)) {
      setNoteObject(createNewNoteObject());
    }
  }, []);

  useEffect(() => {
    if (draft) {
      if (draft.state) {
        setHeadingState(draft.draft_note.title);
        setParagraphState(draft.draft_note.content);
        setNoteObject(draft.draft_note);
      }
    }
  }, []);

  useEffect(() => {
    console.log(noteObject);
  }, [noteObject]);

  // every time occur a change in heading, paragraph or note-object
  useEffect(() => {
    if ("id" in noteObject) {
      setDraft({ state: false, draft_note: "" });
    } else {
      if (headingState !== "" || paragraphState !== "") {
        setDraft({ state: true, draft_note: noteObject });
      } else {
        setDraft({ state: false, draft_note: "" });
      }
    }
  }, [headingState, paragraphState, noteObject]);

  return (
    <div className='NoteEditor'>
      <TextareaAutosize
        className='input-area note-heading'
        onInput={(e) => {
          setHeadingState(e.target.value);
          setNoteObject({
            ...noteObject,
            title: e.target.value,
            content: paragraphState,
          });
        }}
        value={headingState}
        placeholder='Title...'
        minRows={1}
      ></TextareaAutosize>

      <TextareaAutosize
        className='input-area note-paragraph'
        onInput={(e) => {
          setParagraphState(e.target.value);
          setNoteObject({
            ...noteObject,
            content: e.target.value,
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
