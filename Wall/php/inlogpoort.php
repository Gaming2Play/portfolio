<?php

require ('db.php');

if (!isset($_POST['submit_login'])) {
    header("Location: inlog.php");
}

if (empty($_POST['username']) OR empty($_POST['password'])) {
    echo 'Je bent iets vergeten in te vullen.';
}

$query = "SELECT userid, hash, active FROM users WHERE username = ? AND password = ?";
$stmt = $mysqli->prepare($query) or die ('error preparing');
$stmt->bind_param('ss', $username, $password) or die ('Error binding parameter');
$username = $_POST['username'];
$password = $_POST['password'];
$password = hash('sha512',$password);
$stmt->bind_result($userid,$hash, $active);
$stmt->execute() or die ('Error executing');
$stmt->fetch();
$stmt->close();

if ($active == 0) {
    echo 'Je account in nog niet geactiveerd.';
}

setcookie('userid',$userid, time() + (3600 * 24 * 7));
setcookie('hash',$hash, time() + (3600 * 24 * 7));

header("Location: welkom.php");
