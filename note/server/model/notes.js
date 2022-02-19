const db = require('../db');

const getNotes = async () => {
  const { rows } = await db.query('SELECT id, name from notes');
  return rows;
};
const postNotes = async (name) => {
  const { rows } = await db.query('INSERT INTO notes(name) VALUES ($1)', [
    name,
  ]);
  return rows;
};
const deleteNotes = async (id) => {
  const { rows } = await db.query('DELETE FROM notes WHERE id = $1', [id]);
  return rows;
};

const getFields = async (id) => {
  const { rows } = await db.query(
    'SELECT id, name, content, attachment FROM field WHERE $1',
    [id],
  );
  return rows;
};
const postFields = async (name, content, attachment) => {
  const { rows } = await db.query(
    'INSERT INTO fields(name, content, attachment) VALUES ($1, $2, $3)',
    [name, content, attachment],
  );
  return rows;
};
const patchField = async (name, content) => {
  const { rows } = await db.query(
    'INSERT INTO fields(name, content) VALUES ($1, $2)',
    [name, content],
  );
  return rows;
};
const deleteField = async (id) => {
  const { rows } = await db.query('DELETE FROM notes WHERE id = $1', [id]);
  return rows;
};

module.exports = {
  getNotes,
  postNotes,
  deleteNotes,
  getFields,
  postFields,
  patchFields,
  deleteNotes,
};
