import { useEffect, useState } from "react";
import "./NoteArchive.css";

import NoteItemDisplay from "./NoteItemDisplay";

import { db } from "../dexie-notes-db/notes-db";
import { useLiveQuery } from "dexie-react-hooks";

function NoteArchive() {
  const allNotes = useLiveQuery(() => db.notes.toArray());

  useEffect(() => {
    console.log(allNotes);
  }, []);

  if (allNotes?.length === 0) {
    return (
      <div className='NoteArchive'>
        <p>You don't have any saved note yet</p>
      </div>
    );
  } else {
    return (
      <>
        <header>
          <h2>- Archive -</h2>
        </header>
        <ul className='NoteArchive'>
          {allNotes?.map((note) => <NoteItemDisplay note={note} />).reverse()}
        </ul>
        <div className='flex-container'>
          {/* <h5 className='nav-item'>EXPORT ALL</h5> */}
          <h5 className='nav-item'>DELETE ALL</h5>
        </div>
      </>
    );
  }
}

export default NoteArchive;
