// Bestimmen wir die aktiven Elemente auf der Seite
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// Berechnungen anstellen
const currentYear = new Date().getFullYear(); // 2020
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Einstellen das Jahr pro Seite ein
year.innerText = currentYear + 1;

function updateCounter() {
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    // Übermittlung in Tagen
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    // Gesamtstunden, dann der Rest  durch 24 (Umrechnung in Tage), wir erhalten 8 Stunden
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    // Die Gesamtzahl der Minuten, dann der Rest der Umrechnung in Stunden, verbleibende Minuten
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    // Sekunden in die Gesamtzahl, verbleibenden Sekunden in Minuten umrechnen, die verbleibenden Sekunden
    const secondsLeft = Math.floor(diff / 1000) % 60;

    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

// Berechnungen einmal pro Sekunde durchführen (jede Sekunde)
setInterval(updateCounter, 1000);

setTimeout(function() {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);