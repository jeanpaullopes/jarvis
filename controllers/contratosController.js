const timesRepo = 
require('../repositorios/timesRepo');

const contratosRepo = require('../repositorios/contratosRepo');

const jogadoresRepo = require('../repositorios/jogadoresRepo');
const services = require('../services/index');
const Response = require('../models/Response');
const contratosBR = require('../businessRules/contratosBusinessRules');

const contratosController = {
    getAllContratos() {
        return services.createOKResponse(contratosRepo.getAllContratos());
    },
    addContrato(apiKey, contrato) {
        if (!services.ApiKeyTest(apiKey)) {
            return services.createUnAuthResponse();
        }
        /*
        const respBR = contratosBR.canCreate(contrato);
        if (respBR != 'OK') {
            return services.createUnprocessableReponse(
                respBR);
        }*/
        try{
        contratosBR.canCreate(contrato);
        contratosRepo.addContrato(contrato);
        return services.createCreatedResponse();

        } catch (error) {
            return services.createUnprocessableReponse(error.message);
        }
        
        
        
    }
    
}

module.exports = contratosController;

