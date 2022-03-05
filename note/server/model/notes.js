const db = require('../db');

const getNotes = async () => {
  const { rows } = await db.query('SELECT id, name from notes');
  return rows;
};

const postNote = async (name) => {
  const { rows } = await db.query(
    'INSERT INTO notes(name) VALUES ($1) RETURNING id',
    [name],
  );
  return rows[0];
};

const patchNote = async (id, name) => {
  const { rows } = await db.query('UPDATE notes SET name = $1 WHERE id = $2', [
    name,
    id,
  ]);
  return rows;
};

const deleteNote = async (id) => {
  const { rows } = await db.query('DELETE FROM notes WHERE id = $1', [id]);
  return rows;
};

module.exports = {
  getNotes,
  postNote,
  patchNote,
  deleteNote,
};
