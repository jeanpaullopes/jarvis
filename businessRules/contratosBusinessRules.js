const timesRepo = require('../repositorios/timesRepo');
const jogadoresRepo = require('../repositorios/jogadoresRepo');

const contratosBusinessRules = {
    canCreate(contrato) {
        const jog = jogadoresRepo.getJogadorById(
            contrato.idJogador
        );
        const time = timesRepo.getTimeById(
            contrato.idTime
        );
        if (jog == undefined) {
            return `jogador id ${contrato.idJogador} não encontrado.`;
        } 
        if (time == undefined) {
            return `time id ${contrato.idTime} não encontrado.`;

        }
    }
}

module.exports = contratosBusinessRules;