<?php
//echo $_FILES['userimage']['name'] .'<br>';
//echo $_FILES['userimage']['size'] . '<br>';
//echo $_FILES['userimage']['tmp_name'] . '<br>';
$title = $_POST['title'];
$omschrijving = $_POST['omschrijving'];
$temp_location = $_FILES['userimage']['tmp_name'];
$target_location = 'images/' . time() . $_FILES['userimage']['name'] ;

if ($_FILES['userimage']['size'] < 2000000)
{
    $result = move_uploaded_file($temp_location, $target_location);


} else {
    echo "doe ff normaal denk je het is gratis";
}

if ($result){
    $dbc = mysqli_connect('localhost', 'c225224484_db', '123456' , 'c225224484_db');
    $query = "INSERT INTO plaatjes VALUES (0, '$title', '$omschrijving', '$target_location')";
    $result = mysqli_query($dbc, $query);

    mysqli_close($dbc);
    echo '<a href="ingelogt.php">Klik hier om terug te gaan.</a>';
}
?>
