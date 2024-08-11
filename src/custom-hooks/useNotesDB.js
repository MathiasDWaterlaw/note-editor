const indexedDB =
  window.indexedDB ||
  window.webkitIndexedDB ||
  window.mozIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

export default function useNotesDB() {
  if (!indexedDB) {
    return console.error("Your browser do not support IndexedDB");
  }

  const request = indexedDB.open("Notes_archive", 1);

  request.onerror = (event) => {
    console.error("An error occured with IndexedDB");
    console.error(event);
  };

  request.onupgradeneeded = () => {
    const db = request.result;

    if (!db.objectStoreNames.contains("notes")) {
      const notesArchive = db.createObjectStore("notes", { keyPath: "id" });

      notesArchive.createIndex("title", ["title"], { unique: false });
      notesArchive.createIndex("content", ["content"], { unique: false });
      notesArchive.createIndex("timestamp", ["timestamp"], { unique: false });
    }
  };

  request.onsuccess = () => {
    console.log("Database opened successfully");
  };
}

export function saveInDB(noteObject) {
  const request = indexedDB.open("Notes_archive");

  request.onerror = (event) => {
    console.error("An error occured with IndexedDB");
    console.error(event);
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction("notes", "readwrite");
    const store = transaction.objectStore("notes");

    store.add(noteObject);

    transaction.oncomplete = () => {
      db.close();
    };
  };
}
