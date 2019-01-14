<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/navbalk.css">
    <link rel="stylesheet" href="../css/toevoegen.css">
    <title>Upload Images</title>
</head>
<body>
<div class="topnav" id="myTopnav">
    <a href="ingelogt.php" class="active">Home</a>
    <a href="toevoegen.php">Foto toevoegen</a>
    <a href="about2.php">About</a>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
</div>
<div class="wrapper">
    <form action="toevoegen.php" method="post" enctype="multipart/form-data">
        <?php include ('process.php');?>
        <input type="hidden" name="MAX_FILE_SIZE" value="20000000000">
        <input type="file" name="userimage" accept="image/*" onchange="preview_image(event)">
        <img src="../images/img.png" id="output_image"/>
        <br>
        <label>Titel:<br><input type="text" name="title"></label><br>
        <label>Omschrijving:<br><textarea name="omschrijving" cols="40" rows="5"></textarea></label>
        <br><br>
        <a href="../index.php" class="cancel">cancel</a>
        <input class="upload_submit" type="submit" name="submit" value="upload afbeelding">


    </form>
</div>
<script>
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    function preview_image(event) {
        var reader = new FileReader();
        reader.onload = function () {
            var output = document.getElementById('output_image');
            output.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    }




</script>
</body>
</html>

