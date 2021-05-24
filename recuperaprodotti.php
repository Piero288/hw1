<?php
require_once('db.php');
session_start();

$conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_password'],$config['db_name']);
$username = mysqli_real_escape_string($conn, $_SESSION["username"]);

$prodotti=array();
$res=mysqli_query($conn, "SELECT nome_prodotto FROM carrello WHERE username ='".$username."'");

while($row =mysqli_fetch_assoc($res)){
    $prodotti[]=$row; 
}

mysqli_free_result($res);
mysqli_close($conn);
echo json_encode($prodotti);    

?>