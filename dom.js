// API PARA CONECTAR O JS COM O HTML
// Inicialmente bote a tag <script src = "link para código css"></script> no HTML para fazer a ponte

// Quer pegar algum elemento html específico? use:

document.getElementById()
// ou se for algum ID ou classe use: 
document.getElementByClassName(), document.getElementBytagName()

// também tem a opção de retornar o primeiro elemento dentro do documento por:
document.querySelector(selectors);
document.querySelectorAll(".class"); // nesse exemplo por exemplo ele mostraria todas as aparições da classe especificada.


// Quer representar um texto de um nó? use:
Node.textContent = "Algo para representar um texto.";
Node.innerText = "Algo para representar um texto.";

// Quer incluir HTML em seu texto e não representá-lo de forma literal? use:
Node.innerHTML = "Algo para representar um texto <small> !!! </small>"; // o ponto de exclamação apareçá pequeno obedecendo a tag.


// Modo de pré atribuir um valor a um input/elemento ou apenas referenciar ele por:
element.value();
// exemplo:
console.log(element.value()); // irá pegar valor de element
element.value = "alterando valor."

// Quer adicionar ou remover um atributo de um elemento? use:
element.setAtributte('class', 'nome');
element.removeAtributte('id');


// Quer mudar o estilo como se fosse CSS? 

// primeiro referencie o item que irá mudar:
var element = document.querySelector('body');

// depois mude ele por: (nesse exemplo mudei a cor do background, mas tem vários outros recursos)
element.style.backgroundColor = red;


// EVENTOS (O PRINCIPAL)

// Quer adicionar features, alguma funcionalidade em sua página?

// HTML:
<h1 onclick = "funcaoJS()">Alguma coisa em minha página</h1>

// JS: 
function funcaoJS() {
    console.log("exemplo que printa algo ao clicar");
}

// tem várias funcionalidades como o onlick, ondblclick, onmouseover, etc
// eventos de teclado: onkeypress, onkeyup, onkeydown

// Atribuindo um evento, seu nome e função:
const h1 = document.querySelector('h1');

h1.addEventListener("click", print);
// ou h1.onclick = print;

function print() {
    console.log("algo");
}

// o que muda aqui? não é preciso informar no HTML o parâmetro para acontecer o evento, foi atribuido aqui.

