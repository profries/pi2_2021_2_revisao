class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
}

let prod = new Produto();
prod.nome = "produto1";
prod.preco = 39;
console.log(prod);

let prod2 = new Produto("produto2", 50);
console.log(prod2);

let prod3 = { 
    nome: "produto3", 
    preco: 10 
};
console.log(prod3);

let prod4 = new Object();
prod4.nome = "produto4";
prod4.preco = 40;
console.log(prod4);

let arrayProd1 = [];
arrayProd1.push(prod);
arrayProd1.push(prod2);
console.log(arrayProd1);

let arrayProd2 = [ 
    { 
        nome: "produto5", 
        preco: 40 
    },
    { 
        nome: "produto4", 
        preco: 30
    }
];
arrayProd2.push(prod3);
console.log(arrayProd2);