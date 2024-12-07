// Get elements
const giftWrap = document.getElementById("giftWrap");
const letterContainer = document.getElementById("letterContainer");
const backgroundMusic = document.getElementById("backgroundMusic");

// Add swipe or click interaction
giftWrap.addEventListener("click", unwrapGift);
giftWrap.addEventListener("touchstart", unwrapGift);

function unwrapGift() {
    // Remove the gift wrap
    giftWrap.classList.add("hidden");

    // Show the letter
    letterContainer.classList.remove("hidden");

    // Play music
    backgroundMusic.play();
}
