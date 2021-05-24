<?php
require_once('db.php');
session_start();

$conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_password'],$config['db_name']);
$username = mysqli_real_escape_string($conn, $_SESSION["username"]);

$prodottiacq=array();
$res=mysqli_query($conn, "SELECT cod_acquisto, nome_prodotto, quantita, prezzo, cellulare, citta, indirizzo, data_di_acquisto FROM acquista WHERE username ='".$username."'");

while($row =mysqli_fetch_assoc($res)){
    $prodottiacq[]=$row; 
}

mysqli_free_result($res);
mysqli_close($conn);
echo json_encode($prodottiacq);    

?>