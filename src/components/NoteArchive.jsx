import { useEffect } from "react";
import "./NoteArchive.css";

import NoteItemDisplay from "./NoteItemDisplay";

import { db, deleteAllNotesDB } from "../dexie-notes-db/notes-db";
import { useLiveQuery } from "dexie-react-hooks";

function NoteArchive() {
  const allNotes = useLiveQuery(() => db.notes.reverse().toArray());

  useEffect(() => {
    console.log(allNotes);
  }, []);

  if (allNotes?.length === 0) {
    return (
      <>
        <header>
          <h2>- Archive -</h2>
        </header>
        <div className='NoteArchive'>
          <p>You don't have any saved note yet</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <header>
          <h2>- Archive -</h2>
        </header>
        <ul className='NoteArchive'>
          {allNotes?.map((note) => (
            <NoteItemDisplay note={note} />
          ))}
        </ul>
        <div className='flex-container'>
          {/* <h5 className='nav-item'>EXPORT ALL</h5> */}
          <h5 className='nav-item' onClick={deleteAllNotesDB}>
            DELETE ALL
          </h5>
        </div>
      </>
    );
  }
}

export default NoteArchive;
