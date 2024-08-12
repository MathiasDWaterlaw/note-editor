import { Link } from "react-router-dom";
import {
  useNoteObject,
  useHeading,
  useParagraph,
} from "../context/NoteContext";
import { useEffect } from "react";

export default function NoteItemDisplay({ note }) {
  const { noteObject, setNoteObject } = useNoteObject();
  const [headingState, setHeadingState] = useHeading();
  const [paragraphState, setParagraphState] = useParagraph();

  const fromStampToDate = (timestamp) => {};

  const goToNoteEditor = (_note) => {
    setNoteObject(_note);
    setHeadingState(_note.title);
    setParagraphState(_note.content);
  };

  return (
    <li key={note.key} className='ListItem'>
      <Link
        to='/note-editor'
        className='note-item-link'
        onClick={() => {
          goToNoteEditor(note);
        }}
      >
        <div className='NoteItem'>
          <h4>{note.title}</h4>
          <p>{note.timestamp}</p>
        </div>
      </Link>
    </li>
  );
}
