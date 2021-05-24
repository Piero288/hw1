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

const acquistati = document.querySelector('#acquistati');
const textacq = document.createElement('p');
textacq.classList.add('textacq');

const tabella = document.querySelector('table');
const tbody = document.querySelector('tbody');

const percorso = "http://localhost/hw1/";
fetch(percorso + "prodottiacquistati.php").then(onResponseacq).then(onAcq);

function onResponseacq (response) {
    return response.json();
}

function onAcq(json){
    console.log(json);
    if(json.length > 0){
        tabella.classList.remove('hidden');
        for(let i=0;i<json.length; i++){ //for(let i=0;i<json.length; i++) //for(let i=0;i<json.length; i++)
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            const ca = document.createElement('td');
            ca.textContent=json[i].cod_acquisto;
            tr.appendChild(ca); 

            const prod = document.createElement('td');
            prod.textContent = json[i].nome_prodotto;
            tr.appendChild(prod);

            const quanti = document.createElement('td');
            quanti.textContent = json[i].quantita;
            tr.appendChild(quanti);

            const prezzotot = document.createElement('td');
            prezzotot.textContent = json[i].prezzo + " €";
            tr.appendChild(prezzotot);

            const citta = document.createElement('td');
            citta.textContent = json[i].citta;
            tr.appendChild(citta);

            const indirizzo = document.createElement('td');
            indirizzo.textContent = json[i].indirizzo;
            tr.appendChild(indirizzo);

            const cell = document.createElement('td');
            cell.textContent = json[i].cellulare;
            tr.appendChild(cell);

            const data = document.createElement('td');
            data.textContent = json[i].data_di_acquisto;
            tr.appendChild(data);
        }
    }else{
        textacq.innerHTML="";
        textacq.textContent="Non hai effettuato ancora nessun acquisto!";
        acquistati.appendChild(textacq);
    }
}