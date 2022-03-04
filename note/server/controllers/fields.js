const asyncHandler = require('express-async-handler');
const model = require('../model/fields');

const getFields = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getFields(req.params.id));
});

const postField = asyncHandler(async (req, res) => {
  res.status(200).json(await model.postField(req.body));
});

const patchField = asyncHandler(async (req, res) => {
  const notes = await model.getFields();
  console.log(notes, req.params.id);
  if (notes.map((el) => el.id).includes(Number(req.params.id))) {
    res.status(200).json(await model.patchField(req.params.id, req.body));
  } else res.status(404).send('Not found');
});

const deleteField = asyncHandler(async (req, res) => {
  const notes = await model.getFields();
  if (notes.map((el) => el.id).includes(Number(req.params.id))) {
    res.status(200).json(await model.deleteField(req.params.id));
  } else res.status(404).send('Not found');
});

module.exports = {
  getFields,
  postField,
  patchField,
  deleteField,
};
