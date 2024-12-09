/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

let draaiorgel = document.querySelector('a:nth-of-type(1)')
// Stap 1: querySelector
// let bibberLink = document.querySelector...

// Stap 2: addEventListener
// bibberLink.addEventListener...
draaiorgel.addEventListener('dblclick', draaien)
// hier heb ik dubbelklik gebruikt

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...
function draaien() {

  draaiorgel.classList.toggle('turn')
}

// tweede
let bibberen = document.querySelector('a:nth-of-type(2)')

bibberen.addEventListener('click', bibs)

function bibs() {
  bibberen.classList.toggle('bibberen')
}

// derde
let plat = document.querySelector('a:nth-of-type(3)')

plat.addEventListener('click', platter)

function platter() {
  plat.classList.toggle('platmaken')
}

// vierde
let regenboog = document.querySelector('a:nth-of-type(4)')

regenboog.addEventListener('click', regen)

function regen() {
  regenboog.classList.toggle('regenboog')
  console.log(regenboog)
}

// vijfde

let toets = document.querySelector('a:nth-of-type(5)')

document.addEventListener('keydown', lol, true)

// hier een keyfunctie uitgevoerd
function lol(e) {
  
	if (e.key ===  '4') {
    regenboog.classList.toggle('regenboog')
		
	} else if (e.key === '5') {
    plat.classList.toggle('platmaken')
  }
}


