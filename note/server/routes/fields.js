const express = require('express');
const {
  getFields,
  postField,
  patchField,
  deleteField,
} = require('../controllers/fields');

const router = express.Router();

router.get('/', getFields);
router.get('/:id', getFields);
router.post('/', postField);
router.patch('/:id', patchField);
router.delete('/:id', deleteField);

module.exports = router;
