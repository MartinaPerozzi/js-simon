// Preparo gli elementi
const theYears = document.getElementById("years");
const theMonths = document.getElementById("month");
const theDays = document.getElementById("days");
const theHours = document.getElementById("hours");
const theMinutes = document.getElementById("minutes");
const theSeconds = document.getElementById("seconds");
const titleText = document.querySelector(".mess");
// Cronometer
const theDaysLess = document.getElementById("days-crono");
const theHoursLess = document.getElementById("hours-crono");
const theMinutesLess = document.getElementById("minutes-crono");
const theSecondsLess = document.getElementById("seconds-crono");

// // Creare un orologio sfruttando le timing function di JS

timeNow()
/********************************************
 *                                          *
 *                 FUNCTIONS                *
********************************************/

// Creo una variabile che conterrà l'intervallo della funzione e la ripeterà all'infinito o finchè non la fermo
const theClock = setInterval(timeNow, 1000);

// Creo una funzione che mi faccia da orologio, mi prende secondi, minuti, ora e giorno corrente.
function timeNow() {
    const now = new Date(); //Creo una nuova Date a partire da ora

    const seconds = now.getSeconds() // Prendi i secondi
    const minutes = now.getMinutes() // Prendi i minuti
    const hours = now.getHours() //Prendi le ore
    const days = now.getDay() // Prendi i giorni

    // Scrivili nel posto delegato dell'HTML
    theSeconds.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    theMinutes.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    theHours.innerHTML = (hours < 10) ? "0" + hours : hours;
    theDays.innerHTML = (days < 10) ? "0" + days : days;
    // CRONOMETRO
    let totalSeconds = 100000;
    const cronometerTime = setInterval(passedTime, 1000);

    const tomorrow = new Date("2023-02-04 09:30");
    console.log("tomorrow: " + tomorrow.getTime());

    let timeLeft = tomorrow - now;

    function passedTime() {
        ++totalSeconds;

        const seconds = parseInt(totalSeconds % 60);
        const minutes = parseInt((totalSeconds / 60) % 60);
        const hours = parseInt((totalSeconds / 60 / 60) % 24);
        const days = parseInt((totalSeconds / 60 / 60 / 24));

        theSecondsLess.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
        theMinutesLess.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
        theHoursLess.innerHTML = (hours < 10) ? "0" + hours : hours;
        theDaysLess.innerHTML = (days < 10) ? "0" + days : days;

    }
}
// Funzione per cronometro







