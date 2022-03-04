const express = require('express');
const {
  getNotes,
  postNote,
  deleteNote,
} = require('../controllers/notes');

const router = express.Router();

router.get('/', getNotes);
router.post('/', postNote);
router.delete('/:id', deleteNote);

module.exports = router;
