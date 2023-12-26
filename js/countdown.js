const storeOpening = new Date("apr 12, 2023 00:00:00");
setCountdown(storeOpening);
setInterval(function() {
    setCountdown(storeOpening);
}, 1000)
function setCountdown(countingDownTime) {
    let now = new Date();
    let timeRemaining = countingDownTime - now;
    let seconds = Math.floor(timeRemaining / 1000);
    let minutes = Math.floor(timeRemaining / (1000 * 60));
    let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    let daysToDisplay = days;
    let hoursToDisplay = hours - (days * 24);
    let minutesToDisplay = minutes - (hours * 60);
    let secondsToDisplay = seconds - (minutes * 60);

    const daysE1 = document.getElementById("days");
    const hoursE1 = document.getElementById("hours");
    const minutesE1 = document.getElementById("minutes");
    const secondsE1 = document.getElementById("seconds");

    daysE1.textContent = daysToDisplay;
    hoursE1.textContent = hoursToDisplay;
    minutesE1.textContent = minutesToDisplay;
    secondsE1.textContent = secondsToDisplay;
}