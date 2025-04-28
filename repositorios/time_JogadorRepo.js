const contratos= new Map();
contratos.set("1",["1",'3']);
contratos.set("2",["2"]);


const time_jogadorRepo = {

    getJogadoresTime: (idTime) =>{
        return contratos.get(idTime);
    },
    
    addJogadorTime: (idTime, idJogador)=> {
        let temp = contratos.get(idTime);
        temp.push(idJogador);
        contratos.set(idTime, temp);
    }

}

module.exports = time_jogadorRepo;