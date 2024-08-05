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

import { useHeading, useParagraph } from "../context/NoteContext";

function HomePageNav() {
  return (
    <nav className='HomePageNav'>
      <ul>
        <li></li>
      </ul>

      <ul className='nav-left-ul'>
        <li>
          <Link to='/note-editor' className='nav-item'>
            <FontAwesomeIcon icon={faPen} size='xl' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function NoteEditorNav() {
  const [headingState, setHeadingState] = useHeading();
  const [paragraphState, setParagraphState] = useParagraph();

  // future function to add:
  const downloadFile = () => {};
  const saveCurrentFile = () => {};
  const deleteCurrentFile = () => {};

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
        <li className='nav-item'>
          <FontAwesomeIcon icon={faFileArrowDown} size='xl' />
        </li>

        <li
          className='nav-item'
          onClick={() => {
            setHeadingState("");
            setParagraphState("");
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} size='xl' />
        </li>

        <li className='nav-item'>
          <FontAwesomeIcon icon={faFileCirclePlus} size='xl' />
        </li>
      </ul>
    </nav>
  );
}

function AboutAndArchiveNav() {
  return (
    <nav className='AboutPageNav'>
      <ul>
        <li>
          <Link to='/' className='nav-item'>
            <FontAwesomeIcon icon={faHouse} size='xl' />
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to='/note-editor' className='nav-item'>
            <FontAwesomeIcon icon={faPen} size='xl' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function NavigationBarHandler({ path }) {
  if (path === "/") {
    return <HomePageNav />;
  } else if (path === "/note-editor") {
    return <NoteEditorNav />;
  } else if (path === "/about" || path === "/notes-archive") {
    return <AboutAndArchiveNav />;
  }
}

export default NavigationBarHandler;
