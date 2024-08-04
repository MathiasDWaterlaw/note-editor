import "./NoteEditor.css";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useHeading, useParagraph } from "../context/NoteContext";

function NoteEditor() {
  const [headingState, setHeadingState] = useHeading();
  const [paragraphState, setParagraphState] = useParagraph();

  useEffect(() => {
    if (headingState !== "") {
      console.log(headingState);
    }
    if (paragraphState !== "") {
      console.log(paragraphState);
    }
  }, [headingState, paragraphState]);

  const headingRef = useRef();
  const paragraphRef = useRef();

  const handleResize = () => {
    headingRef.current.style.height = "auto";
    paragraphRef.current.style.height = "auto";

    headingRef.current.style.height = headingRef.current.scrollHeight + "px";
    paragraphRef.current.style.height =
      paragraphRef.current.scrollHeight + "px";
  };

  // useLayoutEffect(() => {
  //   const growers = document.querySelectorAll(".grow-wrap");

  //   growers.forEach((grower) => {
  //     const textarea = grower.querySelector("textarea");
  //     textarea.addEventListener("input", () => {
  //       grower.dataset.replicatedValue = textarea.value;
  //     });
  //   });
  // }, [headingState, paragraphState, window.innerWidth]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); //necessary to prevent errors when the page change.
  }, [headingState, paragraphState, window.innerWidth]);

  return (
    <div className='NoteEditor'>
      <div className='grow-wrap'>
        <textarea
          ref={headingRef}
          className='input-area note-heading'
          onChange={(e) => {
            setHeadingState(e.target.value);
          }}
          value={headingState}
          placeholder='Title...'
          rows={1}
          // onResize={handleResize}
        ></textarea>
      </div>

      <div className='grow-wrap'>
        <textarea
          ref={paragraphRef}
          className='input-area note-paragraph'
          onChange={(e) => {
            setParagraphState(e.target.value);
          }}
          placeholder='Add your text here...'
          value={paragraphState}
          rows={4}
          // onResize={handleResize}
        ></textarea>
      </div>
    </div>
  );
}

export default NoteEditor;
