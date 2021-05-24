<?php
require_once('db.php');
session_start();

if(!isset($_SESSION["username"])){
    header("Location: login.php");
    exit;
} 
//verifico i dati post

$conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_password'],$config['db_name']);
    mysqli_close($conn);

?>

<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="acquisti.css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,400i|Open+Sans:400,700" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="acquisti.js" defer></script>
    <script src="contents.js"></script>

    <title>Carrello - Fratelli Pistone</title>
</head>
<body>
    <nav>
        <div id="logo">
            <img src="logo.png">
        </div>
        <div id="links">
            <a href="homelog.php">Home</a>
            <a href="carrello.php">Carrello</a>
            <a href="logout.php">Esci</a>
        </div>
        <div class="menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>

    <div class="nascondimenu">
        <a href="homelog.php">Home</a>
        <a href="carrello.php">Carrello</a>
        <a href="logout.php">Esci</a>
    </div>
    
    <header>
            <div id="overlay">
            <h1>Siciliani dalla nascita</h1>
            <p class="header">Tutte le nostre specialità da gustare e assaporare lentamente!</p>
            </div>
    </header>
    <section>
        <div id="acquisto">
        <h1>I tuoi acquisti:</h1>
        <div id="acquistati"></div>
        <table border="2" class="hidden"> <thead> <tr> <th>Codice acquisto</th> <th>Prodotto</th> <th>Quantita</th> <th>Prezzo</th> <th>Città</th> <th>Indirizzo</th> <th>Cellulare</th> <th>Data</th> </tr> </thead>
        <tbody></tbody>
        </table>
        </div>
    </section>

    <footer>
        <p>Contrada Montecenere snc - Belpasso(CT)</p>
        <p>E-mail: team@fratellipistone.com</p>
        <p>Tel. +39 095 7131604</p>
        <p>Piero Galatà - O46001900</p>
    </footer>
</body>
</html>