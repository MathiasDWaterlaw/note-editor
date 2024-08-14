import { Link } from "react-router-dom";
import {
  useNoteObject,
  useHeading,
  useParagraph,
} from "../context/NoteContext";

export default function NoteItemDisplay({ note }) {
  const { setNoteObject } = useNoteObject();
  const [, setHeadingState] = useHeading();
  const [, setParagraphState] = useParagraph();

  const setNoteEditor = (_note) => {
    setNoteObject(_note);
    setHeadingState(_note.title);
    setParagraphState(_note.content);
  };

  const date = new Date(note.timestamp);
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const month =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDate = `${day}/${month}/${year}`;

  console.log(fullDate);

  return (
    <li id={note.key} className='ListItem'>
      <Link
        to='/note-editor'
        className='note-item-link'
        onClick={() => {
          setNoteEditor(note);
        }}
      >
        <div className='NoteItem'>
          <h3>{note.title}</h3>
          <p>{fullDate}</p>
        </div>
      </Link>
    </li>
  );
}
