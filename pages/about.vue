<template>
  <main>
    <!-- Hero: Who we are -->
    <section class="nb-section page-hero">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">About</span>
        <h1 class="page-hero__title nb-reveal" data-delay="1">
          Who we are
        </h1>
        <p class="page-hero__desc nb-reveal" data-delay="2">
          Nebyss Innovation is a European AI company building domain-specific, human-supervised intelligence. We started because we saw AI being deployed without the expertise, transparency, or accountability that real-world decisions demand. We're building the alternative.
        </p>
      </div>
    </section>

    <!-- What we believe -->
    <section class="nb-section nb-section--alt">
      <div class="nb-container">
        <h2 class="section-title nb-reveal">What we believe</h2>
        <div class="beliefs-grid">
          <div
            v-for="(belief, i) in beliefs"
            :key="belief.title"
            class="belief nb-reveal"
            :data-delay="(i % 3) + 1"
          >
            <h3>{{ belief.title }}</h3>
            <p>{{ belief.desc }}</p>
          </div>
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
          Want to know more, collaborate, or join us? <span class="accent">We're always open to conversations.</span>
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
useHead({ title: 'About — Nebyss Innovation' })
useScrollReveal()

const beliefs = [
  {
    title: 'AI should be a tool, not a replacement.',
    desc: 'Human judgment must stay at the centre — not as oversight after the fact, but as a design principle.',
  },
  {
    title: 'Domain expertise is not optional.',
    desc: 'Generic models applied to critical industries without structural domain knowledge create risk, not value.',
  },
  {
    title: 'Transparency is non-negotiable.',
    desc: 'If you can\'t trace a decision from data to outcome, you can\'t trust it. And you can\'t improve it.',
  },
  {
    title: 'Impact must be visible.',
    desc: 'Every choice in an AI pipeline has consequences. They should be measurable before deployment, not discovered after failure.',
  },
  {
    title: 'Building honestly matters.',
    desc: 'We\'re early. We say so. A company that preaches transparency should practise it about itself.',
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
  max-width: 680px;
  line-height: 1.8;
}

.accent {
  background: linear-gradient(135deg, var(--nb-accent), #7c6cf0, #6a8cd4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-title {
  font-size: clamp(1.5rem, 2.8vw, 2.25rem);
  margin-bottom: 48px;
}

/* ── Beliefs ── */
.beliefs-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 720px;
}

.belief h3 {
  font-size: 1.0625rem;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.belief p {
  font-size: 0.9375rem;
  line-height: 1.8;
  color: var(--nb-text-2);
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
