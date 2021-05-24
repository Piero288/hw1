
function onJson(json){
    console.log(json);
    if(json.drinks !== null){
    const div_cocktail = document.querySelector('#div_cocktail');
    const img_cocktail = document.createElement('img');
    const testo_cocktail = document.createElement('div');
    testo_cocktail.classList.add('drink');
    const titolo_cocktail = document.createElement('h2');
    const prep_cocktail = document.createElement('p');
    img_cocktail.src=json.drinks[0].strDrinkThumb;
    titolo_cocktail.textContent = json.drinks[0].strDrink;
    prep_cocktail.textContent = json.drinks[0].strInstructionsIT;
    div_cocktail.appendChild(img_cocktail);
    div_cocktail.appendChild(testo_cocktail);
    testo_cocktail.appendChild(titolo_cocktail);
    testo_cocktail.appendChild(prep_cocktail);
    }   else {
            const div_cocktail = document.querySelector('#div_cocktail');
            const testo_cocktail = document.createElement('div');
            const no_cocktail = document.createElement('p');
            no_cocktail.textContent = 'Non è stato trovato nessun cocktail con questo nome!';
            div_cocktail.appendChild(testo_cocktail);
            testo_cocktail.appendChild(no_cocktail);
        }
}

function onResponse(response){
    return response.json();
}

const form = document.querySelector('form');
form.addEventListener('submit', cocktail);

function cocktail(event){
    event.preventDefault();
    const str_cocktail = document.querySelector('#cocktail').value;
    if(str_cocktail === ''){
        div_cocktail.innerHTML = '';
    } else{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + str_cocktail).then(onResponse).then(onJson);
    const div_cocktail= document.querySelector('#div_cocktail');
    div_cocktail.innerHTML = '';
     }
}

let valori = [];

fetch('http://localhost/hw1/apirestgin.php').then(onResponse).then(onJson1);  

function onJson1(json){
    const val_nutr = document.createElement('p');
    val_nutr.classList.add('val_nutr');
    val_nutr.textContent = 'Le calorie di Ionico sono: '+ json.hits[1].recipe.calories.toFixed(2)+ ' Kcal';
    valori.push(val_nutr);
    fetch('http://localhost/hw1/apirestdistillate.php').then(onResponse).then(onJson2);
}

function onJson2(json){
    const val_nutr = document.createElement('p');
    val_nutr.textContent = 'Le calorie di Oromoro sono: '+ json.hits[7].recipe.calories.toFixed(2)+ ' Kcal';
    valori.push(val_nutr);
    fetch('http://localhost/hw1/apirestliquor.php').then(onResponse).then(onJson3);
}

function onJson3(json){
    const val_nutr = document.createElement('p');
    val_nutr.textContent = 'Le calorie di Murika sono: '+ json.hits[3].recipe.calories.toFixed(2)+ ' Kcal';
    valori.push(val_nutr);
    fetch('http://localhost/hw1/apirestliqueur.php').then(onResponse).then(onJson4);
}

function onJson4(json){
    const val_nutr = document.createElement('p');
    val_nutr.textContent = 'Le calorie delle nostre creme liquorose sono: '+ json.hits[6].recipe.calories.toFixed(2)+ ' Kcal';
    valori.push(val_nutr);
    fetch('http://localhost/hw1/apirestbitter.php').then(onResponse).then(onJson5);
}

function onJson5(json){
    const val_nutr = document.createElement('p');
    val_nutr.textContent = 'Le calorie di amaro Rocca sono: '+ json.hits[9].recipe.calories.toFixed(2)+ ' Kcal';
    valori.push(val_nutr);
    fetch('http://localhost/hw1/apirestinfuse.php').then(onResponse).then(onJson6); 
}

function onJson6(json){
    const val_nutr = document.createElement('p');
    val_nutr.textContent = 'Le calorie dei nostri rosoli sono: '+ json.hits[0].recipe.calories.toFixed(2)+ ' Kcal';
    valori.push(val_nutr);
}

//app_id=e0b5722a app_key=ab63381a993524f6288c0312a477e8dd