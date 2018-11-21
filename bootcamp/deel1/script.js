//"use strict";
var vak = document.getElementById("titel");
var opdracht = document.getElementById("opdracht");
var informatie = document.getElementById("text");
var naam = document.getElementById("naam");
var klas = document.getElementById("klas");
var copyright = document.getElementById("copy");

var hetVak = "FRO";
var deOpdracht = "opdracht1";
var deInformate = "informatie tekst enzo";
var mijnNaam = "Almar Gemmel";
var mijnKlas = "MD2A";
var Copyright = " copyright 2018 | Almar Gemmel";


function verander(){
    vak.innerHTML = hetVak;
    opdracht.innerHTML = deOpdracht;
    informatie.innerHTML = deInformate;
    naam.innerHTML = mijnNaam;
    klas.innerHTML = mijnKlas;
    copyright.innerHTML = Copyright;

}

