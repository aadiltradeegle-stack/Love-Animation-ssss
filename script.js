// Create animated particles
function createParticles() {
    const container = document.getElementById('particles');
    const colors = [
        'rgba(255, 105, 180, 0.7)',
        'rgba(255, 20, 147, 0.7)',
        'rgba(240, 147, 251, 0.7)',
        'rgba(255, 255, 255, 0.8)'
    ];
    
    for (let i = 0; i < 70; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 10 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
        particle.style.animationDelay = (Math.random() * 15) + 's';
        container.appendChild(particle);
    }
}

// SVG Heart
function getSVGHeart() {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FF1493;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#FF69B4;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFB6C1;stop-opacity:1" />
            </linearGradient>
        </defs>
        <path d="M50 90 C25 75, 10 60, 10 45 C10 32, 20 22, 30 22 C37 22, 43 27, 50 33 C57 27, 63 22, 70 22 C80 22, 90 32, 90 45 C90 60, 75 75, 50 90 Z" 
            fill="url(#heartGrad)" />
    </svg>`;
}

// Messages
const messages = [
    'I Love You 💕',
    'You\'re My Everything ❤️',
    'Forever Yours 💖',
    'My Beautiful 🌹',
    'Always & Forever 💗',
    'You Complete Me 💑',
    'My Heart Belongs to You ❤️',
    'Forever S❤️S 💞',
    'More Each Day 💕',
    'My True Love ✨'
   
];

// Initialize particles when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createParticles);
} else {
    createParticles();
}

// Touch/Click handler
document.addEventListener('touchstart', handleInteraction, { passive: false });
document.addEventListener('click', handleInteraction);
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.02) {
        createRandomSparkles(e.clientX, e.clientY);
    }
});

function handleInteraction(e) {
    e.preventDefault();
    
    let x, y;
    if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    } else {
        x = e.clientX;
        y = e.clientY;
    }

    createRipple(x, y);
    createSparkles(x, y);
    createFlyingHearts(x, y);
}

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 1200);
}

function createSparkles(x, y) {
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const angle = (Math.PI * 2 / 20) * i;
        const distance = 80 + Math.random() * 120;
        const size = Math.random() * 8 + 5;
        
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1500);
    }
}

function createRandomSparkles(x, y) {
    for (let i = 0; i < 3; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 60;
        const size = Math.random() * 5 + 2;
        
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1500);
    }
}

function createFlyingHearts(x, y) {
    for (let j = 0; j < 3; j++) {
        setTimeout(() => {
            const container = document.createElement('div');
            container.className = 'flying-heart';
            container.style.left = (x + (Math.random() - 0.5) * 60) + 'px';
            container.style.top = (y + (Math.random() - 0.5) * 60) + 'px';

            const heartShape = document.createElement('div');
            heartShape.className = 'heart-shape';
            heartShape.innerHTML = getSVGHeart();

            const message = document.createElement('div');
            message.className = 'message';
            message.textContent = messages[Math.floor(Math.random() * messages.length)];

            container.appendChild(heartShape);
            container.appendChild(message);
            document.body.appendChild(container);

            setTimeout(() => container.remove(), 10000);
        }, j * 100);
    }
}

// Auto flying hearts
setInterval(() => {
    const x = Math.random() * (window.innerWidth - 100) + 50;
    const y = window.innerHeight + 30;
    
    const container = document.createElement('div');
    container.className = 'flying-heart';
    container.style.left = x + 'px';
    container.style.top = y + 'px';

    const heartShape = document.createElement('div');
    heartShape.className = 'heart-shape';
    heartShape.innerHTML = getSVGHeart();

    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    message.style.fontSize = '14px';

    container.appendChild(heartShape);
    container.appendChild(message);
    document.body.appendChild(container);

    setTimeout(() => container.remove(), 10000);
}, 5000);

console.log('💕 S❤️S - Forever Love 💕');
