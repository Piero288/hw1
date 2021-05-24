<?php
require_once('db.php');
session_start();

$testo= $_GET['q'];

$conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_password'],$config['db_name']);
$username = mysqli_real_escape_string($conn, $_SESSION["username"]);
$prodotto = mysqli_real_escape_string($conn, $testo);

//FARE QUERY PER ELIMINARE DAL CARRELLO
$s=mysqli_query($conn, "DELETE FROM carrello WHERE username = '".$username."' AND nome_prodotto = '".$prodotto."'");

if ($s){
    $errore= true;
}else{
    $errore= false;
}
   
echo json_encode($errore);      
mysqli_close($conn);

?>