const asyncHandler = require('express-async-handler');
const model = require('../model/notes');

const getNotes = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getNotes());
});
const postNote = asyncHandler(async (req, res) => {
  res.status(200).json(await model.postNote(req.body.name));
});
const deleteNote = asyncHandler(async (req, res) => {
  const notes = await model.getNotes();
  if (notes.map((el) => el.id).includes(Number(req.params.id)))
    res.status(200).json(await model.deleteNote(req.params.id));
  else res.status(404).send('Not found');
});

const getFields = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getFields());
});

module.exports = {
  getNotes,
  postNote,
  deleteNote,
  getFields,
};
