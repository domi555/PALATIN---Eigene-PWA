const db = require('../db');

const getFields = async (id) => {
  const { rows } = await db.query(
    `SELECT id, name, content, attachment FROM fields ${
      id ? 'WHERE note_id = $1' : ''
    }`,
    id ? [id] : null,
  );
  console.log(rows);
  return rows;
};

const postField = async (body) => {
  const { rows } = await db.query(
    'INSERT INTO fields(name, content, attachment, note_id) VALUES ($1, $2, $3, $4)',
    [body.name, body.content, body.attachment, body.note_id],
  );
  return rows;
};

const patchField = async (id, body) => {
  const { rows } = await db.query(
    'UPDATE fields SET name = $1, content = $2, attachment = $3 WHERE id = $4',
    [body.name, body.content, body.attachment, id],
  );
  return rows;
};

const deleteField = async (id) => {
  const { rows } = await db.query('DELETE FROM fields WHERE id = $1', [id]);
  return rows;
};

module.exports = {
  getFields,
  postField,
  patchField,
  deleteField,
};
