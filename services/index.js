const Response = require('../models/Response');

const services = {
    ApiKeyTest(key) {
        return (key == 'Homem_de_Ferro');
    },
    createOKResponse(payload) {
        return new Response(200,payload,'OK');
    },
    createUnAuthResponse() {
        return new Response(403,undefined,'Não Autorizado')
    },
    createCreatedResponse() {
        return new Response(201,undefined,'Criado com sucesso');
    },
    createUnprocessableReponse(msg) {
        return new Response(422,undefined,msg) 
    }
};
module.exports =services;