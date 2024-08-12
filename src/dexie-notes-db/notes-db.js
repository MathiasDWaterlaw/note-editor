import Dexie from "dexie";

export const db = new Dexie("Notes_archive");
db.version(2).stores({ notes: "++id, key, timestamp, title, content" });

export async function addNote(noteObject) {
  try {
    const id = await db.notes.add(noteObject);
  } catch (error) {
    console.log(error);
  }
}
