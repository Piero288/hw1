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


const acq = document.querySelector('#acquista');
const textacq = document.createElement('p');
textacq.classList.add('textcart');

const conf = document.querySelector('#conferma');
const textconf = document.createElement('p');
textconf.classList.add('textconf');

const textsaldo = document.createElement('p');
textsaldo.classList.add('textsaldo');

const s_n = document.createElement('div');
s_n.classList.add('confermare');

const s = document.createElement('p');
const n = document.createElement('p');

let dett = document.querySelector('form');

const mexbox = document.querySelector('#mexbox');
const mex = document.createElement('p');

let nomeprod;
let prezzotot;
let quant;

const percorso = "http://localhost/hw1/";
const prodotto = document.querySelector('#prodotti');

fetch(percorso + "recuperaprodotti.php").then(onResponse2).then(onProd);

function onResponse2 (response) {
    return response.json();
}

function onProd (json) {
    textacq.innerHTML="";
    console.log(json);
    if(json.length > 0){
        for( let i=0; i<json.length; i++) {
            console.log(json[i]);
            for(c of contenuto){
                if(json[i].nome_prodotto === c.titolo){
                    const box = document.createElement('div');
                    box.classList.add('contenuto');
                    prodotto.appendChild(box);
                    let immagine = document.createElement('img');
                    immagine.src = c.image;
                    console.log(immagine);
                    box.appendChild(immagine);
                    const box_titolo_shop = document.createElement('div');
                    box_titolo_shop.classList.add('testobox');
                    box.appendChild(box_titolo_shop);
                    let titolo=document.createElement('h1');
                    titolo.textContent = c.titolo;
                    box_titolo_shop.appendChild(titolo);
                    const shop=document.createElement('img');
                    shop.src="removeshop.png";
                    shop.classList.add('img_shop');
                    box_titolo_shop.appendChild(shop);
                    shop.addEventListener('click', removeShop);
                    const box_acquisto = document.createElement('div');
                    box_acquisto.classList.add('boxacquisto');
                    box.appendChild(box_acquisto);
                    const acquista=document.createElement('p');
                    acquista.textContent = "Acquista";
                    box_acquisto.appendChild(acquista);
                    const numero = document.createElement('input');
                    numero.setAttribute('type', 'number');
                    numero.setAttribute('name', 'quantita');
                    numero.setAttribute('min', 1);
                    numero.setAttribute('max', 6);
                    numero.setAttribute('value', 1);                    
                    box_acquisto.appendChild(numero);
                    numero.addEventListener("blur", checkNumber);
                    acquista.addEventListener("click", acquisto);
                }
            }
        }
    }else{
        textacq.innerHTML="";
        textacq.textContent="Il tuo carrello è vuoto. Inserisci i prodotti che vorresti acquistare direttamente dalla home!"
        acq.appendChild(textacq);
    }
}

function checkNumber(event){
    const e = event.currentTarget;
    console.log(e.value);
    if(e.value > 6){
        e.value=6;
    }else if(e.value <= 0){
        e.value=1;
    }
}

function removeShop(event){
    const s = event.currentTarget;              //recupero l'immagine cliccabile
    const di = s.parentNode;                    //recupero il div che contiene l'immagine cliccabile
    const boxprodotto=di.parentNode;            //recupero l'intero contenitore che contiene titolo e immagine
    const tit= di.querySelector('h1');          //recupero il titolo
    boxprodotto.remove();
    fetch(percorso + "eliminadalcarrello.php" + "?q=" + tit.textContent ).then(onResponse3).then(onDelete); 
    let conte = document.querySelector(".contenuto");
    if(!conte){
        textconf.innerHTML="";
        textacq.innerHTML="";
        textacq.textContent="Il tuo carrello è vuoto. Inserisci i prodotti che vorresti acquistare direttamente dalla home!"
        acq.appendChild(textacq);
    }
    if(conf !== null)
    conf.innerHTML="";
    dett.classList.add('hidden');
}

function onResponse3 (response) {
    return response.json();
}

function onDelete (json) {
    console.log(json);
}

function acquisto(event){
    let e = event.currentTarget;                       //recupero il tasto acquista cliccabile
    let di = e.parentNode;                             //recupero il div che contiene il tasto cliccabile
    let boxprodotto=di.parentNode;                     //recupero l'intero contenitore che contiene titolo e immagine del prodotto
    let tit= boxprodotto.querySelector('h1');          //recupero il titolo

    let inputq = di.querySelector('input');            //recupero l'input in cui inserisco la quantita dei prodotti da acquistare
    quant = inputq.value;

    if(tit.textContent==='Ionico'){
        let prezzo = 35;
        prezzotot = prezzo*quant;
    }else if(tit.textContent==='Oromoro'){
        let prezzo = 28;
        prezzotot = prezzo*quant;
    }else if(tit.textContent==='Murika'){
        let prezzo = 18;
        prezzotot = prezzo*quant;
    }else if(tit.textContent==='Creme'){
        let prezzo = 13;
        prezzotot = prezzo*quant;
    }else if(tit.textContent==='Rocca'){
        let prezzo = 12;
        prezzotot = prezzo*quant;
    }else if(tit.textContent==='Rosoli'){
        let prezzo = 10;
        prezzotot = prezzo*quant;
    }
    nomeprod=tit.textContent;
    textsaldo.innerHTML="";
    mex.innerHTML="";
    textconf.innerHTML="";
    textconf.textContent="Sei sicuro di voler acqusitare n° " + quant + " bottiglie di " + tit.textContent + " al prezzo totale di " + prezzotot + "€ ?";
    conf.appendChild(textconf);
    conf.appendChild(s_n);
    s.textContent= "Avanti";
    s_n.appendChild(s);
    n.textContent= "Annulla";
    s_n.appendChild(n);
    textsaldo.innerHTML="";
    textsaldo.textContent="Si ricorda che il pagamento avverrà alla consegna!"
    conf.appendChild(textsaldo);

    s.addEventListener("click", avanti);
    n.addEventListener("click", annulla);
}

function avanti(){
    s.remove();
    dett.classList.remove('hidden');
    document.getElementById('citta').value="";
    document.getElementById('cellulare').value="";
    document.getElementById('indirizzo').value="";
    dett.addEventListener("submit", validazione);
}

function validazione(event){
    if(dett.citta.value.length === 0 || dett.indirizzo.value.length === 0){
        console.log('I campi non sono completi!');
        mex.innerHTML="";
        mex.textContent= "Compila tutti i campi!";
        mexbox.appendChild(mex);
        event.preventDefault();
    }else if(dett.cellulare.value.length !== 10){
        console.log('Il campo cellulare non è corretto!');
        mex.innerHTML="";
        mex.textContent= "Inserisci un numero di cellulare di 10 cifre!";
        mexbox.appendChild(mex);
        event.preventDefault();
    }else{
        conferma();
        event.preventDefault();
    }
}

function conferma(){
    const prodotto = document.querySelectorAll('.contenuto');
    for(p of prodotto){
        const titolo = p.querySelector('h1');
        if(titolo.textContent === nomeprod){
            //mi recupero i valori inseriti nel form e li passo nella fetch
            const citta = dett.citta.value;
            const cell = dett.cellulare.value;
            const indirizzo = dett.indirizzo.value;
            dett.classList.add('hidden');
            fetch(percorso + "aggiungiacquisto.php" + "?t=" + titolo.textContent + "&q="+ quant + "&p="+ prezzotot + "&c="+ citta + "&cel="+ cell + "&i="+ indirizzo ).then(onResponse4).then(onAdd);
        }
    }
}

function onAdd (json) {
    const prodotto = document.querySelectorAll('.contenuto');
    for(p of prodotto){
        const titolo = p.querySelector('h1');
        if(titolo.textContent === nomeprod){ //il json se è false vuol dire che la query non è andata a buon fine, quindi non c'è stato l'acquisto
            console.log(json);
            if(json===false){
                console.log('la query non è andata a buon fine');
                conf.innerHTML="";
                mex.innerHTML="";
                mex.textContent= "Spiacente, la quantità richiesta non è al momento disponibile!";
                mexbox.appendChild(mex);
            }else{
                p.remove();
                s_n.remove();
                textsaldo.innerHTML="";
                textconf.innerHTML="";
                textconf.textContent="Acquisto effettuato con successo!";
                conf.appendChild(textconf);
                mex.innerHTML="";
                fetch(percorso + "eliminadalcarrello.php" + "?q=" + titolo.textContent ).then(onResponse3).then(onDelete);            
                let conte = document.querySelector(".contenuto");
                if(!conte){
                    textacq.innerHTML="";
                    textacq.textContent="Il tuo carrello è vuoto. Inserisci i prodotti che vorresti acquistare direttamente dalla home!";
                    acq.appendChild(textacq);
                }
            }
        }
    }      
}

function onResponse4 (response) {
    return response.json();
}

function annulla(){
    s_n.remove();
    textconf.innerHTML="";
    mex.innerHTML="";
    textsaldo.innerHTML="";
    document.getElementById('citta').value="";
    document.getElementById('cellulare').value="";
    document.getElementById('indirizzo').value="";
    dett.classList.add('hidden');
}