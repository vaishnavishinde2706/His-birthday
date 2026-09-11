/**
 * Forever Us - Gallery JS
 */

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('lightgallery');
  if (!galleryContainer || !CONFIG.galleryPhotos) return;

  // Render gallery photos
  CONFIG.galleryPhotos.forEach((photo) => {
    const a = document.createElement('a');
    a.href = photo.type === 'video' ? '#' : photo.url;
    a.className = 'gallery-item interactive';
    a.setAttribute('data-sub-html', `<p>${photo.caption}</p>`);

    if (photo.type === 'video') {
      a.setAttribute('data-poster', photo.poster);
      a.setAttribute('data-lg-size', '1280-720');
      a.setAttribute('data-video', JSON.stringify({
        source: [{ src: photo.url, type: 'video/mp4' }],
        attributes: { controls: true, autoplay: true, preload: false }
      }));
    }
    
    a.innerHTML = `
      <img src="${photo.type === 'video' ? photo.poster : photo.url}" alt="${photo.caption}">
      <div class="gallery-overlay">
        <p>${photo.caption}</p>
      </div>
    `;
    
    galleryContainer.appendChild(a);
  });

  // Initialize LightGallery
  lightGallery(galleryContainer, {
    plugins: [lgZoom, lgVideo],
    speed: 500,
    mode: 'lg-fade',
    download: false
  });
});
