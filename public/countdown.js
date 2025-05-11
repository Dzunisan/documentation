// Simple countdown function that will be called when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Set the end dates for each phase
  var phaseEndDates = {
    'timeline': new Date('2025-08-31T00:00:00').getTime(),
    'home': new Date('2025-08-31T00:00:00').getTime(),
    'dev': new Date('2025-08-31T00:00:00').getTime(),
    'phase1': new Date('2025-04-30T00:00:00').getTime(),
    'phase2': new Date('2025-05-31T00:00:00').getTime(),
    'phase3': new Date('2025-06-30T00:00:00').getTime(),
    'phase4': new Date('2025-08-31T00:00:00').getTime()
  };

  // Update each timer every second
  setInterval(function() {
    var now = new Date().getTime();
    
    // Update timeline countdown
    updateTimer('timeline', phaseEndDates.timeline, now);
    
    // Update home countdown
    updateTimer('home', phaseEndDates.home, now);
    
    // Update dev countdown
    updateTimer('dev', phaseEndDates.dev, now);
    
    // Update phase countdowns
    updateTimer('phase1', phaseEndDates.phase1, now);
    updateTimer('phase2', phaseEndDates.phase2, now);
    updateTimer('phase3', phaseEndDates.phase3, now);
    updateTimer('phase4', phaseEndDates.phase4, now);
  }, 1000);
  
  // Initial update immediately
  var initialNow = new Date().getTime();
  updateTimer('timeline', phaseEndDates.timeline, initialNow);
  updateTimer('home', phaseEndDates.home, initialNow);
  updateTimer('dev', phaseEndDates.dev, initialNow);
  updateTimer('phase1', phaseEndDates.phase1, initialNow);
  updateTimer('phase2', phaseEndDates.phase2, initialNow);
  updateTimer('phase3', phaseEndDates.phase3, initialNow);
  updateTimer('phase4', phaseEndDates.phase4, initialNow);
});

// Helper function to update a single timer
function updateTimer(id, endDate, now) {
  var daysEl = document.getElementById(id + '-days');
  var hoursEl = document.getElementById(id + '-hours');
  var minutesEl = document.getElementById(id + '-minutes');
  var secondsEl = document.getElementById(id + '-seconds');
  
  // Skip if elements don't exist
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
    return;
  }
  
  // Calculate time remaining
  var distance = endDate - now;
  
  // If countdown has ended, show all zeros
  if (distance < 0) {
    daysEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
    return;
  }
  
  // Calculate days, hours, minutes, seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Add leading zeros
  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  // Update the HTML
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
} 