const messages = [
    "Pakka?? Ek baar aur soch lo! 🧐",
    "Galti se 'No' dab gaya kya? 😂",
    "Itna gussa? Chalo ek chocolate meri taraf se! 🍫",
    "Arey maan jao na, cute lagogi 'Yes' bolte huye! ✨",
    "Dekh lo... mummy ko bata dunga! 🏃‍♂️💨",
    "Accha thik hai, ab rulaogi kya? 😭",
    "Bas karo! Ungli dukhne lagegi, ab 'Yes' daba do! ❤️",
    "Maaf krdo na babu, ab toh 'Yes' boldo! 🙏✨", // New Line 1
    "Ab rula ke hi manogi kya? Maan jao na!🥺❤️" // New Line 2 (Last Trap)
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const buttonContainer = document.querySelector('.buttons');
    
    // Message change karo
    noButton.textContent = messages[messageIndex];

    // --- STEP-WISE GROWTH & FINAL TRAP ---
    
    // Agar index last message se kam hai
    if (messageIndex < messages.length - 1) {
        // Yes Button dhire-dhire bada hoga
        const currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentFontSize * 1.2}px`;
        
        const currentPaddingTop = parseFloat(window.getComputedStyle(yesButton).paddingTop);
        const currentPaddingLeft = parseFloat(window.getComputedStyle(yesButton).paddingLeft);
        yesButton.style.padding = `${currentPaddingTop * 1.1}px ${currentPaddingLeft * 1.1}px`;

        // No button right shift hoga
        const currentGap = parseFloat(window.getComputedStyle(buttonContainer).gap) || 20;
        buttonContainer.style.gap = `${currentGap + 25}px`;
        
        messageIndex++;
    } else {
        // LAST LINE CLICK (The Master Trap)
        // Button bina text phate poori screen cover kar lega
        yesButton.style.position = "fixed";
        yesButton.style.top = "0";
        yesButton.style.left = "0";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.zIndex = "1000";
        yesButton.style.borderRadius = "0";
        yesButton.style.display = "flex";
        yesButton.style.alignItems = "center";
        yesButton.style.justifyContent = "center";
        yesButton.style.fontSize = "4.5rem"; // Mobile par perfect bold look
        yesButton.style.margin = "0";
        
        noButton.style.display = "none"; // No button khatam!
    }
}

function handleYesClick() {
    if (window.navigator.vibrate) window.navigator.vibrate(50);
    window.location.href = "yes_page.html";
}

// Floating Hearts Animation (Keep this as is)
function createHeart() {
    const heart = document.createElement('div');
    const colors = ['#ff4d4d', '#ff4081', '#ff85a2', '#e91e63'];
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    const heartBg = document.getElementById('heart-bg');
    if (heartBg) heartBg.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);
