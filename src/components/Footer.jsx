import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const body = document.body;

function Footer() {
  const [darkState, setDarkState] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [textMode, setTextMode] = useState("Dark Mode");

  useEffect(() => {
    if (darkState) {
      body.classList.add("dark");
      setTextMode("Light Mode");
    } else {
      body.classList.remove("dark");
      setTextMode("Dark Mode");
    }
  }, [darkState]);

  return (
    <footer className='Footer'>
      <ul>
        <li>
          <Link to='/notes-archive' className='nav-item'>
            All Notes
          </Link>
        </li>

        <li onClick={() => setDarkState(!darkState)}>{textMode}</li>

        <li>
          <Link to='/about' className='nav-item'>
            About
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
