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

for(const c of contenuto){
    const contenitore = document.querySelector('#contenitore');
    const box = document.createElement('div');
    box.classList.add('contenuto');
    box.classList.add('cerca');
    box.setAttribute('data-index', c.ind)
    contenitore.appendChild(box);
    const immagine = document.createElement('img');
    immagine.src=c.image;
    box.appendChild(immagine);
    const box_titolo_pref = document.createElement('div');
    box_titolo_pref.classList.add('testobox');
    box.appendChild(box_titolo_pref);
    const titolo=document.createElement('h1');
    titolo.textContent=c.titolo;
    box_titolo_pref.appendChild(titolo);
    const pdettagli = document.createElement('p');
    pdettagli.textContent = "Mostra maggiori dettagli";
    box.appendChild(pdettagli);
    pdettagli.addEventListener('click', moreDetails);
}

function moreDetails(event){
    const p = event.currentTarget;         //recupero l'elemento che scatena l'evento
    const pn = p.parentNode;               //recupero il box che contiene l'elemento p che scatena l'evento
    const numbox=pn.dataset.index;         //mi ritorna l'indice associato al div preso da pn
    if(p.textContent==="Mostra maggiori dettagli"){
        p.textContent="Mostra meno dettagli";
        const descrizione=document.createElement('p');
        pn.appendChild(descrizione);
        descrizione.textContent=contenuto[numbox-1].descrizione;
        console.log(numbox);
    }
    else{
        p.textContent="Mostra maggiori dettagli";
        pn.lastChild.remove();             //rimuove l'ultimo figlio appenso nel box
    }
}

const div_cerca = document.querySelector('#barraricerca'); //mi recupero l'input
div_cerca.addEventListener('keyup', ricerca);

function ricerca(event){
    const stringa= event.currentTarget.value;
    const boxprodotto = document.querySelectorAll('#contenitore .cerca');
    console.log(boxprodotto);
    const boxhidden=document.querySelectorAll('#contenitore .hidden');
    for(bh of boxhidden){
        bh.classList.remove('hidden');
        bh.classList.add('contenuto');
    }
        if(stringa !== ' '){
            for( bp of boxprodotto){
                let titolobox = bp.querySelector('.testobox h1');
                let titolo = titolobox.textContent;
                console.log(titolo);
                    if(titolo.toLowerCase().indexOf(stringa.toLowerCase()) === -1){
                        bp.classList.remove('contenuto');
                        bp.classList.add('hidden');     
                    }
            }
        }
}
