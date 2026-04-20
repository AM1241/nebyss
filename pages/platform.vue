<template>
  <main>
    <section class="nb-section page-hero">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">Atractos Platform</span>
        <h1 class="page-hero__title nb-reveal" data-delay="1">
          A transparent AI pipeline, <span class="accent">built for oversight</span>
        </h1>
        <p class="page-hero__desc nb-reveal" data-delay="2">
          Atractos is the core technology platform behind everything we build. A modular, human-supervised AI pipeline where every step — from data ingestion to output — is traceable, auditable, and configurable.
        </p>
      </div>
    </section>

    <!-- How it works -->
    <section class="nb-section nb-section--alt">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">How it works</span>
        <h2 class="nb-reveal" data-delay="1">From raw data to trusted insight</h2>
        <div class="pipeline">
          <div
            v-for="(step, i) in pipeline"
            :key="step.title"
            class="pipeline__step nb-reveal"
            :data-delay="(i % 4) + 1"
          >
            <div class="pipeline__number">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3 class="pipeline__title">{{ step.title }}</h3>
            <p class="pipeline__desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="nb-section">
      <div class="nb-container">
        <div class="capabilities-split">
          <div class="capabilities-split__text">
            <span class="nb-eyebrow nb-reveal">Capabilities</span>
            <h2 class="nb-reveal" data-delay="1">What Atractos enables</h2>
            <p class="nb-reveal" data-delay="2">
              Atractos isn't a product you install — it's the foundation we deploy. Each implementation is tailored to a specific domain, with custom modules for data handling, model selection, output validation, and human review.
            </p>
          </div>
          <div class="capabilities-list nb-reveal" data-delay="2">
            <div v-for="cap in capabilities" :key="cap.title" class="capability">
              <h3>{{ cap.title }}</h3>
              <p>{{ cap.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Principles -->
    <section class="nb-section nb-section--alt">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">Design principles</span>
        <h2 class="nb-reveal" data-delay="1">Built different, on purpose</h2>
        <div class="principles nb-reveal" data-delay="2">
          <div v-for="p in principles" :key="p.title" class="principle">
            <h3>{{ p.title }}</h3>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <NbCtaBreak />
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Atractos Platform — Nebyss Innovation' })
useScrollReveal()

const pipeline = [
  {
    title: 'Data ingestion',
    desc: 'Structured and unstructured data from domain-specific sources — APIs, databases, documents, real-time feeds — normalized and validated before processing.',
  },
  {
    title: 'Feature engineering',
    desc: 'Domain-aware feature extraction that transforms raw data into meaningful signals, guided by expert knowledge and automated quality checks.',
  },
  {
    title: 'Model execution',
    desc: 'Configurable model layers — from statistical baselines to deep learning — selected and tuned per domain. No one-size-fits-all.',
  },
  {
    title: 'Output validation',
    desc: 'Automated sanity checks, confidence scoring, and anomaly flagging before any result reaches a human decision-maker.',
  },
  {
    title: 'Human review',
    desc: 'Expert-in-the-loop checkpoints where domain specialists validate, override, or approve outputs before deployment.',
  },
]

const capabilities = [
  { title: 'Multi-source data fusion', desc: 'Combine heterogeneous data sources into unified, domain-specific data models.' },
  { title: 'Configurable pipelines', desc: 'Modular architecture — add, remove, or reconfigure pipeline stages per use case.' },
  { title: 'Audit trails', desc: 'Complete lineage from input to output, queryable and exportable for compliance.' },
  { title: 'Real-time & batch processing', desc: 'Dual-mode processing for both live monitoring and retrospective analysis.' },
  { title: 'API-first deployment', desc: 'RESTful interfaces for integration into existing enterprise systems and workflows.' },
]

const principles = [
  { title: 'Transparency over performance', desc: 'We would rather have a slightly less accurate model that we can fully explain than a marginally better one that operates as a black box.' },
  { title: 'Human supervision always', desc: 'No fully autonomous decisions in high-stakes contexts. Humans remain in the loop at every critical juncture.' },
  { title: 'Domain specificity', desc: 'Each deployment is tailored to its domain. Generic tools produce generic results — we don\'t do generic.' },
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

.accent {
  background: linear-gradient(135deg, var(--nb-accent), #7c6cf0, #6a8cd4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-hero__desc {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  max-width: 640px;
  line-height: 1.75;
}

/* Pipeline */
.pipeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.pipeline__number {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--nb-accent);
  letter-spacing: 0.05em;
  margin-bottom: 16px;
  font-variant-numeric: tabular-nums;
}

.pipeline__title {
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.pipeline__desc {
  font-size: 0.8125rem;
  line-height: 1.7;
  color: var(--nb-text-2);
}

/* Capabilities */
.capabilities-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.capabilities-split__text h2 {
  margin-bottom: 20px;
}

.capabilities-split__text p {
  line-height: 1.75;
}

.capabilities-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.capability h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.capability p {
  font-size: 0.8125rem;
  line-height: 1.65;
  color: var(--nb-text-2);
}

/* Principles */
.principles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 48px;
}

.principle h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.principle p {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--nb-text-2);
}

@media (max-width: 1024px) {
  .pipeline {
    grid-template-columns: repeat(3, 1fr);
  }

  .capabilities-split {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .principles {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .pipeline {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .pipeline {
    grid-template-columns: 1fr;
  }
}
</style>
