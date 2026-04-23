<template>
  <section ref="heroEl" class="nb-hero">
    <!-- Canvas background -->
    <canvas ref="canvas" class="nb-hero__canvas" aria-hidden="true" />

    <!-- Content overlay -->
    <div class="nb-container nb-hero__content">
      <h1 class="nb-hero__title">
        <span class="nb-hero__word nb-hero__word--chaos" :class="{ 'is-visible': showChaos }">Turning chaos&nbsp;</span><span class="nb-hero__word nb-hero__word--clarity" :class="{ 'is-visible': showClarity }">into clarity.</span>
      </h1>

      <p class="nb-hero__sub" :class="{ 'is-visible': showSub }">
        Nebyss Innovation builds domain-specific AI where human judgment stays at the center.
      </p>

      <div class="nb-hero__actions" :class="{ 'is-visible': showActions }">
        <NuxtLink to="/research" class="nb-btn nb-btn--primary">
          Explore our work <span class="arrow">→</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="nb-btn">
          Get in touch <span class="arrow">→</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="nb-hero__scroll" :class="{ 'is-visible': showActions }" aria-hidden="true">
      <div class="nb-hero__scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
const heroEl = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

const showChaos = ref(false)
const showClarity = ref(false)
const showSub = ref(false)
const showActions = ref(false)

// --- Particle system ---
interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  angle: number
  radius: number
  speed: number
  size: number
  alpha: number
  hue: number
  chaosOffset: number
}

let particles: Particle[] = []
let ctx: CanvasRenderingContext2D | null = null
let raf = 0
let w = 0
let h = 0
let cx = 0
let cy = 0
let phase = 0 // 0=chaos, 1=transitioning, 2=clarity
let transitionProgress = 0
let startTime = 0

const PARTICLE_COUNT = 180
const DPR = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1

function resize() {
  if (!canvas.value || !heroEl.value) return
  const rect = heroEl.value.getBoundingClientRect()
  w = rect.width
  h = rect.height
  canvas.value.width = w * DPR
  canvas.value.height = h * DPR
  canvas.value.style.width = w + 'px'
  canvas.value.style.height = h + 'px'
  ctx = canvas.value.getContext('2d')
  if (ctx) ctx.scale(DPR, DPR)
  cx = w * 0.55
  cy = h * 0.48
}

function initParticles() {
  particles = []
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 40 + Math.random() * Math.min(w, h) * 0.38
    particles.push({
      x: 0,
      y: 0,
      baseX: cx + Math.cos(angle) * radius,
      baseY: cy + Math.sin(angle) * radius,
      angle,
      radius,
      speed: 0.003 + Math.random() * 0.008,
      size: 1 + Math.random() * 2.5,
      alpha: 0.15 + Math.random() * 0.5,
      hue: 250 + Math.random() * 60, // violet-blue range
      chaosOffset: Math.random() * Math.PI * 2,
    })
  }
}

function draw(time: number) {
  if (!ctx) return
  const elapsed = (time - startTime) / 1000

  ctx.clearRect(0, 0, w, h)

  // Transition timing
  if (phase === 1) {
    transitionProgress = Math.min(transitionProgress + 0.008, 1)
    if (transitionProgress >= 1) phase = 2
  }

  // Easing
  const ease = transitionProgress * transitionProgress * (3 - 2 * transitionProgress) // smoothstep

  for (const p of particles) {
    p.angle += p.speed * (1 - ease * 0.7)

    // Chaos: particles orbit with erratic radii
    const chaosRadius = p.radius + Math.sin(elapsed * 2 + p.chaosOffset) * (50 * (1 - ease))
    const chaosX = cx + Math.cos(p.angle) * chaosRadius
    const chaosY = cy + Math.sin(p.angle * 1.3 + p.chaosOffset) * chaosRadius * 0.8

    // Clarity: particles settle into gentle concentric rings
    const ringRadius = p.radius * 0.85
    const clarityX = cx + Math.cos(p.angle * 0.5 + elapsed * 0.15) * ringRadius
    const clarityY = cy + Math.sin(p.angle * 0.5 + elapsed * 0.15) * ringRadius

    // Blend
    p.x = chaosX + (clarityX - chaosX) * ease
    p.y = chaosY + (clarityY - chaosY) * ease

    // Size: chaos = larger scattered, clarity = smaller precise
    const drawSize = p.size * (1 + (1 - ease) * 0.8)

    // Alpha: brighter in clarity
    const drawAlpha = p.alpha * (0.4 + ease * 0.6)

    // Color: chaos is more magenta, clarity is more blue
    const hue = p.hue - (1 - ease) * 20

    ctx.beginPath()
    ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2)
    ctx.fillStyle = `hsla(${hue}, 70%, 70%, ${drawAlpha})`
    ctx.fill()
  }

  // Central glow — chaos: intense & tight, clarity: soft & wide
  const glowRadius = 80 + ease * 120
  const glowAlpha = 0.12 - ease * 0.04
  const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius)
  grd.addColorStop(0, `hsla(270, 60%, 65%, ${glowAlpha})`)
  grd.addColorStop(0.5, `hsla(250, 50%, 55%, ${glowAlpha * 0.5})`)
  grd.addColorStop(1, 'transparent')
  ctx.fillStyle = grd
  ctx.fillRect(cx - glowRadius, cy - glowRadius, glowRadius * 2, glowRadius * 2)

  // Vortex lines in chaos phase
  if (ease < 0.8) {
    const lineAlpha = 0.04 * (1 - ease / 0.8)
    ctx.strokeStyle = `hsla(265, 60%, 60%, ${lineAlpha})`
    ctx.lineWidth = 0.5
    for (let i = 0; i < 6; i++) {
      const a = elapsed * 0.3 + (i * Math.PI) / 3
      const r1 = 30
      const r2 = 160 + Math.sin(elapsed + i) * 40
      ctx.beginPath()
      ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1)
      ctx.quadraticCurveTo(
        cx + Math.cos(a + 0.5) * r2 * 0.6,
        cy + Math.sin(a + 0.5) * r2 * 0.6,
        cx + Math.cos(a + 1) * r2,
        cy + Math.sin(a + 1) * r2
      )
      ctx.stroke()
    }
  }

  raf = requestAnimationFrame(draw)
}

// --- Text sequence ---
function startSequence() {
  // "Turning chaos" appears first
  setTimeout(() => { showChaos.value = true }, 300)

  // After 1.8s, trigger transition + "into clarity"
  setTimeout(() => {
    phase = 1
    showClarity.value = true
  }, 2000)

  // Sub text
  setTimeout(() => { showSub.value = true }, 3200)

  // Actions
  setTimeout(() => { showActions.value = true }, 3800)
}

onMounted(() => {
  resize()
  initParticles()
  startTime = performance.now()
  raf = requestAnimationFrame(draw)
  startSequence()

  window.addEventListener('resize', () => {
    resize()
    cx = w * 0.55
    cy = h * 0.48
  }, { passive: true })
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
})
</script>

<style scoped>
.nb-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 280px;
  overflow: hidden;
}

/* Canvas */
.nb-hero__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Content */
.nb-hero__content {
  position: relative;
  z-index: 1;
  max-width: 960px;
}

.nb-hero__title {
  font-size: clamp(2.5rem, 5.5vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 36px;
  white-space: nowrap;
}

.nb-hero__word {
  display: inline;
  vertical-align: baseline;
  line-height: inherit;
  opacity: 0;
  transition: opacity 1s var(--nb-ease), transform 1s var(--nb-ease), filter 1s ease;
}

.nb-hero__word--chaos {
  transform: translateY(20px);
  filter: blur(6px);
  color: var(--nb-text);
}

.nb-hero__word--chaos.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.nb-hero__word--clarity {
  transform: translateY(20px);
  filter: blur(8px);
  background: linear-gradient(135deg, var(--nb-accent), #7c6cf0, #6a8cd4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nb-hero__word--clarity.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.nb-hero__sub {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--nb-text-2);
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 44px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.8s ease 0s, transform 0.8s var(--nb-ease) 0s;
}

.nb-hero__sub.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.nb-hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.8s ease 0s, transform 0.8s var(--nb-ease) 0s;
}

.nb-hero__actions.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Scroll indicator */
.nb-hero__scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 1s ease 0.5s;
}

.nb-hero__scroll.is-visible {
  opacity: 1;
}

.nb-hero__scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(180deg, var(--nb-text-3), transparent);
  animation: scroll-hint 2s ease-in-out infinite;
}

@keyframes scroll-hint {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); transform-origin: top; }
  50% { opacity: 0.6; transform: scaleY(1); }
}

/* ── Responsive ───────────────── */
@media (max-width: 1024px) {
  .nb-hero__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nb-hero__actions {
    justify-content: center;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .nb-hero {
    padding-top: 100px;
  }
}

@media (max-width: 768px) {
  .nb-hero {
    padding: 140px 0 100px;
    min-height: auto;
  }

  .nb-hero__title {
    font-size: clamp(2rem, 7vw, 3rem);
    white-space: normal;
  }

  .nb-hero__word {
    display: block;
  }
}
</style>
