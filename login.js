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
function validazione(event) {
    mexbox.innerHTML="";
    if (input.username.value.length == 0 || input.password.value.length == 0) {
        const mex = document.createElement('p');
        mex.textContent= "Inserire username e password!";
        mexbox.appendChild(mex);
        event.preventDefault();
    }
}

input = document.forms["login"];
input.addEventListener("submit", validazione);