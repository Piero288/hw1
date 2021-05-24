<?php
require_once('db.php');
$conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_password'],$config['db_name']);

$utenti=array();
$res=mysqli_query($conn,"SELECT username from utente");

while($row =mysqli_fetch_assoc($res)){
    $utenti[]=$row; 
}

mysqli_free_result($res);
mysqli_close($conn);

echo json_encode($utenti);

?>