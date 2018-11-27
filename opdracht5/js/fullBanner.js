// de classes invoeren in het javascript//
let wat       = document.querySelector('.fb_wat');
let almarmg   = document.querySelector('.fb_almarmg');
let weet      = document.querySelector('.fb_weet');
let ballon    = document.querySelector('.fb_ballon');
let waggel    = document.querySelector('.fb_waggel');
let laag1     = document.querySelector('.fb_laag1');
let tut       = document.querySelector('.fb_tut');
let html       = document.querySelector('.fb_html');
let css       = document.querySelector('.fb_css');
let js       = document.querySelector('.fb_js');





// de classes verwijderen uit de css//
const animeren = () => {
    setTimeout( () => {wat.classList.remove('fb--uit')}, 1);
    setTimeout( () => {almarmg.classList.remove('fb--uit')}, 300);
    setTimeout( () => {weet.classList.remove('fb--uit')}, 600);
    setTimeout( () => {ballon.classList.remove('fb--uit')}, 900);
    setTimeout( () => {waggel.classList.add('fb--waggel')}, 1000);
    //over naar laag 2//
    setTimeout( () => {laag1.classList.add('fb--uit')}, 1800);
    setTimeout( () => {tut.classList.add('fb--uit')}, 2000);

    //logos//
    setTimeout( () => {html.classList.remove('fb--uit')}, 2300);
    setTimeout( () => {css.classList.remove('fb--uit')}, 2600);
    setTimeout( () => {js.classList.remove('fb--uit')}, 2900);

    //terug naar laag//
    setTimeout( () => terugzetten1(), 3500);
    setTimeout( () => {laag1.classList.remove('fb--uit')}, 4000);
    setTimeout( () => terugzetten2(), 4300);



}

const terugzetten1 = () => {
    wat.classList.add('fb--uit')
    almarmg.classList.add('fb--uit')
    weet.classList.add('fb--uit')
    ballon.classList.add('fb--uit')

    waggel.classList.remove('fb--waggel')

}
const terugzetten2 = () =>{
    tut.classList.remove('fb--uit')

    html.classList.add('fb--uit')
    css.classList.add('fb--uit')
    js.classList.add('fb--uit')


}
animeren();

setInterval( () => animeren(), 4000)

//banner linken//
const gaNaarPagina = () => window.open('http://www.almarmg.nl', '_blank');
document.querySelector('.fb').addEventListener('click', gaNaarPagina);
