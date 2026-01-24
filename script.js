if (performance.navigation.type === 1) {
    window.location.href = "index.html";
}

const messages = [
    "Pakka?? Ek baar aur soch lo! 🧐",
    "Galti se 'No' dab gaya kya? 😂",
    "Itna gussa? Chalo ek chocolate meri taraf se! 🍫",
    "Arey maan jao na, cute lagogi 'Yes' bolte huye! ✨",
    "Dekh lo... mummy ko bata dunga! 🏃‍♂️💨",
    "Accha thik hai, ab rulaogi kya? 😭",
    "Bas karo! Ungli dukhne lagegi, ab 'Yes' daba do! ❤️",
    "Maaf krdo na babu, ab toh 'Yes' boldo! 🙏✨",
    "Ab rula ke hi manogi kya? Maan jao na!🥺❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const buttonContainer = document.querySelector('.buttons');
    
    noButton.textContent = messages[messageIndex];

    if (messageIndex < messages.length - 1) {
        const currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentFontSize * 1.2}px`;
        yesButton.style.padding = "15px 35px";
        
        const currentGap = parseFloat(window.getComputedStyle(buttonContainer).gap) || 30;
        buttonContainer.style.gap = `${currentGap + 20}px`;
        
        messageIndex++;
    } else {
        document.body.style.overflow = "hidden";
        yesButton.style.position = "fixed";
        yesButton.style.top = "50%";
        yesButton.style.left = "50%";
        yesButton.style.transform = "translate(-50%, -50%)";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.zIndex = "9999";
        yesButton.style.borderRadius = "0";
        yesButton.style.display = "flex";
        yesButton.style.alignItems = "center";
        yesButton.style.justifyContent = "center";
        yesButton.style.fontSize = "5rem"; 
        noButton.style.display = "none";
    }
}

function handleYesClick() {
    if (window.navigator.vibrate) window.navigator.vibrate(50);
    // Seedha redirect, koi music trigger nahi
    window.location.href = "yes_page.html";
}

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