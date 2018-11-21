const myImage = document.getElementById('myImage');
const thumbnailHolder = document.getElementById('thumbnailHolder');
const text = document.getElementById('text')
var image_names = ["brooklyn.jpg",
  "centralpark.jpg",
  "disney.jpg",
  "domtoren.jpg",
  "eiffel.jpg",
  "euromast.jpg",
  "madurodam.jpg",
  "nemo.jpg",
  "timesquare.jpg",
  "yankees.jpg"
];

var text_name = ["Brooklyn Bridge", "Central Park", "Disneyland Parijs", "Domtoren", "Eiffeltoren", "Euromast", "Madurodam", "Nemo", "Time Square", "Yankees Stadion"]

for (let teller  = 0; teller <10; teller++){
let thumb = new Image();
thumb.src = "thumbnails/" + image_names[teller];
thumbnailHolder.appendChild(thumb);
thumb.className = "thumb";
thumb.teller = teller;
thumb.addEventListener('click',()=>{
  myImage.src = "images/" + image_names[thumb.teller];
  text.innerHTML = text_name[thumb.teller];

})
}
