const contratos= new Map();
let controleId = 0;

const contratosRepo = {

    getContratosTime: (idTime) =>{
        return contratos.get(idTime);
    },
    getAllContratos: () => {
        const temp = new Array();
        contratos.forEach((valor, chave) => {
            valor.forEach((contrato) => {
                temp.push(contrato);
            });
        });
        return temp;

    },
    addContrato: (contrato)=> {
        console.log("contrato", contrato);
        let temp = contratos.get(contrato.idTime);
        console.log("temp", temp);
        if (temp == undefined) {
            temp = new Array();
        }
        if (contrato.id == 0) {
            console.log("contrato.id =>", contrato.id);
            console.log("controleID=>", controleId);
            controleId += 1;
            contrato.id = controleId;
            console.log("controleID=>", controleId);
        }
        temp.push(contrato);
        contratos.set(contrato.idTime, temp);
        //console.log("contratos", contratos);
    }

}

module.exports = contratosRepo;