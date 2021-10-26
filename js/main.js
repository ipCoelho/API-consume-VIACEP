'use strict';

// HTML imports.
const inputCep = document.getElementById('cep');
inputCep.setAttribute('maxlength', 8);

// Functions.
const FillForm = (json) => {
    document.getElementById('endereço').value = json.logradouro;
    document.getElementById('bairro').value = json.bairro;
    document.getElementById('cidade').value = json.localidade;
    document.getElementById('estado').value = json.uf;
} 
const cepSearch = async () => {
    const valueCep = inputCep.value;
    const ApiUrl = `https://viacep.com.br/ws/${valueCep}/json/`;
    const ApiFetch = await fetch(ApiUrl);
    const ApiJson = await ApiFetch.json();
    if (ApiJson.hasOwnProperty('erro') == false) {
        console.log(ApiJson);
        FillForm(ApiJson);
    } else {
        alert('Cep inválido!');
    }
}

// Events.
inputCep.addEventListener('focusout', cepSearch);

