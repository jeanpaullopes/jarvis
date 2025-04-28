const JogadoresRepo = 
require('../repositorios/jogadoresRepo');

const Response = require('../models/Response');

const JogadoresController = {
    ApiKeyTest(key) {
        return (key == 'Homem_de_Ferro');
        
    },
    getJogadorById(id) {
        return JogadoresRepo.getJogadorById(id);
    },
    getAllJogadores(apiKey) {
        if (this.ApiKeyTest(apiKey)) {
        let Jogadores = JogadoresRepo.getAllJogadores();
        let resposta = new Response(200,Jogadores,'OK');
        return resposta;
        } else {
            return new Response(403,undefined,'Não Autorizado')
        }
    },
    addJogador(Jogador) {
        JogadoresRepo.addJogador(Jogador);
    }
}

module.exports = JogadoresController;

