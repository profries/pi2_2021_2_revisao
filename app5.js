let listaProdutos = [];

function inserir(produto){
    listaProdutos.push(produto);
}

function atualizar(id, produto) {

}
function deletar(id) {
    
}
function buscarPorId(id) {
    for(let prod of listaProdutos){
        if(prod.id == id) {
            return prod;
        }
    }    
}

function listar(){
    return listaProdutos;
}

let produto = {id:1, nome: "prod1", preco:10};
inserir(produto);

console.log(listaProdutos);
console.log(buscarPorId(1));
console.log(buscarPorId(5));
