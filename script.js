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

    // Fixed Growth Steps (Symmetry ke liye)
    // Har click par size kitne guna badhega, uska fixed ratio:
    const sizeMultipliers = [1.2, 1.5, 2.1, 2.8, 3.5, 4.2, 5.0, 6.5];

    if (messageIndex < messages.length - 1) {
        const scale = sizeMultipliers[messageIndex];
        
        // Base sizes (Inhe aap apne CSS ke hisab se adjust kar sakte hain)
        const baseFontSize = 1.2; // rem
        const basePaddingV = 10; // px
        const basePaddingH = 20; // px

        // Dimensions update (Particullar Dimension Logic)
        yesButton.style.fontSize = `${baseFontSize * scale}rem`;
        yesButton.style.padding = `${basePaddingV * scale}px ${basePaddingH * scale}px`;

        // No button ko smooth right push dene ke liye gap
        buttonContainer.style.gap = `${20 + (messageIndex * 15)}px`;
        
        messageIndex++;
    } else {
        // LAST LINE CLICK - Perfection Trap
        yesButton.style.position = "fixed";
        yesButton.style.top = "50%";
        yesButton.style.left = "50%";
        yesButton.style.transform = "translate(-50%, -50%)";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.zIndex = "1000";
        yesButton.style.borderRadius = "0";
        yesButton.style.display = "flex";
        yesButton.style.alignItems = "center";
        yesButton.style.justifyContent = "center";
        yesButton.style.fontSize = "5rem"; 
        yesButton.style.margin = "0";
        
        noButton.style.display = "none";
    }
}

function handleYesClick() {
    if (window.navigator.vibrate) {
        window.navigator.vibrate(50);
    }
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
    if (heartBg) {
        heartBg.appendChild(heart);
    }
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
