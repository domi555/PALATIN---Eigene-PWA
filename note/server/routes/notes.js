const express = require('express');
const {
  getNotes,
  postNote,
  patchNote,
  deleteNote,
} = require('../controllers/notes');

const router = express.Router();

router.get('/', getNotes);
router.post('/', postNote);
router.patch('/:id', patchNote);
router.delete('/:id', deleteNote);

module.exports = router;
