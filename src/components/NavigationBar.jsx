import "./NavigationBar.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faHouse,
  // faFileArrowDown,
  faTrashCan,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

import { useNoteObject } from "../context/NoteContext";
import useLocalStorage from "../custom-hooks/useLocalStorage";

import {
  addNoteToDB,
  deleteNoteFromDB,
  updateNoteInDB,
} from "../dexie-notes-db/notes-db";

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
            to='/notes-editor'
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

// About Page and Note Archive navigation bar
function AboutAndArchiveNav() {
  const { setNoteObject, createNewNoteObject } = useNoteObject();
  const [, getDraft] = useLocalStorage("draft");

  return (
    <nav className='AboutPageNav'>
      <ul>
        <li>
          <Link to='/home' className='nav-item'>
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
            to='/notes-editor'
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
  const { noteObject, setNoteObject, createNewNoteObject } = useNoteObject();
  const emptyDraft = { state: false, draft_note: "" };
  const [setDraft] = useLocalStorage("draft");

  const deleteNote = (_noteObject) => {
    if ("id" in _noteObject) {
      deleteNoteFromDB(_noteObject.id);
    }
    setNoteObject(createNewNoteObject());
    setDraft(emptyDraft);
  };

  const saveNote = (_noteObject) => {
    if ("id" in _noteObject) {
      updateNoteInDB(_noteObject.id, {
        title: _noteObject.title,
        content: _noteObject.content,
      });
    } else {
      addNoteToDB(_noteObject);
    }
    setDraft(emptyDraft);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            to='/home'
            className='nav-item'
            onClick={() => {
              if ("id" in noteObject) {
                updateNoteInDB(noteObject.id, {
                  title: noteObject.title,
                  content: noteObject.content,
                });
              }
            }}
          >
            <FontAwesomeIcon icon={faHouse} size='xl' />
          </Link>
        </li>
      </ul>

      <ul className='nav-left-ul'>
        {/* <li id='download-note-btn' className='nav-item'>
            <FontAwesomeIcon icon={faFileArrowDown} size='xl' />
          </li> */}

        <li
          id='delete-note-btn'
          className='nav-item'
          onClick={() => {
            deleteNote(noteObject);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} size='xl' />
        </li>

        <li
          id='save-note-btn'
          className='nav-item'
          onClick={() => {
            saveNote(noteObject);
          }}
        >
          <FontAwesomeIcon icon={faFileCirclePlus} size='xl' />
        </li>
      </ul>
    </nav>
  );
}

export default function NavigationBarHandler({ path }) {
  if (path === "/home") {
    return <HomePageNav />;
  } else if (path === "/notes-editor") {
    return <NoteEditorNav />;
  } else if (path === "/about" || path === "/notes-archive") {
    return <AboutAndArchiveNav />;
  }
}
