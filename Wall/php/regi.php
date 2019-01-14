<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Registratie - The Wall</title>
    <link rel="stylesheet" href="../css/regi.css">
      <link rel="stylesheet" href="../css/navbalk.css">
  </head>
  <body>
  <div class="topnav" id="myTopnav">
      <a href="../index.php" class="active">Home</a>
      <a href="inlog.php">inloggen/registreren</a>
      <a href="about.php">About</a>
      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
  </div>
    <div class="login-page">
      <div class="form">
        <form action="verwerk_regi.php" method="post" class="register-form">
          <input type="text" required placeholder="username"/>
          <input type="text" required placeholder="email address"/>
            <input type="password" required placeholder="password"/>
            <input type="password" required placeholder="repeat password"/>
          <button>create</button>

          <p class="message">Already registered? <a href="inlog.php">Sign In</a></p>
        </form>
        <form action="inlogpoort.php" method="post" class="login-form">
          <input type="text" required placeholder="username"/>
          <input type="password" required placeholder="password"/>
          <button>login</button>
          <p class="message">Not registered? <a href="regi.php">Create an account</a></p>
        </form>
      </div>
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
    </script>
  </body>
</html>
