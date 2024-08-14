import Dexie from "dexie";

export const db = new Dexie("Notes_archive");
db.version(2).stores({ notes: "++id, key, timestamp, title, content" });

// add note
export async function addNoteToDB(noteObject) {
  try {
    const id = await db.notes.add(noteObject);
  } catch (error) {
    console.log(error);
  }
}

// delete note
export function deleteNoteFromDB(id) {
  try {
    db.notes.delete(id);
  } catch (error) {
    console.log(error);
  }
}

// update note
export function updateNoteInDB(id, updateValue) {
  try {
    db.notes.update(id, updateValue).then(function (updated) {
      if (updated) {
        console.log("The current note was updated");
      } else {
        console.log("Nothing was updated");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

// clear database
export function deleteAllNotesDB() {
  try {
    db.notes.clear();
  } catch (error) {
    console.log(error);
  }
}
