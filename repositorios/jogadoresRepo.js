let arrJogadores = [];
arrJogadores.push(    
        {
              id: "1",
              nome: "Antony",
              posicao: 'Goleiro'
            }
);
arrJogadores.push(    
    {
          id: "3",
          nome: "Allan Patrick",
          posicao: 'Meio Campo'
        }
);
arrJogadores.push(
            {
              id: "2",
              nome: "BraiteWaite",
              posicao: 'Atacante'
            }
);
    


const JogadoresRepo = {

    getAllJogadores: () =>{
        return arrJogadores;
    },
    getJogadorById(id) {
        return arrJogadores.find( (elem)=> elem.id == id);
    },
    addJogador: (Jogador)=> {
        arrJogadores.push(Jogador);
    }

}

module.exports = JogadoresRepo;