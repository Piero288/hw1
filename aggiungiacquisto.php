<?php
require_once('db.php');
session_start();

$testo = $_GET['t'];
$quant = $_GET['q'];
$prezzo = $_GET['p'];
$cell = $_GET['cel'];
$citt = $_GET['c'];
$indir = $_GET['i'];

$conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_password'],$config['db_name']);
$codice = uniqid(); //FUNZIONE CHE RESTITUISCE UNA STRINGA ALFANUMERICA CASUALE
$username = mysqli_real_escape_string($conn, $_SESSION["username"]);
$prodotto = mysqli_real_escape_string($conn, $testo);
$quantita = mysqli_real_escape_string($conn, $quant);
$prezzotot = mysqli_real_escape_string($conn, $prezzo);
$cellulare = mysqli_real_escape_string($conn, $cell); //recupero il cellulare
$citta = mysqli_real_escape_string($conn, $citt); //recupero la citta
$indirizzo = mysqli_real_escape_string($conn, $indir); //recupero l'indirizzo
$datadiacquisto = date ("Y/m/d");

//CONTROLLO SE IL CODICE E' GIA' PRESENTE NELLA TABELLA, IN QUANTO UNIVOCO, NON POSSONO ESSERCENE DUE UGUALI, QUINDI IN TAL CASO NE CREO UN ALTRO
$query = mysqli_query($conn, "SELECT cod_acquisto FROM acquista where cod_acquisto='".$codice."'");
if(mysqli_num_rows($query)!==0){
    $codice = uniqid();
}

//QUERY PER AGGIUNGERE ALLA TABELLA ACQUISTA
$s=mysqli_query($conn, "INSERT INTO acquista VALUES(\"$codice\",\"$username\",\"$prodotto\",\"$quantita\",\"$prezzotot\",\"$cellulare\",\"$citta\",\"$indirizzo\",\"$datadiacquisto\")");

if ($s){
    $errore= true;
}else{
    $errore= false;
}
   
echo json_encode($errore);      
mysqli_close($conn);

?>