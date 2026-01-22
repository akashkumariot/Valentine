const messages = [
    "Pakka?? Ek baar aur soch lo! 🧐",
    "Galti se 'No' dab gaya kya? 😂",
    "Itna gussa? Chalo ek chocolate meri taraf se! 🍫",
    "Arey maan jao na, cute lagogi 'Yes' bolte huye! ✨",
    "Dekh lo... mummy ko bata dunga! 🏃‍♂️💨",
    "Accha thik hai, ab rulaogi kya? 😭",
    "Bas karo! Ungli dukhne lagegi, ab 'Yes' daba do! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    
    if (messageIndex < messages.length - 1) {
        messageIndex++;
    }
    
    // Growth Logic for Mobile
    const multiplier = [1.5, 3, 7, 12, 40]; 
    const currentScale = multiplier[messageIndex - 1] || 1;

    yesButton.style.transition = "all 0.5s ease-out";
    yesButton.style.zIndex = "999";

    if (messageIndex < 6) {
        // Shuruat mein sirf button bada hoga
        yesButton.style.transform = `scale(${currentScale})`;
    } else {
        // Last step (Mummy wala ya Ungli dukhne wala message)
        // Button ko screen ke center mein fix karke poori screen cover kar lega
        yesButton.style.position = "fixed";
        yesButton.style.top = "50%";
        yesButton.style.left = "50%";
        yesButton.style.transform = "translate(-50%, -50%)"; 
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "3rem"; // Text size fix kar diya taaki sirf 'Y' na dikhe
        yesButton.style.display = "flex";
        yesButton.style.alignItems = "center";
        yesButton.style.justifyContent = "center";
        yesButton.style.borderRadius = "0";
    }
}

function handleYesClick() {
    // Vibration sirf mobile par kaam karega
    if (window.navigator.vibrate) {
        window.navigator.vibrate(50);
    }
    window.location.href = "yes_page.html";
}

// Floating Hearts Logic
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
    if (heartBg) {
        heartBg.appendChild(heart);
    }
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
