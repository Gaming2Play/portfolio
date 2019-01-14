<?php
//Gebruikersnaam en wachtwoord ophalen
$gebruikersnaam = $_POST['usernamelogin'];
$wachtwoord = $_POST['passwordlogin'];
//Wachtwoord omzetten in een Hash
$hashedpw = (md5($wachtwoord));
//Database connectie maken
$dbc = mysqli_connect('localhost', 'root', 'root', 'photowall') or die ("Was not able to connect to Database");
//Username checken en wachtwoord checken
$query = "SELECT * FROM users WHERE gebruikersnaam = '$gebruikersnaam' AND wachtwoord = '$hashedpw'" or die ('kan query niet maken');
//De query uitvoeren
$result = mysqli_query($dbc, $query) or die ("Was not able to query no 1");
$row = mysqli_fetch_array($result);
if ($row)
{
    echo "Welcome " . $gebruikersnaam . "<br />";
    echo "Redirecting";
} else {
    echo "Password or username incorrect try again";
}
?>
