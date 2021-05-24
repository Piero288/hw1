<?php
require_once('db.php');
// Avvia la sessione
session_start();
// Verifica l'accesso
if(isset($_SESSION["username"]))
{
    // Vai alla home
    header("Location: homelog.php");
}

//Verifica l'esistenza di dati POST

if(isset($_POST["name"]) && isset($_POST["surname"]) && isset($_POST["email"]) && isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["confirmpassword"]))
{

     // Connetti al database
     $conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_password'],$config['db_name']);
     $username = mysqli_real_escape_string($conn, $_POST["username"]);
     $nome = mysqli_real_escape_string($conn, $_POST["name"]);
     $cognome = mysqli_real_escape_string($conn, $_POST["surname"]);
     $email = mysqli_real_escape_string($conn, $_POST["email"]);
     $pass = $_POST["password"];
     $passhash=password_hash($pass, PASSWORD_BCRYPT);
     $password = mysqli_real_escape_string($conn, $passhash);
 
    if($conn){
     mysqli_query($conn, "INSERT INTO utente VALUES(\"$username\",\"$nome\",\"$cognome\",\"$email\",\"$password\")");
     mysqli_close($conn);
        // Imposta la variabile di sessione
        $_SESSION["username"] = $_POST["username"];
        header("Location: homelog.php");
        exit;
    }
}

?>

<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="signup.css">
    <script src="signup.js" defer></script>
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
            <a href="login.php">Accedi</a>
        </div>
        <div class="menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>

    <div class="nascondimenu">
        <a href="home.html">Home</a>
        <a href="login.php">Accedi</a>
    </div>

    <header>
            <div id="overlay">
            <h1>Siciliani dalla nascita</h1>
            <p class="header">Tutte le nostre specialità da gustare e assaporare lentamente!</p>
            </div>
    </header>
    <section>
    
        <div id="contenitore">
        <h1>REGISTRAZIONE</h1>
        <div class="mexbox"></div>
        <div class= "box">

    <main>
    
        <form enctype="multipart/form-data"  name='sign' method='post'>
        <p>
                <label>Nome:  <input autocomplete="off" type='text' name='name' value='<?php if(isset($_POST["name"])){echo $_POST['name'];}else{echo"";}?>'></label>
            </p>
            <p>
                <label>Cognome: <input autocomplete="off" type='text' name='surname' value='<?php if(isset($_POST["surname"])){echo $_POST['surname'];}else{echo"";}?>'></label>
            </p>
            <p>
                <label>E-mail: <input autocomplete="off" type='text' name='email' placeholder="esempio@esempio.com" value='<?php if(isset($_POST["email"])){echo $_POST['email'];}else{echo"";}?>'></label>
            </p>
            <p>
                <label>Username: <input autocomplete="off" type='text' name='username' value='<?php if(isset($_POST["username"])){echo $_POST['username'];}else{echo"";}?>'></label>
            </p>
            <p>
                <label>Password: <input type='password' name='password' value='<?php if(isset($_POST["password"])){echo $_POST['password'];}else{echo"";}?>'></label>
            </p>
            <p>
                <label>Conferma password: <input type='password' name='confirmpassword'></label>
            </p>
            <p>
                <label>&nbsp;<input type='submit' id="submit"></label>
            </p>
            <p>
                <label>Sei già registrato?<a class="acc" href="login.php">Accedi</a></label>
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