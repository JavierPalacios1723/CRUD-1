// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { home, search } = require('../controllers/other')

/*** GET ALL PRODUCTS ***/ 
router.get('/', home); 
router.get('/buscar', search);

module.exports = router;