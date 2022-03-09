//Cadastro de eventos
let dataAtual = new Date(new Date());
let dataEvento =new Date('2022,03,09');

if (dataEvento > dataAtual) {
    console.log ("Data permitida para o evento")
}
else {
    console.log ("Cadastro não permitido por data inválida")
}


//Idade 
var idade = 17
if (idade >= 18) {
    console.log("Pode proseguir com o cadastro")
} else {
    console.log("Idade não permitida, mínimo 18 anos")
}


//Listar participantes
var evento1 = ["João", "Gabriel", "Lucas", "Luciana", "Maria"]
var evento2 = ["Marcos", "Pedro", "Fernanda", "Bruna"]

console.log ("Lista de participantes:")
let escolhaEvento = evento1
if (escolhaEvento == evento1) {
    evento1.forEach (function(item) {
        console.log (item)
    })
}
    else if (escolhaEvento = evento2) {
        evento2.forEach (function(item) {
            console.log (item)
        })
    }


//Quantidade de participantes
let listaParticipantes = ["João", "Gabriel", "Lucas", "Luciana", "Maria", "Marcos", "Pedro", "Fernanda", "Bruna"]
if (listaParticipantes.length  < 100) {
    console.log ("Ainda é possível fazer o cadastro")
} else {
    console.log ("Cadastro não será permitido por ter excedido o limite")
}
    