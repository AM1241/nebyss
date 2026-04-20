<template>
  <section class="pillars">
    <div class="nb-container">
      <div class="pillars__grid">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.title"
          class="pillars__item nb-reveal"
          :data-delay="i + 1"
        >
          <div class="pillars__bar" />
          <div class="pillars__text">
            <h3 class="pillars__title">{{ pillar.title }}</h3>
            <p class="pillars__desc">{{ pillar.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pillars = [
  {
    title: 'Domain-specific by design',
    desc: 'Built for real-world fields where decisions carry consequences — not generic solutions.',
  },
  {
    title: 'Human-supervised',
    desc: 'Experts stay in the loop at every stage — AI augments judgment, never replaces it.',
  },
  {
    title: 'Transparent pipeline',
    desc: 'Every step is visible, traceable, and auditable. No black boxes.',
  },
  {
    title: 'European values',
    desc: 'Privacy, accountability, and public interest built into the architecture.',
  },
]
</script>

<style scoped>
.pillars {
  padding: 64px 0;
  border-bottom: 1px solid var(--nb-border);
  background: var(--nb-bg);
}

.pillars__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.pillars__item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.pillars__bar {
  flex-shrink: 0;
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, var(--nb-accent), rgba(167, 139, 250, 0.2));
  border-radius: 2px;
  margin-top: 2px;
}

.pillars__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--nb-text);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.pillars__desc {
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--nb-text-2);
}

@media (max-width: 1024px) {
  .pillars__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}

@media (max-width: 640px) {
  .pillars__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
