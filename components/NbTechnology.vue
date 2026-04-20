<template>
  <section class="nb-section">
    <div class="nb-container">
      <span class="nb-eyebrow nb-reveal">Our technology</span>

      <div class="tech__hero nb-card nb-card--gradient nb-reveal" data-delay="1">
        <div class="tech__hero-inner">
          <div class="tech__hero-content">
            <h3 class="tech__label">Atractos Platform</h3>
            <h2>A controlled, transparent AI system</h2>
            <p class="tech__hero-lead">
              We don't build generic AI. We work in specific domains where decisions carry real consequences — and where human expertise must stay at the centre.
            </p>
          </div>

          <div class="tech__hero-detail">
            <p>
              Atractos is an impact-aware AI system that makes the pipeline visible, traceable, and human-supervised. Built for real-world domains, it enables experts to understand, intervene, and shape decisions as they evolve.
            </p>
          </div>
        </div>

        <div class="tech__features nb-grid nb-grid--3">
          <div
            v-for="(feat, i) in features"
            :key="feat.title"
            class="tech__feature nb-reveal"
            :data-delay="i + 2"
          >
            <h3>{{ feat.title }}</h3>
            <p>{{ feat.desc }}</p>
          </div>
        </div>

        <!-- Ambient card glow -->
        <div class="tech__card-glow" aria-hidden="true" />
      </div>

      <div class="tech__cta nb-reveal" data-delay="4">
        <NuxtLink to="/research" class="nb-btn nb-btn--primary">
          Explore the platform <span class="arrow">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Transparent Pipeline',
    desc: 'Every processing step is visible and auditable — no black boxes, no hidden transformations.',
  },
  {
    title: 'Human-Supervised',
    desc: 'Experts can intervene, correct, and guide AI decisions at any point in the pipeline.',
  },
  {
    title: 'Domain-Specific',
    desc: 'Purpose-built for domains where precision matters: energy, policy, cybersecurity, mobility.',
  },
]
</script>

<style scoped>
.tech__hero {
  padding: 56px 48px;
  position: relative;
  overflow: hidden;
}

.tech__hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--nb-border);
}

.tech__hero-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tech__label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--nb-accent);
  letter-spacing: -0.01em;
}

.tech__hero-content h2 {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
}

.tech__hero-lead {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--nb-text-2);
}

.tech__hero-detail {
  display: flex;
  align-items: center;
}

.tech__hero-detail p {
  font-size: 0.9375rem;
  line-height: 1.8;
}

.tech__features {
  gap: 40px;
}

.tech__feature h3 {
  font-size: 0.875rem;
  color: var(--nb-text);
  margin-bottom: 8px;
}

.tech__feature p {
  font-size: 0.8125rem;
  line-height: 1.65;
  color: var(--nb-text-3);
}

.tech__card-glow {
  position: absolute;
  top: -40%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.04) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}

.tech__cta {
  text-align: center;
  margin-top: 48px;
}

@media (max-width: 1024px) {
  .tech__hero-inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .tech__hero {
    padding: 40px 28px;
  }
}
</style>
