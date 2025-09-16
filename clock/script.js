// Build tick marks and numerals
  (function buildFace(){
    const ticks = document.getElementById('ticks');
    const nums  = document.getElementById('numbers');

    for (let i = 0; i < 60; i++) {
      const t = document.createElement('div');
      t.className = 'tick' + (i % 5 === 0 ? ' major' : '');
      t.style.transform = `translate(-50%, -50%) rotate(${i * 6}deg)`;
      const bar = document.createElement('i');
      t.appendChild(bar);
      ticks.appendChild(t);
    }

    // 12, 1..11 positioned around the face
    for (let h = 1; h <= 12; h++) {
      const n = document.createElement('div');
      n.className = 'num';
      n.textContent = h;
      const angle = h * 30; // degrees
      n.style.transform = `translate(-50%, -50%) rotate(${angle}deg)
                           translateY(calc((44px - var(--size)/2)))
                           rotate(${-angle}deg)`;
      nums.appendChild(n);
    }
  })();

  // Smooth, continuous movement using requestAnimationFrame
  const hourHand   = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');

  function updateHands() {
    const now = new Date();
    const ms   = now.getMilliseconds();
    const s    = now.getSeconds() + ms / 1000;
    const m    = now.getMinutes() + s / 60;
    const h    = (now.getHours() % 12) + m / 60;

    // 360deg / 60s = 6 deg per second
    const secDeg  = s * 6;
    const minDeg  = m * 6;
    // 360deg / 12h = 30 deg per hour
    const hourDeg = h * 30;

    secondHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    hourHand.style.transform   = `translateX(-50%) rotate(${hourDeg}deg)`;

    requestAnimationFrame(updateHands);
  }
  requestAnimationFrame(updateHands);

  // Optional: avoid blurry transforms on some displays
  [hourHand, minuteHand, secondHand].forEach(el => {
    el.style.backfaceVisibility = 'hidden';
    el.style.transformStyle = 'preserve-3d';
  });