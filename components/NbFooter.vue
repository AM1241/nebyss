<template>
  <footer class="nb-footer">
    <div class="nb-footer__accent" aria-hidden="true" />

    <div class="nb-container">
      <div class="nb-footer__main">
        <!-- Brand column -->
        <div class="nb-footer__brand">
          <img src="/img/logo-full.png" alt="Nebyss Innovation" class="nb-footer__logo-img" />
          <p class="nb-footer__tagline">Shaping Intelligence from Ambiguity.</p>
        </div>

        <!-- Location -->
        <div class="nb-footer__col">
          <h4 class="nb-footer__heading">Location</h4>
          <address class="nb-footer__address">
            Via Malta 12,<br />
            Valletta VLT 1000,<br />
            Malta
          </address>
        </div>

        <!-- Navigation -->
        <div class="nb-footer__col">
          <h4 class="nb-footer__heading">Menu</h4>
          <nav class="nb-footer__nav">
            <NuxtLink to="/research">Our Work</NuxtLink>
            <NuxtLink to="/where-we-work">Research Areas</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </nav>
        </div>
      </div>

      <div class="nb-footer__divider" />

      <div class="nb-footer__bottom">
        <span class="nb-footer__copy">© {{ year }} Nebyss Innovation.</span>
        <NuxtLink to="/privacy" class="nb-footer__privacy">Privacy policy</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.nb-footer {
  position: relative;
  padding: 64px 0 40px;
  background: var(--nb-bg);
}

.nb-footer__accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(167, 139, 250, 0.20) 30%,
    rgba(140, 100, 180, 0.12) 70%,
    transparent 100%
  );
}

.nb-footer__main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.nb-footer__logo-img {
  height: 32px;
  width: auto;
  object-fit: contain;
  opacity: 0.75;
  display: block;
  margin-bottom: 12px;
  transition: opacity 0.4s ease;
}

.nb-footer__logo-img:hover {
  opacity: 1;
}

.nb-footer__tagline {
  font-size: 0.8125rem;
  color: var(--nb-text-3);
  font-style: italic;
}

.nb-footer__heading {
  font-size: 0.68rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--nb-text-3);
  margin-bottom: 16px;
}

.nb-footer__address {
  font-style: normal;
  font-size: 0.8125rem;
  color: var(--nb-text-2);
  line-height: 1.65;
}

.nb-footer__nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nb-footer__nav a {
  font-size: 0.8125rem;
  color: var(--nb-text-2);
  transition: all 0.3s var(--nb-ease);
}

.nb-footer__nav a:hover {
  color: var(--nb-text);
  transform: translateX(4px);
  opacity: 1;
}

.nb-footer__divider {
  height: 1px;
  background: var(--nb-border);
  margin-bottom: 24px;
}

.nb-footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nb-footer__copy {
  font-size: 0.75rem;
  color: var(--nb-text-4);
}

.nb-footer__privacy {
  font-size: 0.75rem;
  color: var(--nb-text-4);
}

.nb-footer__privacy:hover {
  color: var(--nb-text-2);
  opacity: 1;
}

@media (max-width: 768px) {
  .nb-footer__main {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .nb-footer__bottom {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
}
</style>
