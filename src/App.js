import "./App.css";
import { useState, useEffect } from "react";
import NoteEditor from "./components/NoteEditor";
import HomePage from "./components/HomePage";

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
      <nav className='NavigationBar'>
        <ul>
          <li>Home</li>
          <li>Add note</li>
        </ul>
      </nav>

      <main className='main-content'>
        <NoteEditor />
        {/* <HomePage /> */}
      </main>

      <footer className='Footer'>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li onClick={() => setDarkState(!darkState)}>{textMode}</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
