// Get elements
const giftWrap = document.getElementById("giftWrap");
const letterContainer = document.getElementById("letterContainer");
const backgroundMusic = document.getElementById("backgroundMusic");

// Add swipe or click interaction
giftWrap.addEventListener("click", unwrapGift);
giftWrap.addEventListener("touchstart", unwrapGift);

function unwrapGift() {
    // Hide the gift wrap
    giftWrap.style.opacity = "0";
    setTimeout(() => {
        giftWrap.style.display = "none"; // Ensure it's fully hidden after fade-out
    }, 500);

    // Show the letter
    letterContainer.classList.remove("hidden");

    // Play background music
    backgroundMusic.play();
}
