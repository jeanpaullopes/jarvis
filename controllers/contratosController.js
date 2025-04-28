const timesRepo = 
require('../repositorios/timesRepo');

const time_jogadorRepo = require('../repositorios/time_JogadorRepo');

const jogadoresRepo = require('../repositorios/jogadoresRepo');
const services = require('../services/index');
const Response = require('../models/Response');
const contratosBR = require('../businessRules/contratosBusinessRules');

const contratosController = {
    addContrato(apiKey, contrato) {
        if (!services.ApiKeyTest(apiKey)) {
            return services.createUnAuthResponse();
        }
        const respBR = contratosBR.canCreate(contrato);
        if (respBR != 'OK') {
            return services.createUnprocessableReponse(
                respBR);
        }
    
    }
    
}

module.exports = contratosController;

