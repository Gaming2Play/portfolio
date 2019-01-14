<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/navbalk.css">
    <link rel="stylesheet" href="../css/about.css">
    <title>About</title>
</head>
<body>
<div class="topnav" id="myTopnav">
    <a href="ingelogt.php" class="active">Home</a>
    <a href="toevoegen.php">Foto toevoegen</a>
    <a href="about2.php">About</a>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
</div>
<div class="wrapper">
<!--Modal 1 -->
<button class="button" id="modalBtn"><img class="almar" src="../images/almar.jpg"/></button>

<div id="simpleModal" class="modal">
    <span class="closeBtn">&times;</span>
    <div class="modal-content">

            <h2>Almar Gemmel</h2>
            <img src="../images/almar.jpg">Tekst over Almar</img>

        <h3>The Wall</h3>
    </div>
</div>
<!--Einde Modal 1 -->
<!--Modal 2 -->
<button class="button2" id="modalBtn2"><img class="tigo" src="../images/tigo.jpg"/></button>

    <div id="simpleModal2" class="modal2">
        <span class="closeBtn2">&times;</span>
        <div class="modal-content2">

            <h2>Tigo Middelkoop</h2>
            <img src="../images/tigo.jpg">Tekst over Tigo</img>

            <h3>The Wall</h3>
        </div>
    </div>
<!--Einde Modal 2 -->
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

        // Get Modal Element
        var modal = document.getElementById('simpleModal');
        // Get open Modal button
        var modalBtn = document.getElementById('modalBtn');
        // Get Close button
        var closeBtn = document.getElementsByClassName('closeBtn')[0];

        // Listen for open click
        modalBtn.addEventListener('click', openModal);

        // Listen for close click
        closeBtn.addEventListener('click', closeModal);

        // Listen for outside Click
        window.addEventListener('click', clickOutside);

        // Function to open Modal
        function openModal() {
            modal.style.display = 'block';
        }

        // Function to close Modal
        function closeModal() {
            modal.style.display = 'none';
        }

        // Function to close Modal if outside
        function clickOutside(e) {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Get Modal Element
        var modal2 = document.getElementById('simpleModal2');
        // Get open Modal button
        var modalBtn2 = document.getElementById('modalBtn2');
        // Get Close button
        var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

        // Listen for open click
        modalBtn2.addEventListener('click', openModal2);

        // Listen for close click
        closeBtn2.addEventListener('click', closeModal2);

        // Listen for outside Click
        window.addEventListener('click', clickOutside2);

        // Function to open Modal
        function openModal2() {
            modal2.style.display = 'block';
        }

        // Function to close Modal
        function closeModal2() {
            modal2.style.display = 'none';
        }

        // Function to close Modal if outside
        function clickOutside2(e) {
            if (e.target == modal2) {
                modal2.style.display = 'none';
            }
        }


    </script>
</body>
</html>