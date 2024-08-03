import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faHouse } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./components/NavigationBar";
import NoteEditor from "./components/NoteEditor";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

const body = document.body;

function App() {
  const [darkState, setDarkState] = useState(false);
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
    <div className='App'>
      <NavigationBar
        icons={[
          <FontAwesomeIcon icon={faHouse} size='xl' />,
          <FontAwesomeIcon icon={faPen} size='xl' />,
        ]}
      />

      <main className='main-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/note-editor' element={<NoteEditor />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>

      <footer className='Footer'>
        <ul>
          <li>
            <Link to='/about' className='nav-item'>
              About
            </Link>
          </li>
          <li onClick={() => setDarkState(!darkState)}>{textMode}</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
