function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

// your function to adjust object position
function adjustObjectPosition() {
  document.querySelectorAll('.d36-works img, .sakuji-works img').forEach(function(img) {
    const rect = img.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      const scrollPosition = rect.top / window.innerHeight;
      const newPosition = 40 + (scrollPosition * 15); // Modify this line
      img.style.objectPosition = `100% ${newPosition}%`;
    }
  });
}

// throttled function
const throttledAdjustObjectPosition = throttle(adjustObjectPosition, 100);

// event listener
window.addEventListener('scroll', throttledAdjustObjectPosition);
