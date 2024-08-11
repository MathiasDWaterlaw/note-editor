import { useEffect } from "react";

import { useAllNotes } from "../custom-hooks/useNotesDB";

function NoteArchive() {
  // const [allNotes, setAllNotes] = useState();
  const allNotes = useAllNotes();

  useEffect(() => {
    console.log(allNotes);
  });

  if (allNotes.length === 0) {
    return (
      <div className='NoteArchive'>
        <p>You don't have any saved note yet</p>
      </div>
    );
  } else {
    return (
      <div className='NoteArchive'>
        {allNotes
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((note) => (
            <div className='note' key={note.id}>
              <h4>{note.title}</h4>
            </div>
          ))}
      </div>
    );
  }
}

export default NoteArchive;
