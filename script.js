document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const targetDate = new Date("March 12, 2025 10:15:00").getTime();
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            document.getElementById("days").textContent = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
            document.getElementById("hours").textContent = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            document.getElementById("minutes").textContent = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            document.getElementById("seconds").textContent = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');
        } else {
            document.getElementById("countdown").innerHTML = "00 : 00 : 00 : 00";
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
