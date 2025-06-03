const express = require('express'); 
const router = express.Router(); 

const NoticiasController = require('../controllers/noticias'); 

router.get('/noticias', NoticiasController.listarNoticias); 
router.post('/noticias', NoticiasController.cadastrarNoticias); 
router.patch('/noticias/:id', NoticiasController.editarNoticias); 
router.delete('/noticias/:id', NoticiasController.apagarNoticias); 


module.exports = router;