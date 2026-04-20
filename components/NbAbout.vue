<template>
  <section class="nb-section nb-section--alt">
    <div class="nb-container">
      <span class="nb-eyebrow nb-reveal">About us</span>

      <div class="about__grid nb-grid nb-grid--60-40">
        <div>
          <h2 class="nb-reveal" data-delay="1">Who we are</h2>

          <p class="about__lead nb-reveal" data-delay="2">
            Nebyss Innovation is a European AI company building domain-specific, human-supervised intelligence. We started because we saw AI being deployed without the expertise, transparency, or accountability that real-world decisions demand. We're building the alternative.
          </p>

          <div class="about__sub nb-reveal" data-delay="3">
            <h3>Where we come from</h3>
            <p>
              Our team brings together experience in machine learning, energy systems, public policy, and EU research — with a shared conviction that AI must be built differently.
            </p>
          </div>

          <div class="about__cta nb-reveal" data-delay="4">
            <NuxtLink to="/about" class="nb-btn">
              Learn more <span class="arrow">→</span>
            </NuxtLink>
          </div>
        </div>

        <div class="about__aside nb-reveal nb-reveal--left" data-delay="2">
          <div class="about__values">
            <div v-for="value in values" :key="value.title" class="about__value">
              <h3>{{ value.title }}</h3>
              <p>{{ value.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const values = [
  {
    title: 'Transparency',
    desc: 'Every decision pipeline is visible and auditable.',
  },
  {
    title: 'Human-first',
    desc: 'AI augments expertise, never replaces judgment.',
  },
  {
    title: 'Domain expertise',
    desc: 'Built by people who understand the fields we serve.',
  },
  {
    title: 'European values',
    desc: 'Privacy, accountability, and public interest by design.',
  },
]
</script>

<style scoped>
.about__lead {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.8;
  color: var(--nb-text-2);
  margin-top: 28px;
  margin-bottom: 32px;
}

.about__sub {
  margin-bottom: 36px;
}

.about__sub h3 {
  font-size: 0.875rem;
  color: var(--nb-text);
  margin-bottom: 10px;
  font-weight: 500;
}

.about__sub p {
  font-size: 0.9375rem;
  line-height: 1.75;
}

.about__aside {
  display: flex;
  align-items: center;
}

.about__values {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.about__value {
  padding: 24px 28px;
  background: var(--nb-bg-card);
  border: 1px solid var(--nb-border);
  border-radius: var(--nb-radius);
  transition: border-color 0.4s ease;
}

.about__value:hover {
  border-color: var(--nb-border-md);
}

.about__value h3 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--nb-text);
  margin-bottom: 6px;
}

.about__value p {
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--nb-text-3);
}
</style>
