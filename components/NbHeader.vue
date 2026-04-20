<template>
  <header class="nb-header" :class="{ scrolled: isScrolled }">
    <div class="nb-container nb-header__inner">
      <NuxtLink to="/" class="nb-header__logo">
        <img src="/img/logo-icon.png" alt="Nebyss" class="nb-header__logo-icon" width="28" height="28" />
        <span class="nb-header__logo-text">Nebyss</span>
      </NuxtLink>

      <nav class="nb-header__nav" :class="{ open: mobileOpen }">
        <NuxtLink to="/research" class="nb-header__link" @click="mobileOpen = false">
          Our Work
        </NuxtLink>
        <NuxtLink to="/where-we-work" class="nb-header__link" @click="mobileOpen = false">
          Research Areas
        </NuxtLink>
        <NuxtLink to="/about" class="nb-header__link" @click="mobileOpen = false">
          About
        </NuxtLink>
        <NuxtLink to="/contact" class="nb-header__link nb-header__link--cta" @click="mobileOpen = false">
          Contact
        </NuxtLink>
      </nav>

      <button
        class="nb-header__burger"
        :class="{ active: mobileOpen }"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span /><span /><span />
      </button>
    </div>

    <!-- Progress bar -->
    <div id="nb-progress" :style="{ width: progressWidth }" />
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const mobileOpen = ref(false)
const progressWidth = ref('0%')

function onScroll() {
  isScrolled.value = window.scrollY > 40

  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight > 0) {
    progressWidth.value = `${(window.scrollY / docHeight) * 100}%`
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.nb-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(12, 12, 12, 0.6);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border-bottom: 1px solid transparent;
  transition: all 0.5s var(--nb-ease);
}

.nb-header.scrolled {
  background: rgba(12, 12, 12, 0.85);
  border-bottom-color: var(--nb-border);
}

.nb-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nb-header__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 1;
}

.nb-header__logo:hover { opacity: 1; }

.nb-header__logo-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.nb-header__logo-text {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--nb-text);
}

.nb-header__nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nb-header__link {
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--nb-text-2);
  padding: 6px 14px;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nb-header__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 14px;
  right: 14px;
  height: 1.5px;
  background: linear-gradient(90deg, var(--nb-accent), #7c6cf0, #6a8cd4);
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s var(--nb-ease), opacity 0.4s ease;
  opacity: 0;
}

.nb-header__link:hover {
  color: var(--nb-text);
  background: rgba(255, 255, 255, 0.04);
  opacity: 1;
}

.nb-header__link.router-link-active {
  color: var(--nb-text);
  font-weight: 500;
}

.nb-header__link.router-link-active::after {
  transform: scaleX(1);
  opacity: 1;
}

.nb-header__link--cta {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--nb-border-md);
  color: var(--nb-text);
  margin-left: 4px;
}

.nb-header__link--cta::after {
  display: none;
}

.nb-header__link--cta.router-link-active {
  background: var(--nb-accent);
  border-color: var(--nb-accent);
  color: #0c0c0c;
  font-weight: 500;
}

.nb-header__link--cta:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--nb-border-hi);
}

/* Burger */
.nb-header__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
}

.nb-header__burger span {
  display: block;
  width: 20px;
  height: 1.5px;
  background: var(--nb-text);
  border-radius: 2px;
  transition: all 0.3s var(--nb-ease);
  transform-origin: center;
}

.nb-header__burger.active span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.nb-header__burger.active span:nth-child(2) {
  opacity: 0;
}

.nb-header__burger.active span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nb-header__burger {
    display: flex;
  }

  .nb-header__nav {
    position: fixed;
    inset: 0;
    background: rgba(12, 12, 12, 0.97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  .nb-header__nav.open {
    opacity: 1;
    pointer-events: all;
  }

  .nb-header__link {
    font-size: 1.1rem;
    padding: 12px 24px;
  }
}
</style>
