import { createContext, useContext, useState } from "react";

const HeadingContext = createContext();
const ParagraphContext = createContext();
const NoteObjectContext = createContext();

const NOTE_OBJECT_INITIAL_STATE = {
  id: crypto.randomUUID(),
  timestamp: new Date().getTime(),
  title: "",
  content: "",
};

export default function NoteContextProvider({ children }) {
  const [headingState, setHeadingState] = useState("");
  const [paragraphState, setParagraphState] = useState("");
  const [noteObject, setNoteObject] = useState(NOTE_OBJECT_INITIAL_STATE);

  const createNewNoteObject = () => {
    setHeadingState("");
    setParagraphState("");
    const _id = crypto.randomUUID();
    const _timestamp = new Date().getTime();
    const _noteObject = {
      id: _id,
      timestamp: _timestamp,
      title: headingState,
      content: paragraphState,
    };
    return _noteObject;
  };

  return (
    <HeadingContext.Provider value={[headingState, setHeadingState]}>
      <ParagraphContext.Provider value={[paragraphState, setParagraphState]}>
        <NoteObjectContext.Provider
          value={{ noteObject, setNoteObject, createNewNoteObject }}
        >
          {children}
        </NoteObjectContext.Provider>
      </ParagraphContext.Provider>
    </HeadingContext.Provider>
  );
}

export function useHeading() {
  return useContext(HeadingContext);
}

export function useParagraph() {
  return useContext(ParagraphContext);
}

export function useNoteObject() {
  return useContext(NoteObjectContext);
}
