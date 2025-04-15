const express = require('express'); 
const router = express.Router(); 

const NoticiasController = require('../controllers/noticias'); 

router.get('/noticias', NoticiasController.listarNoticias); 
router.post('/noticias', NoticiasController.cadastrarNoticias); 
router.patch('/noticias', NoticiasController.editarNoticias); 
router.delete('/noticias', NoticiasController.apagarNoticias); 


module.exports = router;