/**
 * Showora Auth Background Engine
 * Manages canvas animations (starfield, bokeh orbs, stardust, shooting stars, cursor glow)
 * and mouse parallax coordinates (--mx, --my).
 */

export function initAuthBackground(rootEl) {
  if (!rootEl) return () => {};

  const canvas = rootEl.querySelector('canvas');
  if (!canvas) return () => {};

  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  let animFrameId = null;
  let shootingStarTimer = null;
  let width = 0;
  let height = 0;
  let dpr = 1;

  // Reduced motion preference
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = motionQuery.matches;

  // Mouse tracking
  let targetMouseX = window.innerWidth * 0.5;
  let targetMouseY = window.innerHeight * 0.5;
  let curMouseX = targetMouseX;
  let curMouseY = targetMouseY;
  let hasMouse = false;

  // Starfield
  let stars = [];

  // Bokeh Orbs (9 orbs)
  const orbPalette = [
    [255, 45, 143],  // pink
    [168, 85, 247],  // violet
    [255, 216, 115], // gold
    [59, 31, 168],   // indigo
    [255, 45, 143],  // pink
    [168, 85, 247],  // violet
    [255, 216, 115], // gold
    [59, 31, 168],   // indigo
    [168, 85, 247]   // violet
  ];
  let orbs = [];

  // Stardust (70 rising dots)
  let stardust = [];

  // Shooting Star state
  let shootingStar = {
    active: false,
    x: 0,
    y: 0,
    angle: 0.7,
    speed: 12,
    length: 90,
    frame: 0,
    maxFrames: 70
  };

  function initElements() {
    // Starfield: about W×H/6500 stars, 0.2–1.4px, 20% tinted #f0abfc
    const starCount = Math.max(30, Math.round((width * height) / 6500));
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.2 + Math.random() * 1.2,
        baseAlpha: 0.15 + Math.random() * 0.55,
        amp: 0.15 + Math.random() * 0.35,
        speed: 0.8 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
        isTinted: Math.random() < 0.2,
        depth: 0.04 + Math.random() * 0.08
      });
    }

    // Bokeh orbs (9 large soft radial circles, radius 70–220px, alpha .06–.14)
    orbs = orbPalette.map((color) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 70 + Math.random() * 150,
      alpha: 0.06 + Math.random() * 0.08,
      color: color.join(','),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      depth: 0.15 + Math.random() * 0.45
    }));

    // Stardust: 70 small glowing dots (gold and pink, halo 3.2× radius)
    stardust = [];
    for (let i = 0; i < 70; i++) {
      const isGold = Math.random() > 0.45;
      const color = isGold ? '255, 216, 115' : '255, 45, 143';
      const r = 0.8 + Math.random() * 1.4;
      stardust.push({
        baseX: Math.random() * width,
        x: 0,
        y: Math.random() * height,
        r,
        haloR: r * 3.2,
        color,
        vy: -(0.4 + Math.random() * 0.7),
        wobbleSpeed: 0.015 + Math.random() * 0.025,
        wobbleAmp: 8 + Math.random() * 16,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    initElements();

    if (isReducedMotion) {
      renderStaticFrame();
    }
  }

  // Shooting star scheduler (one every 4-9 seconds)
  function scheduleNextShootingStar() {
    if (isReducedMotion) return;
    const delay = 4000 + Math.random() * 5000;
    shootingStarTimer = setTimeout(() => {
      spawnShootingStar();
    }, delay);
  }

  function spawnShootingStar() {
    if (document.hidden || isReducedMotion) {
      scheduleNextShootingStar();
      return;
    }
    shootingStar = {
      active: true,
      x: Math.random() * width * 0.75,
      y: Math.random() * height * 0.35,
      angle: 0.65 + Math.random() * 0.3, // ~37° to ~54° diagonal
      speed: 12 + Math.random() * 6,
      length: 80 + Math.random() * 60,
      frame: 0,
      maxFrames: 70
    };
  }

  function onMouseMove(e) {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
    hasMouse = true;
  }

  function onVisibilityChange() {
    if (!document.hidden && !animFrameId && !isReducedMotion) {
      animFrameId = requestAnimationFrame(loop);
    }
  }

  function onMotionChange(e) {
    isReducedMotion = e.matches;
    if (isReducedMotion) {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      if (shootingStarTimer) clearTimeout(shootingStarTimer);
      rootEl.style.removeProperty('--mx');
      rootEl.style.removeProperty('--my');
      renderStaticFrame();
    } else {
      scheduleNextShootingStar();
      animFrameId = requestAnimationFrame(loop);
    }
  }

  function renderStaticFrame() {
    ctx.clearRect(0, 0, width, height);

    // Static stars
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      ctx.fillStyle = s.isTinted
        ? `rgba(240, 171, 252, ${s.baseAlpha})`
        : `rgba(255, 255, 255, ${s.baseAlpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Static orbs
    for (let i = 0; i < orbs.length; i++) {
      const o = orbs[i];
      const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      grad.addColorStop(0, `rgba(${o.color}, ${o.alpha})`);
      grad.addColorStop(0.5, `rgba(${o.color}, ${o.alpha * 0.5})`);
      grad.addColorStop(1, `rgba(${o.color}, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Static stardust
    for (let i = 0; i < stardust.length; i++) {
      const d = stardust[i];
      ctx.fillStyle = `rgba(${d.color}, 0.7)`;
      ctx.beginPath();
      ctx.arc(d.baseX, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  let lastTime = performance.now();

  function loop(currentTime) {
    if (document.hidden) {
      animFrameId = null;
      return;
    }

    const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
    lastTime = currentTime;
    const timeSec = currentTime * 0.001;

    // 1. Mouse Lerp & CSS variables update
    curMouseX += (targetMouseX - curMouseX) * 0.06;
    curMouseY += (targetMouseY - curMouseY) * 0.06;
    const curNormX = (curMouseX / Math.max(1, width)) * 2 - 1;
    const curNormY = (curMouseY / Math.max(1, height)) * 2 - 1;

    rootEl.style.setProperty('--mx', curNormX.toFixed(4));
    rootEl.style.setProperty('--my', curNormY.toFixed(4));

    ctx.clearRect(0, 0, width, height);

    // 2. Bokeh Orbs (draw behind starfield)
    for (let i = 0; i < orbs.length; i++) {
      const o = orbs[i];
      o.x += o.vx;
      o.y += o.vy;

      if (o.x < -o.r) o.x = width + o.r;
      if (o.x > width + o.r) o.x = -o.r;
      if (o.y < -o.r) o.y = height + o.r;
      if (o.y > height + o.r) o.y = -o.r;

      const drawX = o.x + curNormX * o.depth * 45;
      const drawY = o.y + curNormY * o.depth * 45;

      const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, o.r);
      grad.addColorStop(0, `rgba(${o.color}, ${o.alpha})`);
      grad.addColorStop(0.5, `rgba(${o.color}, ${o.alpha * 0.45})`);
      grad.addColorStop(1, `rgba(${o.color}, 0)`);

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(drawX, drawY, o.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Starfield with sine twinkling and subtle parallax
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const alpha = Math.max(
        0.05,
        Math.min(1, s.baseAlpha + s.amp * Math.sin(timeSec * s.speed + s.phase))
      );

      const drawX = s.x + curNormX * s.depth * 18;
      const drawY = s.y + curNormY * s.depth * 18;

      ctx.fillStyle = s.isTinted
        ? `rgba(240, 171, 252, ${alpha})`
        : `rgba(255, 255, 255, ${alpha})`;

      ctx.beginPath();
      ctx.arc(drawX, drawY, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. Stardust (70 rising dots with sine wobble)
    for (let i = 0; i < stardust.length; i++) {
      const d = stardust[i];
      d.y += d.vy;
      d.phase += d.wobbleSpeed;
      d.x = d.baseX + Math.sin(d.phase) * d.wobbleAmp;

      if (d.y < -15) {
        d.y = height + 15;
        d.baseX = Math.random() * width;
      }

      // Soft halo (3.2× radius)
      const haloGrad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.haloR);
      haloGrad.addColorStop(0, `rgba(${d.color}, 0.38)`);
      haloGrad.addColorStop(1, `rgba(${d.color}, 0)`);
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.haloR, 0, Math.PI * 2);
      ctx.fill();

      // Bright center dot
      ctx.fillStyle = `rgba(${d.color}, 0.9)`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 5. Shooting Star (one every 4-9 seconds, lasts ~70 frames)
    if (shootingStar.active) {
      shootingStar.frame++;
      shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
      shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;

      const progress = shootingStar.frame / shootingStar.maxFrames;
      const streakLen = shootingStar.length * Math.min(1, shootingStar.frame / 12);
      const tailX = shootingStar.x - Math.cos(shootingStar.angle) * streakLen;
      const tailY = shootingStar.y - Math.sin(shootingStar.angle) * streakLen;

      // Fade in fast, fade out smoothly
      const streakAlpha = progress < 0.2 ? progress / 0.2 : Math.max(0, 1 - progress);

      const grad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y);
      grad.addColorStop(0, 'rgba(255, 45, 143, 0)');
      grad.addColorStop(0.55, `rgba(255, 45, 143, ${(streakAlpha * 0.7).toFixed(3)})`);
      grad.addColorStop(0.92, `rgba(255, 255, 255, ${(streakAlpha * 0.95).toFixed(3)})`);
      grad.addColorStop(1, `rgba(255, 255, 255, ${streakAlpha.toFixed(3)})`);

      ctx.save();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.8;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(shootingStar.x, shootingStar.y);
      ctx.stroke();

      // Glowing head
      ctx.fillStyle = `rgba(255, 255, 255, ${streakAlpha.toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(shootingStar.x, shootingStar.y, 1.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (shootingStar.frame >= shootingStar.maxFrames) {
        shootingStar.active = false;
        scheduleNextShootingStar();
      }
    }

    // 6. Cursor Glow (soft pink radial gradient, r=220px, alpha=0.14)
    if (hasMouse) {
      const glowGrad = ctx.createRadialGradient(curMouseX, curMouseY, 0, curMouseX, curMouseY, 220);
      glowGrad.addColorStop(0, 'rgba(255, 45, 143, 0.14)');
      glowGrad.addColorStop(0.45, 'rgba(255, 45, 143, 0.05)');
      glowGrad.addColorStop(1, 'rgba(255, 45, 143, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(curMouseX, curMouseY, 220, 0, Math.PI * 2);
      ctx.fill();
    }

    animFrameId = requestAnimationFrame(loop);
  }

  // Setup listeners
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('visibilitychange', onVisibilityChange);
  if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', onMotionChange);
  } else if (motionQuery.addListener) {
    motionQuery.addListener(onMotionChange);
  }

  // Initialize
  resize();
  if (!isReducedMotion) {
    scheduleNextShootingStar();
    animFrameId = requestAnimationFrame(loop);
  }

  // Return complete cleanup function for React StrictMode
  return () => {
    if (animFrameId) cancelAnimationFrame(animFrameId);
    if (shootingStarTimer) clearTimeout(shootingStarTimer);
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    if (motionQuery.removeEventListener) {
      motionQuery.removeEventListener('change', onMotionChange);
    } else if (motionQuery.removeListener) {
      motionQuery.removeListener(onMotionChange);
    }
  };
}
