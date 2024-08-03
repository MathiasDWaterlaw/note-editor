import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faHouse,
  faFloppyDisk,
  faFileArrowDown,
  faTrashCan,
  faBoxArchive,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HomePageNav() {
  return (
    <nav className='HomePageNav'>
      <ul>
        <li></li>
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

function NoteEditorNav() {
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

        <li className='nav-item'>
          <FontAwesomeIcon icon={faTrashCan} size='xl' />
        </li>

        <li className='nav-item'>
          <FontAwesomeIcon icon={faFileCirclePlus} size='xl' />
        </li>
      </ul>
    </nav>
  );
}

function AboutPageNav() {
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
  } else if (path === "/about") {
    return <AboutPageNav />;
  }
}

export default NavigationBarHandler;
