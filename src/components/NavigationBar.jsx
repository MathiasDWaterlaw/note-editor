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

import {
  useHeading,
  useNoteObject,
  useParagraph,
} from "../context/NoteContext";

import useLocalStorage from "../custom-hooks/useLocalStorage";

function HomePageNav({ createNewNoteObject }) {
  const { setNoteObject } = useNoteObject();

  const [, getDraft] = useLocalStorage("draft");

  return (
    <nav className='HomePageNav'>
      <ul>
        <li></li>
      </ul>

      <ul className='nav-left-ul'>
        {getDraft().state && (
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

function NoteEditorNav({ createNewNoteObject }) {
  const { setNoteObject } = useNoteObject();

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
          onClick={() => setNoteObject(createNewNoteObject())}
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

function AboutAndArchiveNav({ createNewNoteObject }) {
  const { setNoteObject } = useNoteObject();
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
        {getDraft().state && (
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
  const [headingState, setHeadingState] = useHeading();
  const [paragraphState, setParagraphState] = useParagraph();
  const { createNewNoteObject } = useNoteObject();

  if (path === "/") {
    return <HomePageNav createNewNoteObject={createNewNoteObject} />;
  } else if (path === "/note-editor") {
    return <NoteEditorNav createNewNoteObject={createNewNoteObject} />;
  } else if (path === "/about" || path === "/notes-archive") {
    return <AboutAndArchiveNav createNewNoteObject={createNewNoteObject} />;
  }
}
