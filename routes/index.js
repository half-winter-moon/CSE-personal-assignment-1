const express = require('express');
const router = express.Router();
const contactInfo = require('../controllers/index.js');

// GET all docs from contacts collection
router.get('/', contactInfo.getData);

// GET a single doc from contacts collection where id matches
router.get('/:id', contactInfo.getPeiceOfData);

module.exports = router;