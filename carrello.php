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
    <link rel="stylesheet" href="carrello.css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,400i|Open+Sans:400,700" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="carrello.js" defer></script>
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
            <a href="acquisti.php">Acquisti</a>
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
        <a href="acquisti.php">Acquisti</a>
        <a href="logout.php">Esci</a>
    </div>

    <header>
            <div id="overlay">
            <h1>Siciliani dalla nascita</h1>
            <p class="header">Tutte le nostre specialità da gustare e assaporare lentamente!</p>
            </div>
    </header>
    <section>
    <div class="carrello">
        
            <h1>Il tuo carrello:</h1>
            <div id="acquista"></div>
            <div id="prodotti"></div> 
            <div id="conferma"></div> 
            <div id="mexbox"></div>

            <main>
                <form name='confermare' method='post' class="hidden">
                    <p>
                        <label>Città: <input autocomplete="off" type='text' name='citta' id="citta"></label>
                    </p>
                    <p>
                        <label>Indirizzo di spedizione: <input autocomplete="off" type='text' name='indirizzo' id="indirizzo"></label>
                    </p>
                    <p>
                        <label>Cellulare: <input autocomplete="off" type='tel' name='cellulare' id="cellulare"></label>
                    </p>
                    <p>
                        <label>&nbsp;<input type='submit' id="submit"></label>
                    </p>                    
                </form>
            </main>
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