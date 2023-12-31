import { getDB, saveDB, insertDB } from "./db.js";

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    content: note,
    id: Date.now(),
  };
  await insertDB(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};

export const findNotes = async (filter) => {
  const notes = await getAllNotes();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};

export const removeNote = async (id) => {
  const notes = await getAllNotes();
  const note = notes.find((note) => note.id === id);

  if (!note) {
    console.log("Note with the given id not found");
    return -1;
  }
  const newNotes = notes.filter((note) => note.id !== id);
  await saveDB({ notes: newNotes });
  return id;
};

export const removeAllNotes = () => {
  saveDB({ notes: [] });
};
