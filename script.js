// Get elements
const giftWrap = document.getElementById("giftWrap");
const letterContainer = document.getElementById("letterContainer");
const backgroundMusic = document.getElementById("backgroundMusic");
const lace = document.getElementById("lace");

// Variables for swipe detection
let startX = 0;
let endX = 0;

// Ensure music plays after user interaction
backgroundMusic.loop = true;
backgroundMusic.load();

// Start swipe detection for touch devices
lace.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

lace.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
});

lace.addEventListener("touchend", () => {
    if (endX > startX + 50) {
        unwrapGift(); // Detect right swipe
    }
});

// Click for non-touch devices
lace.addEventListener("click", unwrapGift);

function unwrapGift() {
    // Unwrap animation
    lace.style.transition = "transform 1s ease-out";
    lace.style.transform = "translateX(500px) rotate(360deg)";
    setTimeout(() => {
        giftWrap.style.opacity = "0";
        setTimeout(() => {
            giftWrap.style.display = "none";
            letterContainer.classList.remove("hidden"); // Show letter
        }, 500);
    }, 1000);

    // Play background music with a fallback for mobile
    playBackgroundMusic();
}

// Play music function
function playBackgroundMusic() {
    const playPromise = backgroundMusic.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("Music is playing!");
            })
            .catch((error) => {
                console.error("Music playback failed:", error);
            });
    }
}
