import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faHouse,
  faFileArrowDown,
  faTrashCan,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

import { useNoteObject } from "../context/NoteContext";

import useLocalStorage from "../custom-hooks/useLocalStorage";

// Home Page navigation bar
function HomePageNav() {
  const { setNoteObject, createNewNoteObject } = useNoteObject();
  const [, getDraft] = useLocalStorage("draft");

  return (
    <nav className='HomePageNav'>
      <ul>
        <li></li>
      </ul>

      <ul className='nav-left-ul'>
        {getDraft() && getDraft().state && (
          <li>
            <div className='draft-alert'>
              <p>You have a draft!</p>
            </div>
          </li>
        )}
        <li>
          <Link
            to='/note-editor'
            className='nav-item'
            onClick={() => setNoteObject(createNewNoteObject())}
          >
            <FontAwesomeIcon icon={faPen} size='xl' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Note Editor navigation bar
function NoteEditorNav() {
  const { setNoteObject, createNewNoteObject } = useNoteObject();
  const [setDraft] = useLocalStorage("draft");

  const deleteNote = () => {
    // ma prima dovrà cercare, usando il note-object corrente, l'id univoco e cancellarlo dall'indice.
    // A quel punto risettare tutto come di seguito.

    setNoteObject(createNewNoteObject());
    setDraft({ state: false, draft_note: "" });
  };

  // saveNote farà praticemente l'esatto opposto di deleteNote e poi resetterà tutto.
  // magari sposto il resetting in una funzione apposita così evito di riscriverla.

  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className='nav-item'>
            <FontAwesomeIcon icon={faHouse} size='xl' />
          </Link>
        </li>
      </ul>

      <ul className='nav-left-ul'>
        <li id='download-note-btn' className='nav-item'>
          <FontAwesomeIcon icon={faFileArrowDown} size='xl' />
        </li>

        <li
          id='delete-note-btn'
          className='nav-item'
          onClick={() => {
            deleteNote();
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} size='xl' />
        </li>

        <li id='save-note-btn' className='nav-item'>
          <FontAwesomeIcon icon={faFileCirclePlus} size='xl' />
        </li>
      </ul>
    </nav>
  );
}

// About Page and Note Archive navigation bar
function AboutAndArchiveNav() {
  const { setNoteObject, createNewNoteObject } = useNoteObject();
  const [, getDraft] = useLocalStorage("draft");

  return (
    <nav className='AboutPageNav'>
      <ul>
        <li>
          <Link to='/' className='nav-item'>
            <FontAwesomeIcon icon={faHouse} size='xl' />
          </Link>
        </li>
      </ul>

      <ul className='nav-left-ul'>
        {getDraft() && getDraft().state && (
          <li>
            <div className='draft-alert'>
              <p>You have a draft!</p>
            </div>
          </li>
        )}
        <li>
          <Link
            to='/note-editor'
            className='nav-item'
            onClick={() => setNoteObject(createNewNoteObject())}
          >
            <FontAwesomeIcon icon={faPen} size='xl' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function NavigationBarHandler({ path }) {
  if (path === "/") {
    return <HomePageNav />;
  } else if (path === "/note-editor") {
    return <NoteEditorNav />;
  } else if (path === "/about" || path === "/notes-archive") {
    return <AboutAndArchiveNav />;
  }
}
