class Contrato {
    constructor(id, tipo, idTime, idJogador, inicio, fim) {
        this.id = id;
        this.tipo = tipo;
        this.idTime = idTime;
        this.idJogador = idJogador;
        this.inicio = inicio;
        this.fim = fim;
    }
    isAtivo() {
        return this.fim == undefined;
    }
}