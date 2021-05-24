let menu = document.querySelector('.menu');
menu.addEventListener("click", showMenu)

function showMenu(){
    menu.classList.add('hidden');
    menu.classList.remove('menu');
    const menu2 = document.createElement('div');
    const x1 = document.createElement('div');
    x1.setAttribute('data-indice', '1');
    const x2 = document.createElement('div');
    x2.setAttribute('data-indice', '2');
    const nav = document.querySelector('nav');
    menu2.appendChild(x1);
    menu2.appendChild(x2);
    menu2.classList.add('apri');
    nav.appendChild(menu2);
    const menunascosto = document.querySelector('.nascondimenu');
    menunascosto.classList.remove('nascondimenu');
    menunascosto.classList.add('mostramenu');
    menunascosto.classList.add('scrolling');
    menu2.addEventListener("click", closeMenu);
    document.body.classList.add('no-scroll');
}

function closeMenu(event){
    event.currentTarget.remove();
    menu.classList.add('menu');
    menu.classList.remove('hidden');
    const menunascosto = document.querySelector('.mostramenu');
    menunascosto.classList.remove('mostramenu');
    menunascosto.classList.add('nascondimenu');
    menunascosto.classList.remove('scrolling');
    document.body.classList.remove('no-scroll');
}

const mexbox = document.querySelector(".mexbox");

input = document.forms["sign"];
input.addEventListener("submit", validazione);

function validazione(event) { 
    mexbox.innerHTML="";
    if (input.name.value.length == 0 || input.surname.value.length == 0 || input.email.value.length == 0 || input.username.value.length == 0 || input.password.value.length == 0 || input.confirmpassword.value.length == 0) {
        const mex = document.createElement('p');
        mex.textContent= "Dati registrazione non corretti!";
        mexbox.appendChild(mex);
        event.preventDefault();
    }
    else if (input.password.value != input.confirmpassword.value) {
        const mex = document.createElement('p');
        mex.textContent= "Hai inserito due password diverse!";
        console.log(mexbox);
        mexbox.appendChild(mex);
        event.preventDefault();
    }
    else if (!validazione_email(input.email.value)) {
        const mex = document.createElement('p');
        mex.textContent= "Il formato della mail non è corretto!";
        mexbox.appendChild(mex);
        event.preventDefault();
    }
    else if (input.password.value.length < 8) {
        const mex = document.createElement('p');
        mex.textContent= "La password deve contenere almeno 8 caratteri!";
        mexbox.appendChild(mex);
        event.preventDefault();
    }
    for (utente of arutente) {
        //console.log(utente);
        //console.log(input.username.value);
        if (utente === input.username.value) {
            mexbox.innerHTML="";
            const mex = document.createElement('p');
            mex.textContent= "Questo username non è disponibile!";
            mexbox.appendChild(mex);
            event.preventDefault();
        }
    }
}

function validazione_email(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) 
    return false;
    else 
    return true;
}

input.username.addEventListener("blur", controlloUtente);
const percorso = "http://localhost/hw1/";

function controlloUtente() {
    fetch(percorso + "controllo_utente.php").then(onResponse).then(onJson);
}

function onResponse(response){
    return response.json();
}

let arutente=[];
function onJson(json) {
    console.log(json);
    for(utente of json){
        arutente.push(utente.username);
    }
}