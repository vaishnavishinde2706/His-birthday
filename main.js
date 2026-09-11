/**
 * Forever Us - Main JS (Global Logic)
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  // initMusic();
  initEasterEgg();
  initParticles();
});

/* --- Custom Cursor --- */
function initCursor() {
  const cursorDot = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  document.body.appendChild(cursorDot);

  const cursorOutline = document.createElement('div');
  cursorOutline.classList.add('cursor-outline');
  document.body.appendChild(cursorOutline);

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Slight delay for outline
    setTimeout(() => {
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    }, 50);
    
    // Random heart trail (10% chance on move)
    if (Math.random() < 0.05) {
      createHeartTrail(posX, posY);
    }
  });
}

function createHeartTrail(x, y) {
  const heart = document.createElement('div');
  heart.classList.add('heart-trail');
  heart.innerHTML = '❤️';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}

/* --- Music Player --- */
function initMusic() {
  const musicBtn = document.getElementById('musicToggle');
  if (!musicBtn) return;

  // Get current page name
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Get music for current page, fallback to default
  const musicSrc = CONFIG.pageMusic[currentPage] || CONFIG.musicSrc;
  
  console.log('Loading music for page:', currentPage, 'URL:', musicSrc);
  
  const audio = new Audio(musicSrc);
  audio.loop = true;
  audio.volume = 0.5; // Set default volume to 50%
  let isPlaying = false;

  // Handle audio errors
  audio.addEventListener('error', (e) => {
    console.error('Audio playback error:', e);
  });

  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audio.pause();
      musicBtn.classList.remove('playing');
      isPlaying = false;
    } else {
      audio.play().then(() => {
        musicBtn.classList.add('playing');
        isPlaying = true;
      }).catch(err => {
        console.error('Autoplay error:', err);
      });
    }
  });

  // Attempt autoplay on first click anywhere if not playing
  document.body.addEventListener('click', () => {
    if (!isPlaying && audio.paused) {
      audio.play().then(() => {
        musicBtn.classList.add('playing');
        isPlaying = true;
      }).catch(err => {
        console.log('Autoplay blocked, waiting for manual click');
      });
    }
  }, { once: true });
}

/* --- Easter Egg --- */
function initEasterEgg() {
  const teddy = document.getElementById('teddyEgg');
  if (!teddy) return;

  let clickCount = 0;
  teddy.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
      const randomNote = CONFIG.loveNotes[Math.floor(Math.random() * CONFIG.loveNotes.length)];
      Swal.fire({
        title: 'Secret Found! 🧸',
        text: randomNote,
        icon: 'heart',
        confirmButtonColor: '#FFD6E8',
        confirmButtonText: 'Aww!'
      });
      clickCount = 0; // Reset
    }
  });
}

/* --- Particles (Home & Background) --- */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray = [];

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * -1 - 0.5; // Float up
      this.color = `rgba(255, 193, 217, ${Math.random() * 0.5 + 0.2})`; // Primary color fading
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.01;
      
      if (this.y < 0) {
        this.y = canvas.height;
        this.x = Math.random() * canvas.width;
        this.size = Math.random() * 3 + 1;
      }
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    for (let i = 0; i < 50; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }

  init();
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
