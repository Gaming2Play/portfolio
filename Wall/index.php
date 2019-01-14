<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link rel="stylesheet" href="css/stoyle.css">
    <link rel="stylesheet" href="css/navbalk.css">

</head>
<body>

<div class="topnav" id="myTopnav">
    <a href="index.php" class="active">Home</a>
    <a href="php/inlog.php">inloggen/registreren</a>
    <a href="php/about.php">About</a>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
</div>
<div class="wrapper">
<?php
$dbc = mysqli_connect('localhost', 'c225224484_db', '123456' , 'c225224484_db');
$query = "SELECT * FROM plaatjes";

$result = mysqli_query($dbc, $query) or die ('gaat niet goed');

while ($row = mysqli_fetch_array($result)){
    $locatie = $row['locatie'];
    $id = $row['id'];
    $title = $row['naam'];
    $omschrijving = $row['omschrijving'];


//    echo '<img class="plaatjes" src="php/' . $locatie . '" />';

    echo "<button class='button' id='modalBtn".$id."'> <img class='plaatjes' src='php/".$locatie."'></img> </button>";

    echo "<div id='simpleModal".$id."' class='modal'>
 <div class='modal-content'>
   <div class='modal-header'>

  <span class='closeBtn".$id."'>&times;</span>
  <h2> " . $title . " </h2>
  </div>
  <div class='modal-body'>
  <img class='plaatje_groot' src='php/".$locatie."'/><br>
  <p>" . $omschrijving ."</p>
</div>
   <div class='modal-footer'>
     <h3>Made by Almar </div>
   </div>
 </div>
 <script>
 // Get Modal Element
var modal".$id." = document.getElementById('simpleModal".$id."');
// Get open Modal button
var modalBtn".$id." = document.getElementById('modalBtn".$id."');
// Get Close button
var closeBtn".$id." = document.getElementsByClassName('closeBtn".$id."')[0];

// Listen for open click
modalBtn".$id.".addEventListener('click', openModal".$id.");

// Listen for close click
closeBtn".$id.".addEventListener('click', closeModal".$id.");

// Listen for outside Click
window.addEventListener('click', clickOutside".$id.");

// Function to open Modal
function openModal".$id."() {
  modal".$id.".style.display = 'block';
}

// Function to close Modal
function closeModal".$id."() {
  modal".$id.".style.display = 'none';
}

// Function to close Modal if outside
function clickOutside".$id."(e) {
  if (e.target == modal".$id.") {
  modal".$id.".style.display = 'none';
 }
}
</script> ";




}
?>
    <script>
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    </script>

</div>
</body>
</html>
