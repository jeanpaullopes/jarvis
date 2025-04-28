var express = require('express');
var router = express.Router();

//const timesRepo = require('../repositorios/timesRepo')
const jogadoresController 
= require('../controllers/jogadoresController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let response = jogadoresController.getAllJogadores(req.get('api_key'));
  res.status(response.code).json(response.payload);

});

router.get('/:id', function(req, res, next) {
  //console.log(JogadoresRepo)
  res.json(JogadoresController.getJogadorById( req.params.id));
});

router.post('/', function(req, res, next) {
  JogadoresController.addJogador(req.body);
  res.send('ok');
});



module.exports = router;
