// Preparo gli elementi
// Date
const theDays = document.getElementById("days");
const theMonths = document.getElementById("months");
const theYears = document.getElementById("years");

// Clock
const theHours = document.getElementById("hours");
const theMinutes = document.getElementById("minutes");
const theSeconds = document.getElementById("seconds");
const titleText = document.querySelector(".mess");

// Cronometer
const theDaysLeft = document.getElementById("days-crono");
const theHoursLeft = document.getElementById("hours-crono");
const theMinutesLeft = document.getElementById("minutes-crono");
const theSecondsLeft = document.getElementById("seconds-crono");

// // Creare un orologio sfruttando le timing function di JS

timeNow()

/********************************************
 *                                          *
 *                 FUNCTIONS                *
********************************************/

// Creo una variabile che conterrà l'intervallo della funzione e la ripeterà all'infinito o finchè non la fermo
const theClock = setInterval(timeNow, 1000);

// Creo una funzione che mi faccia da OROLOGIO, mi prende secondi, minuti, ora e giorno corrente.
function timeNow() {
    const now = new Date(); //Creo una nuova Date a partire da ora

    const seconds = now.getSeconds() // Prendi i secondi
    const minutes = now.getMinutes() // Prendi i minuti
    const hours = now.getHours() //Prendi le ore
    // Data
    const days = now.getDate() // Prendi i giorni
    const months = now.getMonth() // Prendi i mesi
    const years = now.getFullYear() // Prendi gli anni

    // Scrivili nel posto delegato dell'HTML- OROLOGIO
    theSeconds.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    theMinutes.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    theHours.innerHTML = (hours < 10) ? "0" + hours : hours;
    // Scrivi la data
    theDays.innerHTML = "0" + days;
    theMonths.innerHTML = "0" + (months + 1);
    theYears.innerHTML = years;
}
// // CRONOMETRO
// Prendi la data a cui vuoi arrivare
const countDownDate = new Date("Feb 6, 2023. 09:30:00").getTime();

// Creo una variabile che conterrà l'intervallo della funzione e la ripeterà all'infinito o finchè non la fermo
const counter = setInterval(countdownCrono, 1000);
// Funzione per cronometro
function countdownCrono() {
    // Prendi l'ora attuale
    const now = new Date().getTime();
    // Intervallo= La data a cui vuoi arrivare - ora
    const distanceTime = countDownDate - now;
    // Calcoli 
    const daysLeft = Math.floor(distanceTime / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distanceTime % (1000 * 60)) / 1000);
    // Scrivili nel HTML
    theDaysLeft.innerHTML = `${daysLeft}`;
    theHoursLeft.innerHTML = `${hoursLeft}`;
    theMinutesLeft.innerHTML = `${minutesLeft}`;
    theSecondsLeft.innerHTML = `${secondsLeft}`;

    // Quando raggiungi l'obiettivo fermati.
    if (distanceTime < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TIK TOK!";
    }
};








