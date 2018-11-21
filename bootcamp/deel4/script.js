"use strict";

// Declare variables
var student = "Almar Gemmel";
var year = 2018;
var group = "MD2A";
var title = "JavaScript Bootcamp " + year;
var currentYear = (new Date()).getFullYear();
var period = getPeriod(2018, currentYear)

// Init
instruction4();
instruction5();

//Instructions

function instruction3() {
    var description = "Nadat op de link 'Click Event' is geklikt worden de header,"
        + " beschrijving en oplossing van de opdracht aangepast";
    var result = "De header en beschrijving zijn aangepast: zie hierboven";

    updateContent("Opdracht 3 - Click Event", description, result);
}

function instruction4() {
    // function instruction2 has been replaced by function instruction4
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    setValueByClassName("year", year);
    setValueByClassName("student", student);
}

function instruction5() {
    setValueByClassName("period", period);
}

function instruction6() {
    var currentYear = (new Date()).getFullYear();
    var description = "Bepaal de periode op basis van de het startjaar en het huidige jaar en voer een klein testje uit voor verschillende startjaren: vorige jaar, huidige jaar en volgende jaar";

    var result = "Huidige jaar: " + currentYear + "<br/>";
    result += "Startjaren: " + "<br/>";
    for (var i = -1; i <= 1; i++) {
        var startYear = currentYear + i;
        var period = getPeriod(startYear, currentYear);
        result += " - " + startYear + ": " + period + "<br/>";
    }

    updateContent("Opdracht 6 - Periode testen", description, result);
}

function instruction7() {
    var description = "Bepaal de dag van vandaag op drie verschillende manieren: 1)if/else, 2)switch en 3)array";
    var result = instruction7a() + "<br/>";
    result += instruction7b() + "<br/>";
    result += instruction7c() + "<br/>";
    result += "<hr/>";
    //result += "De beste manier is gebruik maken van een array!!!";
    result += "De beste manier is gebruik maken van ..... omdat ......";
    updateContent("Opdracht 7 - Dag in de week", description, result);
}

function instruction7a() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    if (dayNumber === 0) {
        day = "Zondag";
    }
    else if (dayNumber === 1) {
        day = "Maandag";
    }
    else if (dayNumber === 2) {
        day = "Dinsdag";
    }
    else if (dayNumber === 3) {
        day = "Woensdag";
    }
    else if (dayNumber === 4) {
        day = "Donderdag";
    }
    else if (dayNumber === 5) {
        day = "Vrijdag";
    }
    else if (dayNumber === 6) {
        day = "Zaterdag";
    }

    return "Door gebruik te maken van if/else weet ik dat het vandaag " + day + " is.";
}

function instruction7b() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    switch (dayNumber) {
        case 0:
            day = "Zondag";
            break;
        case 1:
            day = "Maandag";
            break;
        case 2:
            day = "Dinsdag";
            break;
        case 3:
            day = "Woensdag";
            break;
        case 4:
            day = "Donderdag";
            break;
        case 5:
            day = "Vrijdag";
            break;
        case 6:
            day = "Zaterdag";
            break;
        default:
            day = "Geen dag";
    }

    return "Ook wanneer ik switch gebruik weet ik dat het vandaag " + day + " is.";
}

function instruction7c() {
    var dayNumber = (new Date()).getDay();
    var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
    var day = days[dayNumber];
    return "En tenslotte door gebruik te maken van een array weet ik ook dat het vandaag " + day + " is.";
}

function instruction8() {
    var description = "Toon een ongesorteerde array met namen van kleuren. Toon vervolgens de oplopend (A-Z) gesorteerde array en de aflopend (Z-A) gesorteerde array";
    var colors = ["Rood", "Geel", "Blauw", "Groen", "Zwart"];
    var result = "Kleuren: " + colors + "<br />";
    var sorted = colors.sort();
    result += "Gesorteerd (A-Z): " + sorted + "<br />";
    var sortedReverse = colors.reverse();
    result += "Gesorteerd (Z-A): " + sortedReverse + "<br />";
    updateContent("Opdracht 8 - Array sorteren", description, result);
}

function instruction9() {
    var description = "Voeg elementen toe: image en button.";
    updateContent("Opdracht 9 - Elementen toevoegen", description, "");

    var element = document.getElementById("instructionResult");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "100px";
    element.appendChild(img); //add to the DOM

    // Create the left button, set a property and add an event listener
    var btnLeft = document.createElement("button");
    btnLeft.innerText = "Links";
    btnLeft.addEventListener("click", function () { alert("Naar links"); });

    // Create the right button, set a property and add an event listener
    var btnRight = document.createElement("button");
    btnRight.innerText = "Rechts";
    btnRight.addEventListener("click", function () { alert("Naar rechts"); });

    // Create a paragraph (<p>) and add the buttons to it
    var p = document.createElement("p");
    p.appendChild(btnLeft);
    p.appendChild(btnRight);
    element.appendChild(p); //add to the DOM
}

function instruction10() {
    var source = "Mediacollege Amsterdam";
    var result = "De string waar de bewerkingen op gedaan worden is: " + source + "<br/>";
    result += "De lengte van de string is: " + source.length + "<br/>";
    source = " " + source.substr(1);
    result += "De eerste letter is vervangen door een spatie: " + source + "<br/>";
    result += "De lengte van de string is nog steeds: " + source.length + "<br/>";
    source = source.trim();
    result += "Alle spaties aan het begin en eind zijn nu verwijderd: " + source + "<br/>";
    result += "De lengte van de string is nu: " + source.length + "<br/>";
    var words = source.split(" ");
    result += "Het aantal woorden is: " + words.length + "<br/>";
    result += "Het eerste woord is: " + words[0] + "<br/>";
    result += "Het tweede woord is: " + words[1] + "<br/>";
    var description = "String bewerkingen.";
    updateContent("Opdracht 10 - Het object String", description, result);
}

function instruction11() {
    var result;
    try {
        alert(sum(10, 20)); // Sum is not defined yet
    }
    catch (ex) {
        result = ex + "<br/>";
    }
    finally {
        result += "finally block executed";
    }

    var description = "Fout netjes afhandelen.";
    updateContent("Opdracht 11 - Foutafhandeling", description, result);
}

// Functions for part 4
// ====================
var part4 = {
    // Tip: lees eerst https://www.w3schools.com/js/js_objects.asp
    instruction1: function () {
        // Omschrijving van de opdracht
        var description = "Natuurlijk kun je alles opslaan in een string variable maar dat is niet handig. "
            + "Stel dat je van een student meerdere gegevens wilt opslaan en je kunt de gegevens zo groeperen dat ze bij elkaar horen en makkelijk zijn te benaderen. "
            + "Je gaat dan een object van een student aanmaken. Maak daarom een object van 'student' aan. "
            + "Dit object heeft de volgende eigenschappen:</br>";
        var properties = ["name = Yosef East", "group = MD2", "lessons = FRO,BAP en PROJ"];
        description += getBulletListFromArray(properties);
        description += addLine("Vervolgens ga je dit object gebruiken en stelt hiermee een string samen die er als volgt uitziet:</br>");
        description += addLine("Student Yosef East zit in groep MD2 en zijn eerste les is FRO");

        // Zorg ervoor dat de opdracht goed wordt uitgevoerd en dat de content wordt bijgewerkt.
        var result = "";

        updateContent("Opdracht 12 - Object aanmaken", description, result);
    },

    //Tip: lees eerst https://www.w3schools.com/js/js_json_syntax.asp
    instruction2: function () {
        // Omschrijving van de opdracht
        var description = "<p>" + "JSON is een formaat dat heel veel gebruikt wordt in de wereld van webontwikkeling. "
            + "Met name bij het gebruik van een webAPI. "
            + "Dit betekent dat je vaak, en zeker wanneer je zelf web-API's gaat maken, "
            + "data moet omzetten (converteren) naar JSON." + "</p>";
        description += "<h4>Array</h4>";

        // Array met namen van de studenten waarbij het eerste item de kolomnamen/eigenschappen bevat
        var studentsArray = [
            "name,group",
            "Yosef East,MD2A",
            "Madison Dillard,MD2A",
            "Thiago Sherman,MD2A",
            "Iga Mcgee,MD2A",
            "Amar Anthony,MD2A",
            "Ilyas Suarez,MD2B",
            "Jamel Vu,MD2B",
            "Maja Garcia,MD2B",
            "Elyas Galloway,MD2B",
            "Duncan Bull,MD2B"
        ]

        var arrayPrint = "";
        for (var i = 0; i < studentsArray.length; i++) {
            arrayPrint += addLine(studentsArray[i]);
        }

        description += arrayPrint;
        description += "<h4>JSON-formaat</h4>";
        description += '[{"name":"Yosef East","group":"MD2A"}, {"name":"Madison Dillard","group":"MD2A"}, {"name":"Thiago Sherman","group":"MD2A"}, {"name":"Iga Mcgee","group":"MD2A"}, {"name":"Amar Anthony","group":"MD2A"}, {"name":"Ilyas Suarez","group":"MD2B"}, {"name":"Jamel Vu","group":"MD2B"}, {"name":"Maja Garcia","group":"MD2B"}, {"name":"Elyas Galloway","group":"MD2B"}, {"name":"Duncan Bull","group":"MD2B"}]';

        // Zorg ervoor dat de opdracht goed wordt uitgevoerd en dat de content wordt bijgewerkt.
        var result = "";

        updateContent("Opdracht 13 - Converteer naar JSON", description, result);
    },

    // Tip: lees eerst https://www.w3schools.com/xml/ajax_intro.asp
    instruction3: function () {
        // Omschrijving van de opdracht
        var description = "<p>" + "Er zijn veel publieke webAPI's beschikbaar waar iedereen gebruik van kan maken. "
            + "Voorbeelden hiervan zijn: postcodes, hoofdsteden, opkomst van de zon, etc.... "
            + "Jij gaat de namen ophalen van de astronauten die nu in de ruimte zijn en maakt daar een net lijstje van." + "</p>";
        var result = "Snapte ik niet";
        // De URL van de webAPI
        var url = "http://api.open-notify.org/astros.json";

        // Zorg ervoor dat de opdracht goed wordt uitgevoerd en dat de content wordt bijgewerkt.
        updateContent("Opdracht 14 - Publieke webAPI gebruiken", description, result);
    },

    instruction4: function () {
        // Omschrijving van de opdracht
        var description = "Hoe leuk is het nu om een webAPI aan te roepen die jezelf gemaakt hebt. "
            + "Voor jouw heb ik er nu één gemaakt:"
            + "<p>" + "http://gert-rikkers.nl/api/students" + "</p>"
            + "Later ga je deze misschien wel eens zelf maken. "
            + "Het is een webAPI die alle studenten uit de tweede klas van MD teruggeeft. "
            + "Jij gaat deze webAPI aanroepen en maakt daar een net lijstje van.";
        var result = "Snapte ik niet";    
        // De URL van de webAPI
        var url = "http://gert-rikkers.nl/api/students";

        // Zorg ervoor dat de opdracht goed wordt uitgevoerd en dat de content wordt bijgewerkt.
        updateContent("Opdracht 15 - Eigen webAPI gebruiken", description, result);
    },

}

// Sub functions

// Example for documentation

var a = exampleFunction(5, 4);

/**
 * This is an example of a function.
 * @param {number} a - this is a 1st number value.
 * @param {number} b - this is a 2nd number value.
 * @returns {string} Hello
 */
function exampleFunction(a, b) {
    return "Hello " + (a * b);
}

/**
 * Sets the innerText property with a given value for all elements with a given class name.
 * @param {string} className - the innerText property of all elements with this class name will be changed.
 * @param {number} value - the value which will be used to update de elements.
 */
function setValueByClassName(className, value) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = value;
    }
}

// Instruction 4
function updateContent(header, description, result) {
    document.getElementById("instructionHeader").innerText = header;
    document.getElementById("instructionDescription").innerHTML = description;
    document.getElementById("instructionResult").innerHTML = result;
}

// Instruction 5
function getPeriod(startYear, currentYear) {
    var result = startYear;
    if (currentYear > startYear) {
        result += "-" + currentYear;
    }
    return result;
}

function addLine(line) {
    return line + "</br>";
}

function getBulletListFromArray(array) {
    var list = "<ul>";
    for (var i = 0; i < array.length; i++) {
        list += "<li>" + array[i] + "</li>";
    }
    list += "</ul>";
    return list;
}
