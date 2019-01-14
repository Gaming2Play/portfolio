<?php

if (!isset($_COOKIE['userid'])) {
    header('Location: welkom.php');
}

require ('db.php');

$query = "SELECT userid FROM users WHERE userid = ? AND hash = ?";
$stmt = $mysqli->prepare($query) or die ('error preparing');
$stmt->bind_param('is', $userid, $hash) or die ('Error binding parameter');
$userid = (int) $_COOKIE['userid'];
$hash = $_COOKIE['hash'];
$stmt->bind_result($userid) or die ('Error binding result');
$stmt->execute() or die ('Error executing');
$fetch_success = $stmt->fetch();

if (!$fetch_success) {
    setcookie('userid', '', time() - 3600);
    setcookie('hash', '', time() - 3600);
    header("Location: inlog.php");
}