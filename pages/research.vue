<template>
  <main>
    <!-- Hero: The Problem -->
    <section class="nb-section page-hero">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">The problem</span>
        <h1 class="page-hero__title nb-reveal" data-delay="1">
          Today's AI is sold as a miracle cure
        </h1>
        <div class="page-hero__body nb-reveal" data-delay="2">
          <p>
            Behind the hype, generic models are deployed into critical industries without real oversight, domain expertise, or human supervision. Decisions are automated by people who never face their consequences.
          </p>
          <p>
            Problems rooted in human reality are translated into technical tasks, stripped of context, responsibility, and lived experience. Experts are consulted once — then removed from the loop.
          </p>
          <p>
            The result is not just technical risk. It is social drift. Work becomes narrower. Judgment is replaced by outputs. Jobs disappear — not because value was created, but because understanding was outsourced.
          </p>
        </div>
      </div>
    </section>

    <!-- What's Wrong -->
    <section class="nb-section nb-section--alt">
      <div class="nb-container">
        <h2 class="section-title nb-reveal">What's wrong with today's AI</h2>
        <div class="problems-grid">
          <article
            v-for="(problem, i) in problems"
            :key="problem.title"
            class="problem-card nb-card nb-reveal"
            :data-delay="(i % 3) + 1"
          >
            <h3>{{ problem.title }}</h3>
            <p>{{ problem.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Our Answer -->
    <section class="nb-section answer-section">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">Our answer</span>
        <div class="answer-pillars nb-reveal" data-delay="1">
          <span class="answer-pillar">Specific-domain AI.</span>
          <span class="answer-pillar">Human judgment at the center.</span>
          <span class="answer-pillar">Impact-Aware AI Pipelines.</span>
        </div>
      </div>
    </section>

    <!-- Atractos -->
    <section class="nb-section nb-section--alt">
      <div class="nb-container">
        <div class="atractos-hero nb-reveal">
          <div class="atractos-hero__header">
            <h2>Atractos AI Fabric</h2>
            <span class="atractos-status">In active development &middot; Core concepts validated (TRL 3)</span>
          </div>

          <div class="atractos-hero__body">
            <div class="atractos-hero__lead">
              <p>
                Atractos exists to enable conscious human participation in AI. Not passive oversight — but active intervention, ownership, and responsibility.
              </p>
              <p>
                We built a platform that makes the entire AI pipeline visible and traceable — from data and training decisions to deployment and real-world impact. Not just what happened, but why it happened and how it shaped the outcome.
              </p>
            </div>
            <div class="atractos-hero__detail">
              <p>
                This is how human judgment returns to the center. Not as an afterthought. But as a design principle. Experts don't review outcomes after the fact. They actively shape the system as it evolves.
              </p>
              <p>
                And because everything is transparent, domain specialists can finally participate end-to-end — applying their expertise where it truly matters — not as advisors on the side, but as co-creators inside the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System Overview -->
    <section class="nb-section">
      <div class="nb-container">
        <div class="overview nb-reveal">
          <div class="overview__text">
            <h2>System Overview</h2>
            <p>
              The platform organizes the entire machine learning lifecycle into a modular, transparent system where every decision is traceable, explainable, and controllable.
            </p>
            <p>From raw data to live production systems, Nebyss ensures that:</p>
          </div>
          <ul class="overview__list nb-reveal" data-delay="1">
            <li v-for="item in overviewItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Core Capabilities -->
    <section class="nb-section nb-section--alt">
      <div class="nb-container">
        <h2 class="section-title nb-reveal">Core Capabilities</h2>
        <div class="capabilities-grid">
          <div
            v-for="(cap, i) in capabilities"
            :key="cap.title"
            class="capability nb-reveal"
            :data-delay="i + 1"
          >
            <h3>{{ cap.title }}</h3>
            <p>{{ cap.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing -->
    <section class="nb-section closing-section">
      <div class="nb-container">
        <h2 class="closing-quote nb-reveal">
          AI should be a tool that serves human judgment — <span class="accent">not one that replaces it.</span>
        </h2>
      </div>
    </section>

    <NbCtaBreak />
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Our Work — Nebyss Innovation' })
useScrollReveal()

const problems = [
  { title: 'They hide complexity instead of exposing it', desc: 'Pipelines are black boxes. You see outputs, not assumptions. When something breaks, you don\'t know where or why.' },
  { title: 'They treat domains as interchangeable', desc: 'The same generic model is sold to healthcare, law, finance, education — as if all problems share the same logic.' },
  { title: 'They weaken human judgment', desc: 'Over time, people stop questioning results. Trust shifts from understanding to "the system said so."' },
  { title: 'They automate responsibility away', desc: 'When decisions fail, blame is unclear. Accountability dissolves inside the system.' },
  { title: 'They reshape work in harmful ways', desc: 'Jobs disappear without meaningful value creation. People manage tools instead of practising expertise.' },
  { title: 'They create dependence, not empowerment', desc: 'Instead of making humans smarter, they make humans reliant. And reliance is fragile.' },
]

const overviewItems = [
  'Every dataset is validated and versioned',
  'Every model is trained with clear objectives',
  'Every deployment is safe and reversible',
  'Every outcome is monitored and evaluated',
  'Every change shows its real-world impact',
]

const capabilities = [
  { title: 'Full pipeline transparency', desc: 'Data quality, training choices, evaluation gates, deployment history, live performance — everything is designed to be visible and traceable. Not just model explainability. The whole chain.' },
  { title: 'Expert-in-the-loop by default', desc: 'Domain specialists won\'t review outcomes after the fact. They\'ll actively shape the system as it evolves — approving, correcting, overriding, and guiding decisions inside the process.' },
  { title: 'Impact reporting at every step', desc: 'The system is designed to report what changed, why it changed, and what it affected. Consequences should be visible before they happen.' },
]
</script>

<style scoped>
.page-hero {
  padding: 160px 0 80px;
}

.page-hero__title {
  font-size: clamp(2.2rem, 4.5vw, 3.25rem);
  max-width: 900px;
  margin-bottom: 32px;
}

.page-hero__body {
  max-width: 680px;
}

.page-hero__body p {
  font-size: clamp(1rem, 1.5vw, 1.0625rem);
  line-height: 1.8;
  color: var(--nb-text-2);
  margin-bottom: 16px;
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

/* ── Problems Grid ── */
.problems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.problem-card {
  padding: 36px 32px;
}

.problem-card h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.problem-card p {
  font-size: 0.8125rem;
  line-height: 1.7;
  color: var(--nb-text-2);
}

/* ── Our Answer ── */
.answer-section {
  padding: 100px 0;
}

.answer-pillars {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 32px;
}

.answer-pillar {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
  color: var(--nb-accent);
  letter-spacing: -0.02em;
}

/* ── Atractos ── */
.atractos-hero__header {
  margin-bottom: 48px;
}

.atractos-hero__header h2 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin-bottom: 12px;
}

.atractos-status {
  font-size: 0.8125rem;
  color: var(--nb-text-3);
  letter-spacing: 0.01em;
}

.atractos-hero__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
}

.atractos-hero__body p {
  font-size: 0.9375rem;
  line-height: 1.8;
  margin-bottom: 16px;
}

.atractos-hero__lead p:first-child {
  font-size: 1.0625rem;
  color: var(--nb-text);
  font-weight: 500;
  line-height: 1.7;
}

.atractos-hero__detail p {
  color: var(--nb-text-2);
}

/* ── System Overview ── */
.overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}

.overview__text h2 {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  margin-bottom: 24px;
}

.overview__text p {
  font-size: 0.9375rem;
  line-height: 1.8;
  color: var(--nb-text-2);
  margin-bottom: 12px;
}

.overview__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
}

.overview__list li {
  font-size: 0.9375rem;
  line-height: 1.6;
  padding-left: 20px;
  position: relative;
}

.overview__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--nb-accent);
  opacity: 0.6;
}

/* ── Core Capabilities ── */
.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.capability h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.capability p {
  font-size: 0.875rem;
  line-height: 1.75;
  color: var(--nb-text-2);
}

/* ── Closing ── */
.closing-section {
  padding: 120px 0;
  text-align: center;
}

.closing-quote {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.45;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .problems-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .atractos-hero__body {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .overview {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .capabilities-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .problems-grid {
    grid-template-columns: 1fr;
  }

  .answer-pillars {
    flex-direction: column;
    gap: 12px;
  }
}
</style>