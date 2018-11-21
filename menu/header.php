<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Responsive menu met submenu en animatie en CSS Grid</title>
</head>
<body>
<nav id="nav">
    <input type="checkbox" id="menu">
    <label for="menu" class="Toggle">
        <i class="fas fa-sliders-h"></i>
        <i class="fas fa-eye-slash"></i>
    </label>
    <ul>
        <li><a href="#">Home</a></li>
        <li class="submenu"><a href="#">Bedrijf</a>
            <ul>
                <li><a href="#">Hoe het hier gaat</a></li>
                <li><a href="#">Tijden van de opening</a></li>
                <li><a href="#">Plaats</a></li>
            </ul>
        </li>
        <li><a href="#">De Plaats</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
