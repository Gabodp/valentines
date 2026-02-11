// No button messages to cycle through
const noMessages = [
    "No",
    "Estás segura?",
    "¿Realmente segura?",
    "Dale te doy otra oportunidad!",
    "Vamos...",
    "Por favor? 🥺",
    "No seas mala!",
    "Ya di que si!",
    "Lloro",
    "Ultima oportunidad!"
];

let noClickCount = 0;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Initial sizes
let yesBtnSize = 100;
let noBtnSize = 100;

noBtn.addEventListener('click', function () {
    // Increase click count
    noClickCount++;

    // Change the button text
    const messageIndex = Math.min(noClickCount, noMessages.length - 1);
    noBtn.textContent = noMessages[messageIndex];

    // Change dino image based on click count (every 2 clicks)
    const dinoImg = document.querySelector('.dino-gif');
    if (noClickCount >= 6) {
        dinoImg.src = 'dino-sad3.png'; // Very sad (clicks 6+)
    } else if (noClickCount >= 4) {
        dinoImg.src = 'dino-sad2.png'; // Sad (clicks 4-5)
    } else if (noClickCount >= 2) {
        dinoImg.src = 'dino-sad1.png'; // Slightly sad (clicks 2-3)
    }

    // Increase Yes button size by 15%
    yesBtnSize = Math.min(yesBtnSize * 1.15, 300); // Maximum 300% of original

    // Apply new size to Yes button only
    yesBtn.style.transform = `scale(${yesBtnSize / 100})`;

    // Add a little shake animation to No button
    noBtn.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noBtn.style.animation = '';
    }, 500);
});

yesBtn.addEventListener('click', function () {
    // Replace the entire card with a success message
    const card = document.querySelector('.card');
    card.innerHTML = `
        <div class="gif-container">
            <img src="dino.png" alt="Happy dino" class="dino-gif">
        </div>
        <h1 class="question">Yay! 🎉💕</h1>
        <p style="font-size: 1.3rem; color: #d63384; margin-top: 20px;">
            Ya sabía que dirías si! 💝
        </p>
    `;

    // Add confetti effect
    createConfetti();
});

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0) scale(${noBtnSize / 100}); }
        25% { transform: translateX(-10px) scale(${noBtnSize / 100}); }
        75% { transform: translateX(10px) scale(${noBtnSize / 100}); }
    }
`;
document.head.appendChild(style);

// Simple confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#ffc0cb', '#ff69b4', '#ff1493'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';

        document.body.appendChild(confetti);

        // Animate confetti falling
        const duration = Math.random() * 3 + 2;
        const xMovement = (Math.random() - 0.5) * 200;

        confetti.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) translateX(${xMovement}px) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}
