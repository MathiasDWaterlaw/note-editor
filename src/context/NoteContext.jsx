import { createContext, useContext, useState } from "react";

const HeadingContext = createContext();
const ParagraphContext = createContext();
const NoteObjectContext = createContext();

export default function NoteContextProvider({ children }) {
  const [headingState, setHeadingState] = useState("");
  const [paragraphState, setParagraphState] = useState("");
  const [noteObject, setNoteObject] = useState();

  const createNewNoteObject = () => {
    setHeadingState("");
    setParagraphState("");
    const _id = crypto.randomUUID();
    const _date = new Date();
    const _noteObject = {
      id: _id,
      date: _date,
      note: {
        title: headingState,
        content: paragraphState,
      },
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
