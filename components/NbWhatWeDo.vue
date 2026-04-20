<template>
  <section class="nb-section">
    <div class="nb-container">
      <span class="nb-eyebrow nb-reveal">What we do</span>

      <div class="what-we-do__body">
        <p class="what-we-do__lead nb-reveal" data-delay="1">
          In the space where knowledge is raw, ambiguous, and complex, Nebyss Innovation develops AI-driven technologies, intelligent digital solutions and advanced data analytics that convert complexity into clarity and data into actionable insight.
        </p>

        <p class="what-we-do__tagline nb-reveal" data-delay="2">
          We work at the edge of understanding – where clarity begins.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.what-we-do__body {
  max-width: var(--nb-max-w-text);
}

.what-we-do__lead {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  line-height: 1.55;
  color: var(--nb-text);
  font-weight: 400;
  letter-spacing: -0.01em;
  margin-bottom: 28px;
}

.what-we-do__tagline {
  font-size: 1rem;
  color: var(--nb-accent);
  font-style: italic;
  font-weight: 400;
  opacity: 0.85;
}
</style>
