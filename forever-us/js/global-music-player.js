/**
 * Global Music Player
 * Maintains continuous music playback across all pages
 */

let globalAudio = null;
let isGlobalMusicPlaying = false;

document.addEventListener('DOMContentLoaded', () => {
  initGlobalMusicPlayer();
});

function getCurrentPage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function initGlobalMusicPlayer() {
  // Check if audio already exists (for SPAs or persistent playback)
  if (window.globalAudio && window.globalAudio instanceof HTMLAudioElement) {
    globalAudio = window.globalAudio;
    isGlobalMusicPlaying = !globalAudio.paused;
    setupMusicButton();
    return;
  }

  const currentPage = getCurrentPage();
  const musicSrc = CONFIG.pageMusic[currentPage] || CONFIG.musicSrc;
  const timing = CONFIG.musicTiming?.[currentPage];

  const savedProgress = sessionStorage.getItem('musicProgress');
  const savedState = sessionStorage.getItem('musicPlaying');
  const lastPage = sessionStorage.getItem('lastPage');

  if (!globalAudio) {
    globalAudio = document.createElement('audio');
    globalAudio.id = 'global-music-player';
    globalAudio.loop = true;
    globalAudio.volume = 0.5;
    document.body.appendChild(globalAudio);
    window.globalAudio = globalAudio;
  }

  globalAudio.src = musicSrc;
  console.log('Global music player initialized for:', currentPage, 'Music:', musicSrc);

  if (timing?.start > 0) {
    globalAudio.addEventListener('loadedmetadata', () => {
      globalAudio.currentTime = timing.start;
    }, { once: true });
  }

  if (timing?.end > timing?.start) {
    globalAudio.addEventListener('timeupdate', () => {
      if (globalAudio.currentTime >= timing.end) {
        globalAudio.currentTime = timing.start || 0;
      }
    });
  }

  if (lastPage === 'journey.html' && currentPage === 'memories.html' && savedProgress) {
    globalAudio.currentTime = parseFloat(savedProgress);
    if (savedState === 'true') {
      globalAudio.play().then(() => {
        isGlobalMusicPlaying = true;
      }).catch(() => {
        console.log('Autoplay blocked');
      });
    }
  } else {
    globalAudio.play().then(() => {
      isGlobalMusicPlaying = true;
    }).catch(() => {
      console.log('Autoplay blocked, waiting for user interaction');
      document.addEventListener('click', () => {
        if (!isGlobalMusicPlaying && globalAudio.paused) {
          globalAudio.play();
          isGlobalMusicPlaying = true;
        }
      }, { once: true });
    });
  }

  sessionStorage.setItem('lastPage', currentPage);

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('musicProgress', globalAudio.currentTime);
    sessionStorage.setItem('musicPlaying', !globalAudio.paused);
  });

  setupMusicButton();
}

function setupMusicButton() {
  const musicBtn = document.getElementById('music-toggle');

  if (!musicBtn) return;

  function updateButtonState() {
    if (isGlobalMusicPlaying) {
      musicBtn.classList.add('playing');
    } else {
      musicBtn.classList.remove('playing');
    }
  }

  updateButtonState();

  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    if (isGlobalMusicPlaying) {
      globalAudio.pause();
      isGlobalMusicPlaying = false;
    } else {
      globalAudio.play();
      isGlobalMusicPlaying = true;
    }

    updateButtonState();
  });

  globalAudio.addEventListener('play', () => {
    isGlobalMusicPlaying = true;
    updateButtonState();
  });

  globalAudio.addEventListener('pause', () => {
    isGlobalMusicPlaying = false;
    updateButtonState();
  });
}
