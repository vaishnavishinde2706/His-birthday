/**
 * Journey Page - Music Player
 * Auto-plays background music when the page loads with play/pause control
 */

document.addEventListener('DOMContentLoaded', () => {
  initJourneyMusic();
});

function initJourneyMusic() {
  // Create audio element
  const audio = document.createElement('audio');
  audio.id = 'journey-music';
  audio.loop = true;
  audio.volume = 0.5;
  
  // Get journey music URL from config
  const musicSrc = CONFIG.pageMusic['journey.html'] || CONFIG.musicSrc;
  audio.src = musicSrc;
  
  // Append to body
  document.body.appendChild(audio);
  
  console.log('Journey music loaded:', musicSrc);
  
  // Get music toggle button
  const musicBtn = document.getElementById('music-toggle');
  let isPlaying = false;
  
  // Update button state
  function updateButtonState() {
    if (isPlaying) {
      musicBtn.classList.add('playing');
      musicBtn.innerHTML = '<span class="music-icon">🎵</span>';
    } else {
      musicBtn.classList.remove('playing');
      musicBtn.innerHTML = '<span class="music-icon">🎵</span>';
    }
  }
  
  // Handle button click
  if (musicBtn) {
    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
      } else {
        audio.play();
        isPlaying = true;
      }
      updateButtonState();
    });
  }
  
  // Try to play immediately
  audio.play().then(() => {
    console.log('Journey music auto-playing');
    isPlaying = true;
    updateButtonState();
  }).catch(err => {
    console.log('Auto-play blocked, waiting for user interaction');
    
    // Fallback: play on first click
    document.addEventListener('click', () => {
      if (!isPlaying) {
        audio.play();
        isPlaying = true;
        updateButtonState();
      }
    }, { once: true });
  });
  
  // Handle audio errors
  audio.addEventListener('error', (e) => {
    console.error('Audio playback error:', e);
  });
}
