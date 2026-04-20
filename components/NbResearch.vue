<template>
  <section class="nb-section nb-section--alt">
    <div class="nb-container">
      <span class="nb-eyebrow nb-reveal">Research & Innovation</span>

      <div class="research__header nb-grid nb-grid--60-40">
        <div>
          <h2 class="nb-reveal" data-delay="1">
            Advancing research into real-world systems
          </h2>
        </div>
        <div class="research__header-desc">
          <p class="nb-reveal" data-delay="2">
            Active participation in EU-funded and collaborative research initiatives, developing applied methodologies and AI frameworks that translate emerging knowledge into real-world practice.
          </p>
        </div>
      </div>

      <h3 class="research__areas-title nb-reveal" data-delay="3">Areas of research</h3>
      <p class="research__areas-desc nb-reveal" data-delay="3">
        Research covers high-impact domains where AI meets real-world complexity. Across energy, policy, cybersecurity, mobility, and society, emerging knowledge is translated into applied systems and practical solutions.
      </p>

      <div class="research__grid nb-reveal" data-delay="4">
        <article
          v-for="(area, i) in areas"
          :key="area.title"
          class="nb-card nb-card--sm nb-reveal"
          :data-delay="i + 1"
        >
          <h3>{{ area.title }}</h3>
          <p>{{ area.desc }}</p>
        </article>
      </div>

      <div class="research__cta nb-reveal" data-delay="4">
        <NuxtLink to="/research" class="nb-btn">
          Explore research areas <span class="arrow">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const areas = [
  {
    title: 'Energy & Sustainability',
    desc: 'AI-powered analytics for energy systems, grid optimization, and sustainability forecasting across complex interconnected networks.',
  },
  {
    title: 'Policy & Governance',
    desc: 'Translating policy complexity into structured, actionable intelligence for decision-makers in high-stakes regulatory environments.',
  },
  {
    title: 'Cybersecurity',
    desc: 'Adaptive threat detection and anomaly identification systems that learn from evolving attack patterns in real-time.',
  },
  {
    title: 'Mobility & Transport',
    desc: 'Intelligent systems for transport planning, traffic analysis, and sustainable mobility across interconnected urban networks.',
  },
  {
    title: 'Society & Digital',
    desc: 'Applied AI for social impact, digital transformation, and emerging societal challenges where data meets public interest.',
  },
]
</script>

<style scoped>
.research__header {
  margin-bottom: 56px;
  align-items: end;
}

.research__header-desc {
  display: flex;
  align-items: flex-end;
}

.research__areas-title {
  font-size: clamp(1.5rem, 2.8vw, 2.25rem);
  margin-top: 64px;
  margin-bottom: 16px;
}

.research__areas-desc {
  font-size: 0.9375rem;
  line-height: 1.8;
  color: var(--nb-text-2);
  max-width: 720px;
  margin-bottom: 48px;
}

.research__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 56px;
}

.research__grid h3 {
  margin-bottom: 12px;
}

.research__grid p {
  font-size: 0.875rem;
  line-height: 1.7;
}

.research__cta {
  text-align: center;
}

@media (max-width: 1024px) {
  .research__header {
    margin-bottom: 40px;
  }

  .research__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .research__grid {
    grid-template-columns: 1fr;
  }
}
</style>
