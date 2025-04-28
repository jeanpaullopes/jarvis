const timesRepo = require('../repositorios/timesRepo');
const jogadoresRepo = require('../repositorios/jogadoresRepo');

const contratosBusinessRules = {
    canCreate(contrato) {
        //testar se é um Contrato válido atributos id, tipo, idTime, idJogador, inicio, fim
        if (contrato == undefined) {
            const erro = new Error("Contrato inválido.", "ContratosBusinessRules.js", 5);
            throw erro;
            
        }
        if (contrato.tipo == undefined) {
            const erro = new Error("tipo inválido.", "ContratosBusinessRules.js", 17);
            throw erro;
            
        }
        if (contrato.inicio == undefined) {
            const erro = new Error("Data de Início inválida.", "ContratosBusinessRules.js", 22);
            throw erro;
            
        }
        if (contrato.idJogador == undefined) {
            const erro = new Error("Jogador não indicado.", "ContratosBusinessRules.js", 27);
            throw erro;
            
        }
        if (contrato.idTime == undefined) {
            const erro = new Error("Time não indicado.", "ContratosBusinessRules.js", 32);
            throw erro;
            
        }
        if (contrato.fim != undefined) {
            contrato.fim = '';
            
        }
        if (contrato.id == undefined) {
            contrato.id = 0;
        }

        const jog = jogadoresRepo.getJogadorById(
            contrato.idJogador
        );
        const time = timesRepo.getTimeById(
            contrato.idTime
        );
        if (jog == undefined) {

            const erro = new Error(`jogador id ${contrato.idJogador} não encontrado.`, "ContratosBusinessRules.js", 10);
            throw erro;
            //return `jogador id ${contrato.idJogador} não encontrado.`;
        } 
        if (time == undefined) {
            const erro = new Error(`time id ${contrato.idTime} não encontrado.`);
            throw erro;
            //return `time id ${contrato.idTime} não encontrado.`;

        }
    
    }
}

module.exports = contratosBusinessRules;