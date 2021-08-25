console.log("FOR");
for (let i=0; i<5; i++) {
    console.log(i);
}

let produto = { id: 1, nome: "prod1", preco:10 };
//console.log(typeof(produto));
console.log("FOR IN 1");

for(let prop in produto) {
    console.log(prop);
}

let listaNomeProdutos = ['prod1', 'prod2', 'prod3'];

console.log("FOR IN 2");
for(let ind in listaNomeProdutos) {
    console.log(ind);
}

console.log("FOR OF");

for(let dados of listaNomeProdutos) {
    console.log(dados);
}

console.log("FOREACH");
/*function imprimeData(value, index, array) {
    console.log(index + "->"+ value);
}*/

let imprimeData = (value, index, array) => {
    console.log(index + "->"+ value);
}

listaNomeProdutos.forEach(imprimeData);