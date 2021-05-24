<?php
require_once('db.php');
session_start();
//verifico i dati post
if(!isset($_SESSION["username"])){
    header("Location: login.php");
    exit;
} 

$conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_password'],$config['db_name']);
    mysqli_close($conn);

?>


<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="homelog.css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,400i|Open+Sans:400,700" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="homelog.js" defer></script>
    <script src="api.js" defer></script>
    <script src="contents.js"></script>

    <title>Fratelli Pistone</title>
</head>
<body>
    <nav>
        <div id="logo">
            <img src="logo.png">
        </div>
        <div id="links">
            <!--<a>Home</a>-->
            <a href="#titolo">Prodotti</a>
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
        <h2> Benvenuto, <?php echo ($_SESSION["username"]) ?>!</h2>
        <div id="inizio">
            <h1>Una storia di spirito tutta siciliana</h1>
            <p>La nostra azienda nasce nel 1998 come un laboratorio artigianale per la produzione di liquori che utilizza come materia prima gli agrumeti della nostra Sicilia.
            L'azienda si fa subito apprezzare per la qualità e il gusto dei suoi infusi, capaci di omaggiare la tradizione in maniera sempre originale.
            La svolta più importante avviene nel 2017 quando attarverso nuove esperienze e sperimentazioni costanti si è riuscito ad immettere sul mercato nuove specialità,
            dando vita a prodotti innovativi e nel gusto e nello spirito. </p>
        </div>
        <div id="part">
            <div class="immagine">
                <img src="drink1.jpg">
            </div> 
            <div class="testo">
            <h1>Spiritosi per natura</h1>  
            <article>Questo è il motto che da una vita ci identifica e ci accompagna da una vita. Più che uno slogan è una vera e propria filosofia di vita. Un ironico invito a prendere
            le cose alla leggera e a godersi i grandi piaceri della vita. Lo spirito è anche quella passione che ci permette di affrontare gli impegni quotidiane
            e le sfide del mercato attarverso le giuste decisioni e strategie.</article>
            </div>
        </div>

        <div id="titolo">
            <h1>i nostri prodotti</h1>

            <div id="cerca">
                 <p>Ricerca:</p>
                <input type= "text" id="barraricerca">
            </div>

        </div>
   
        <div id="contenitore">           
        </div>

        <form>
            <h2> Cerca il tuo cocktail preferito e scopri come prepararlo</h2>
            <input type="text" placeholder="Inserisci un cocktail" id="cocktail">
            <button> INVIO </button>
        </form>

        <div id="div_cocktail"></div>

    </section>

    <footer>
        <p>Contrada Montecenere snc - Belpasso(CT)</p>
        <p>E-mail: team@fratellipistone.com</p>
        <p>Tel. +39 095 7131604</p>
        <p>Piero Galatà - O46001900</p>
    </footer>
</body>
</html>