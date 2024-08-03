import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import NavigationBarHandler from "./components/NavigationBar";
import NoteEditor from "./components/NoteEditor";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

const body = document.body;

function App() {
  const [darkState, setDarkState] = useState(false);
  const [textMode, setTextMode] = useState("Dark Mode");
  const currentPath = useLocation();

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
      <NavigationBarHandler path={currentPath.pathname} />

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
