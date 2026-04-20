<template>
  <main>
    <!-- Hero -->
    <section class="nb-section page-hero">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">Research Areas</span>
        <h1 class="page-hero__title nb-reveal" data-delay="1">
          Areas we work
        </h1>
        <p class="page-hero__desc nb-reveal" data-delay="2">
          We don't build generic AI. We work in specific domains where decisions carry real consequences — and where human expertise must stay at the centre.
        </p>
      </div>
    </section>

    <!-- Domains -->
    <section class="nb-section nb-section--alt">
      <div class="nb-container">
        <div class="domains">
          <article
            v-for="(domain, i) in domains"
            :key="domain.title"
            class="domain nb-reveal"
            :data-delay="(i % 3) + 1"
          >
            <span class="domain__tag">{{ domain.tag }}</span>
            <h2 class="domain__title">{{ domain.title }}</h2>
            <div class="domain__body">
              <p v-for="(para, j) in domain.paragraphs" :key="j">{{ para }}</p>
            </div>
            <p class="domain__partners">{{ domain.partners }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Based in Europe -->
    <section class="nb-section europe-section">
      <div class="nb-container">
        <h2 class="europe-title nb-reveal">Based in Europe.</h2>
        <h2 class="europe-title nb-reveal" data-delay="1">Working with partners across the continent.</h2>
      </div>
    </section>

    <!-- Where we come from -->
    <section class="nb-section nb-section--alt">
      <div class="nb-container">
        <div class="origin nb-reveal">
          <div class="origin__text">
            <h2>Where we come from</h2>
            <p>
              Our team brings together experience in machine learning, energy systems, public policy, and EU research — with a shared conviction that AI must be built differently.
            </p>
            <p>
              We've worked on EU-funded research projects, built AI for energy and public policy, and seen firsthand how technology gets deployed without the oversight it needs. Nebyss Innovation comes from that experience — and from the decision to do it differently.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="nb-section cta-section">
      <div class="nb-container">
        <h2 class="cta-quote nb-reveal">
          Working in one of these domains? <span class="accent">Let's explore what we can build together.</span>
        </h2>
        <div class="cta-actions nb-reveal" data-delay="1">
          <NuxtLink to="/contact" class="nb-btn nb-btn--primary">
            Get in touch <span class="arrow">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Where We Work — Nebyss Innovation' })
useScrollReveal()

const domains = [
  {
    tag: 'Energy',
    title: 'AI for a flexible, renewable-powered grid',
    paragraphs: [
      'Using AI to coordinate consumption, charging, storage, and generation across thousands of connected devices — turning everyday energy assets into reliable grid resources.',
      'Combining high-resolution meteorology with machine learning and asset-level data to deliver solar production forecasts. Reducing uncertainty and making renewable generation easier to integrate at scale.',
    ],
    partners: 'Who we work with: Grid operators, energy aggregators, market actors, renewable asset owners.',
  },
  {
    tag: 'Social & Public Policy',
    title: 'AI for better public decisions',
    paragraphs: [
      'Using machine learning, data science, and systems thinking to support policy design, evaluation, and long-term planning. Focus areas include social inclusion, skills and employment, regional development, and digital transformation.',
      'The goal isn\'t to automate policy — it\'s to make it more responsive, more transparent, and easier to explain.',
    ],
    partners: 'Who we work with: Public authorities, cities, researchers, civil society organisations.',
  },
  {
    tag: 'Dissemination & Exploitation',
    title: 'From research results to real-world use',
    paragraphs: [
      'Helping projects tell their story clearly. Translating complex research into messages that resonate with policymakers, practitioners, industry, and citizens.',
      'Turning results into real-world value. Shaping sustainable pathways for uptake and continuation beyond the project\'s lifetime.',
    ],
    partners: 'Who we work with: EU-funded consortia, research organisations, public institutions, innovation networks.',
  },
]
</script>

<style scoped>
.page-hero {
  padding: 160px 0 80px;
}

.page-hero__title {
  font-size: clamp(2.2rem, 4.5vw, 3.25rem);
  max-width: 900px;
  margin-bottom: 24px;
}

.page-hero__desc {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  max-width: 640px;
  line-height: 1.75;
}

.accent {
  background: linear-gradient(135deg, var(--nb-accent), #7c6cf0, #6a8cd4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ── Domains ── */
.domains {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.domain {
  max-width: 800px;
}

.domain__tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--nb-accent);
  margin-bottom: 16px;
}

.domain__title {
  font-size: clamp(1.5rem, 2.8vw, 2.25rem);
  margin-bottom: 28px;
  letter-spacing: -0.015em;
}

.domain__body p {
  font-size: 0.9375rem;
  line-height: 1.8;
  color: var(--nb-text-2);
  margin-bottom: 16px;
}

.domain__partners {
  font-size: 0.8125rem;
  color: var(--nb-text-3);
  margin-top: 24px;
  font-style: italic;
}

/* ── Europe ── */
.europe-section {
  padding: 120px 0;
}

.europe-title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  letter-spacing: -0.02em;
}

.europe-title + .europe-title {
  margin-top: 8px;
  color: var(--nb-text-2);
}

/* ── Origin ── */
.origin__text {
  max-width: 720px;
}

.origin__text h2 {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  margin-bottom: 24px;
}

.origin__text p {
  font-size: 0.9375rem;
  line-height: 1.8;
  color: var(--nb-text-2);
  margin-bottom: 16px;
}

/* ── CTA ── */
.cta-section {
  padding: 100px 0;
  text-align: center;
}

.cta-quote {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  max-width: 700px;
  margin: 0 auto 32px;
  line-height: 1.5;
}

.cta-actions {
  display: flex;
  justify-content: center;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .europe-section {
    padding: 80px 0;
  }
}
</style>