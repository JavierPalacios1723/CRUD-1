// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {create, store, edit, update, destroy} = require('../controllers/admin')


/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-prod', create); 
router.post('/crear-prod', store); 


/*** EDIT ONE PRODUCT ***/ 
router.get('/editar-prod/:id', edit); 
router.put('/editar-prod/:id', update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/eliminar-prod/:id', destroy); 


module.exports = router;