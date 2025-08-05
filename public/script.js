const button = document.getElementById('lizard-button');
const chat = document.getElementById('chat-body');
const counter = document.getElementById('counter');

const MERGE_DELAY = 500; // 🦎 Spam merge delay in ms

let lizardCount = 0;
let lastClickTime = 0;
let lastBubble = null;
let lastTimestamp = 0;

function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function checkEasterEggs(count) {
    const popup = document.getElementById('easter-egg-popup');

    const eggs = {
        69: 'nice',
        100: 'Keep it 💯',
        1337: 'leet skills detected',
        420: '🥦',
        666: 'spooky 🦎',
        777: 'jackpot! 🎰',
        999: 'Almost there...',
        1000: '1K 🦎 celebration!',
        2025: 'from the future',
        3000: 'This is... 🦎!',
        4444: 'KAW!',
        9001: 'It’s over 9000! 🔥',
        69420: 'ultra nice',
    };

    if (eggs[count]) {
        popup.textContent = eggs[count];
        popup.style.display = 'block';
        popup.classList.add('show');

        setTimeout(() => {
            popup.classList.remove('show');
            popup.style.display = 'none';
        }, 2500);
    }
}

button.addEventListener('click', () => {
    const scream = new Audio('lizard.wav');
    scream.play();

    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime;
    const needsTimestamp = now - lastTimestamp > 60 * 1000;

    if (needsTimestamp) {
        const timestamp = document.createElement('div');
        timestamp.className = 'timestamp';
        timestamp.textContent = formatTime(new Date(now));
        chat.appendChild(timestamp);
        lastTimestamp = now;
    }

    if (lastBubble && timeSinceLastClick < MERGE_DELAY) {
        lastBubble.textContent += '🦎';
    } else {
        lastBubble = document.createElement('div');
        lastBubble.className = 'chat-bubble';
        lastBubble.textContent = '🦎';
        chat.appendChild(lastBubble);
    }

    lastClickTime = now;
    lizardCount++;
    counter.textContent = `${lizardCount} 🦎 sent`;
    chat.scrollTop = chat.scrollHeight;

    checkEasterEggs(lizardCount);
});
