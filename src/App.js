import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import NoteContextProvider from "./context/NoteContext";

import NavigationBarHandler from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import NoteEditor from "./components/NoteEditor";
import NoteArchive from "./components/NoteArchive";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

function App() {
  const currentPath = useLocation();

  return (
    <div className='App'>
      <NoteContextProvider>
        <NavigationBarHandler path={currentPath.pathname} />

        <main className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/note-editor' element={<NoteEditor />} />
            <Route path='/notes-archive' element={<NoteArchive />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </NoteContextProvider>
    </div>
  );
}

export default App;
