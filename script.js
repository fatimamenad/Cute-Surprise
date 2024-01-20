document.addEventListener("DOMContentLoaded", function() {
    const revealButton = document.getElementById("revealButton");
    const surpriseText = document.getElementById("surpriseText");

    const surprises = [
        "I love you more than words can express.",
        "You make my heart skip a beat.",
        "Every moment with you is special.",
        "You're my favorite person in the world.",
        "I appreciate all the little things you do.",
        " you brought light into my life.",
    ];

    revealButton.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * surprises.length);
        const randomSurprise = surprises[randomIndex];
        surpriseText.textContent = randomSurprise;
    });
});