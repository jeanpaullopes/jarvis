class Time {
    constructor(json) {
        this.id = json.id;
        this.nome = json.nome;
        this.federacao = json.federacao;
        this.categorias = json.categorias;
    }
    addCategoria(cat) {
        this.categorias.push(cat);
    }
    temCategoria(cat) {
        let idx = this.categorias.indexOf(cat);
        return idx >=0;
    }
}
export default (Time);