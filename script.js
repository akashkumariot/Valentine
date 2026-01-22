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
    
    // Agar last message nahi aaya hai, tabhi index badhao
    if (messageIndex < messages.length - 1) {
        messageIndex++;
    }
    // Agar last message aa gaya hai, toh wahi rahega, index wapas 0 nahi hoga
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
    window.navigator.vibrate(50);
    window.location.href = "yes_page.html";
}

// Floating Hearts Logic
function createHeart() {
    const heart = document.createElement('div');
    const colors = ['#ff4d4d', '#ff4081', '#ff85a2', '#e91e63']; // Romantic colors
    
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    
    // Random styling
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    const heartBg = document.getElementById('heart-bg');
    if (heartBg) {
        heartBg.appendChild(heart);
    }
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start hearts animation
setInterval(createHeart, 300);