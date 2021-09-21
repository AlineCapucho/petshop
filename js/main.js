// console.log("Arquivo main.js está sendo executado.")
// console.log(document);

let inputNome = document.querySelector('input');

console.log(inputNome.id);


let dadosForm = document.querySelectorAll('input');
console.log(dadosForm);

let tituloPrincipal = document.querySelector('h1');

tituloPrincipal.innerText = "Faça parte do nosso time";

tituloPrincipal.style.color = 'orange';

let inputEmail = document.querySelector('#email');
inputEmail.setAttribute('placeholder', 'jane@mail.com');

let inputCargaHoraria = document.querySelector('#carga-horaria');
console.log(inputCargaHoraria.innerHTML);

inputCargaHoraria.innerHTML += '<option value="Trainee">Trainee</option>';

let elementoDiv = document.querySelector('div');
