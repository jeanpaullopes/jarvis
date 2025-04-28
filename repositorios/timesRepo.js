let arrTimes = [];
arrTimes.push(    
        {
              id: "1",
              nome: "Sport Club International",
              federacao: "FGF",
              categorias:[
                "sub-13","sub-15", 
                "sub-17", "sub-20", 
                "profissional",
                "sub-13 (Fem)","sub-15 (Fem)", 
                "sub-17 (Fem)", "sub-20 (Fem)", 
                "profissional (Fem)"
              ]
            }
);
arrTimes.push(
            {
              id: "2",
              nome: "São José (Zequinha)",
              federacao: "FGF",
              categorias:[
                "sub-13","sub-15", 
                "sub-17", "sub-20", 
                "profissional"
              ]
            }
);
    


const timesRepo = {

    getAllTimes: () =>{
        return arrTimes;
    },
    getTimeById(id) {
        return arrTimes.find( (elem)=> elem.id == id);
    },
    addTime: (time)=> {
        arrTimes.push(time);
    }

}

module.exports = timesRepo;