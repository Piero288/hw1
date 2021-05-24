<?php
require_once('db.php');
// Avvia la sessione
session_start();
// Verifica l'accesso
if(isset($_SESSION["username"]))
{
    // Vai alla home
    header("Location: homelog.php");
    exit;
}

// Verifica l'esistenza di dati POST
if(isset($_POST["username"]) && isset($_POST["password"]))
{
    // Connetti al database
    $conn = mysqli_connect("localhost", "root", "", "azienda");$conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_password'],$config['db_name']);
    $username = mysqli_real_escape_string($conn, $_POST["username"]);
    $pass = $_POST["password"];
    $query = "SELECT password from utente where username ='".$username."'";
    $res = mysqli_query($conn, $query);
    // Verifica la correttezza delle credenziali
    if(mysqli_num_rows($res) > 0){
        $password = mysqli_fetch_assoc($res);
        if(password_verify($pass, $password["password"])){
        // Imposta la variabile di sessione
        $_SESSION["username"] = $_POST["username"];
        mysqli_free_result($res);
        mysqli_close($conn);
        // Vai alla pagina homelog.php
        header("Location: homelog.php");
        exit;
        }
        else{
            // Flag di errore
            $errore = true;
        }
    }
    else{
        // Flag di errore
        $errore = true;
    }
}

?>

<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="login.css">
    <script src="login.js" defer></script>
    <link href="https://fonts.googleapis.com/css?family=Lora:400,400i|Open+Sans:400,700" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup - Fratelli Pistone</title>
</head>
<body>
    <nav>
        <div id="logo">
            <img src="logo.png">
        </div>
        <div id="links">
            <a href="home.html">Home</a>
            <a href="signup.php">Registrati</a>
            <!-- <a>Carrello</a> -->
        </div>
        <div class="menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>

    <div class="nascondimenu">
        <a href="home.html">Home</a>
        <a href="signup.php">Registrati</a>
    </div>

    <header>
            <div id="overlay">
            <h1>Siciliani dalla nascita</h1>
            <p class="header">Tutte le nostre specialità da gustare e assaporare lentamente!</p>
            </div>
    </header>
    <section>
    
        <div id="contenitore">
        <h1>ACCEDI</h1>
        <div class="mexbox">
            <?php
                // Verifica la presenza di errori
                if(isset($errore))
                {   
                    echo "<p class='errore'>";
                    echo "Username o password errate.";
                    echo "</p>";
                }
            ?>
        </div>
        <div class= "box">

    <main>
    
        <form name='login' method='post'>
            <p>
                <label>Username: <input autocomplete="off" type='text' name='username'></label>
            </p>
            <p>
                <label>Password: <input type='password' name='password'></label>
            </p>
            <p>
                <label>&nbsp;<input type='submit' id="submit"></label>
            </p>
            <p>
                <label>Non sei ancora registrato? <a class="reg" href="signup.php">Registrati</a></label>
            </p>
        </form>
    </main>
    </div>
    </div>
    </section>
    <footer>
        <p>Contrada Montecenere snc - Belpasso(CT)</p>
        <p>Piero Galatà - O46001900</p>
    </footer>
</body>
</html>