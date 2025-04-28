class Contrato {
    constructor(id, tipo, idTime, idJogador, inicio, fim) {
        this.id = id;
        this.tipo = tipo;
        this.idTime = idTime;
        this.idJogador = idJogador;
        this.inicio = inicio;
        this.fim = fim;
    }
    static build(json) {
        return new Contrato(
            json.id,
            json.tipo,
            json.idTime,
            json.idJogador,
            json.inicio,
            json.fim
        );
    }
    isAtivo() {
        return this.fim == undefined || this.fim == '' || this.fim == null;
    }
}