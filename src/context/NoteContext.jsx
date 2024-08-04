import { createContext, useContext, useState } from "react";

const HeadingContext = createContext();
const ParagraphContext = createContext();
const StorageContext = createContext();

export default function NoteContextProvider({ children }) {
  const [headingState, setHeadingState] = useState("Asdrubale Barca");
  const [paragraphState, setParagraphState] = useState("");

  return (
    <HeadingContext.Provider value={[headingState, setHeadingState]}>
      <ParagraphContext.Provider value={[paragraphState, setParagraphState]}>
        {children}
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
