/**
 * Forever Us - Secret Gallery Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const passInput = document.getElementById('secret-password');
  const unlockBtn = document.getElementById('unlock-btn');
  const gateBox = document.getElementById('gate-box');
  const gateSection = document.getElementById('password-gate');
  const secretContent = document.getElementById('secret-content');
  const galleryContainer = document.getElementById('secret-gallery');

  if (!unlockBtn || !passInput) return;

  function unlockGallery() {
    const enteredPass = passInput.value.toLowerCase().trim();
    if (enteredPass === CONFIG.secretPassword) {
      // Success
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD6E8', '#FFC1D9', '#ffffff']
      });

      gateSection.style.display = 'none';
      secretContent.style.display = 'block';

      renderGallery();
    } else {
      // Fail
      gateBox.classList.add('shake');
      Swal.fire({
        title: 'Oops!',
        text: 'That is not the correct password. Try again! ❤️',
        icon: 'error',
        confirmButtonColor: '#FFD6E8'
      });

      setTimeout(() => {
        gateBox.classList.remove('shake');
      }, 600);
      passInput.value = '';
    }
  }

  unlockBtn.addEventListener('click', unlockGallery);
  passInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') unlockGallery();
  });

  function renderGallery() {
    if (!CONFIG.secretPhotos || CONFIG.secretPhotos.length === 0) return;

    CONFIG.secretPhotos.forEach((photo) => {
      const a = document.createElement('a');
      a.href = photo.url;
      a.className = 'gallery-item interactive';
      
      a.innerHTML = `
        <img src="${photo.url}" alt="Secret Memory" style="width: 100%; border-radius: var(--border-radius); display: block;">
      `;
      
      galleryContainer.appendChild(a);
    });

    lightGallery(galleryContainer, {
      plugins: [lgZoom],
      speed: 500,
      mode: 'lg-fade',
      download: false
    });
  }
});
