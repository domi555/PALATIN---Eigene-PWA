const express = require('express');
const {
  getNotes,
  postNote,
  deleteNote,
  getFields,
} = require('../controllers/notes');

const router = express.Router();

router.get('/notes', getNotes);
router.post('/notes', postNote);
router.delete('/notes/:id', deleteNote);

router.get('/notes/:id', getFields);

module.exports = router;
