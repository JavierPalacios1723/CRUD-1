// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {list, detail,} = require('../controllers/products')

/*** GET ALL PRODUCTS ***/ 
router.get('/productos', list); 

router.get('/detalle/:id', detail); 






module.exports = router;