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