/**
 * Forever Us - Live Relationship Counter Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minutesEl = document.getElementById('count-minutes');
  const secondsEl = document.getElementById('count-seconds');
  
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const startDate = new Date(CONFIG.relationshipStartDate).getTime();

  function updateCounter() {
    const now = new Date().getTime();
    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
  }

  // Update immediately, then every second
  updateCounter();
  setInterval(updateCounter, 1000);
});
