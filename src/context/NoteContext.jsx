import { createContext, useContext, useState } from "react";

const HeadingContext = createContext();
const ParagraphContext = createContext();
const StorageContext = createContext();

export default function NoteContextProvider({ children }) {
  const [headingState, setHeadingState] = useState(
    "Capitolo 1 - Sotto i cieli di Barad"
  );
  const [paragraphState, setParagraphState] = useState(
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio interdum non convallis porttitor cubilia fames. Nisi leo torquent quis, odio aliquet laoreet. Platea et suspendisse sollicitudin parturient maximus adipiscing quis netus velit. Amet sodales tellus ante lectus ridiculus! Lectus nibh egestas sed mattis suscipit per. Rutrum viverra nec ultrices natoque adipiscing semper laoreet. Natoque elit iaculis netus malesuada vehicula ultrices lacus maecenas. Felis vel porttitor curae senectus consequat fermentum praesent parturient suspendisse."
  );

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
