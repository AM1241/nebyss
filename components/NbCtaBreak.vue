<template>
  <section class="cta-break">
    <div class="nb-container cta-break__inner">
      <h2 class="cta-break__title nb-reveal">Ready to get started?</h2>
      <p class="cta-break__desc nb-reveal" data-delay="1">
        Curious how domain-specific AI could fit your challenges? Let's talk. We're partnering with teams solving high-stakes problems.
      </p>
      <NuxtLink to="/contact" class="cta-break__btn nb-reveal" data-delay="2">
        Get in touch →
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.cta-break {
  position: relative;
  padding: 120px 0;
  background: #f5f2ed;
  overflow: hidden;
}

.cta-break__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 640px;
}

.cta-break__title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 600;
  color: #0c0c0c;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.cta-break__desc {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: rgba(12, 12, 12, 0.55);
  max-width: 520px;
  margin-bottom: 40px;
}

.cta-break__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--nb-font);
  font-size: 0.9375rem;
  font-weight: 500;
  padding: 14px 32px;
  border-radius: 100px;
  background: #0c0c0c;
  color: #f5f2ed;
  text-decoration: none;
  transition: all 0.4s var(--nb-ease);
}

.cta-break__btn:hover {
  background: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  opacity: 1;
}

@media (max-width: 768px) {
  .cta-break {
    padding: 80px 0;
  }
}
</style>
