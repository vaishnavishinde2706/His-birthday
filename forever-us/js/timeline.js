/**
 * Forever Us - Timeline JS (Our Journey)
 */

document.addEventListener('DOMContentLoaded', () => {
  const timelineContainer = document.getElementById('timeline-container');
  if (!timelineContainer || !CONFIG.timelineEvents) return;

  // Render events
  CONFIG.timelineEvents.forEach((event, index) => {
    const isRight = index % 2 !== 0;
    const item = document.createElement('div');
    item.className = `timeline-item ${isRight ? 'right' : 'left'}`;
    
    item.innerHTML = `
      <div class="timeline-content">
        <span class="timeline-date">${event.date}</span>
        <h3>${event.title}</h3>
        <span class="timeline-location">📍 ${event.location}</span>
        <p>${event.desc}</p>
        ${event.image ? `<img src="${event.image}" alt="${event.title}" class="timeline-img${['First Talk', 'First Trip Together'].includes(event.title) ? ' timeline-img-fit' : ''}">` : ''}
      </div>
    `;
    
    timelineContainer.appendChild(item);
  });

  // Initialize GSAP ScrollTrigger for animation
  gsap.registerPlugin(ScrollTrigger);

  const timelineItems = gsap.utils.toArray('.timeline-item');
  timelineItems.forEach((item, i) => {
    const isRight = item.classList.contains('right');
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      x: isRight ? 50 : -50,
      duration: 0.8,
      ease: "power2.out"
    });
  });
});
