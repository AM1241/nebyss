<template>
  <main>
    <article v-if="item">
      <!-- Hero -->
      <section class="nb-section post-hero">
        <div class="nb-container post-hero__inner">
          <NuxtLink to="/news" class="post-back">← Back to News</NuxtLink>
          <div class="post-hero__meta">
            <time class="content-card__date">{{ formatDate(item.date) }}</time>
            <span v-if="item.category" class="nb-pill">{{ categoryLabel(item.category) }}</span>
          </div>
          <h1 class="post-hero__title nb-reveal">{{ item.title }}</h1>
          <p v-if="item.excerpt" class="post-hero__excerpt nb-reveal" data-delay="1">{{ item.excerpt }}</p>
          <a
            v-if="item.external_link"
            :href="item.external_link"
            target="_blank"
            rel="noopener noreferrer"
            class="nb-btn nb-reveal"
            data-delay="2"
          >
            View original source ↗
          </a>
        </div>
      </section>

      <!-- Body -->
      <section class="nb-section post-body-section">
        <div class="nb-container post-body-container">
          <ContentRenderer :value="item" class="post-body nb-reveal" />
        </div>
      </section>

      <!-- CTA -->
      <section class="nb-section post-cta-section">
        <div class="nb-container">
          <div class="post-cta nb-reveal">
            <h2>Interested in working with us?</h2>
            <NuxtLink to="/contact" class="nb-btn nb-btn--primary">Get in touch →</NuxtLink>
          </div>
        </div>
      </section>
    </article>

    <div v-else class="nb-container" style="padding: 120px 24px;">
      <p>News item not found.</p>
      <NuxtLink to="/news" class="nb-btn" style="margin-top: 24px;">← Back to News</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
useScrollReveal()

const { data: item } = await useAsyncData(`news-${route.path}`, () =>
  queryCollection('news').path(route.path).first()
)

if (!item.value) {
  throw createError({ statusCode: 404, statusMessage: 'News item not found' })
}

useHead({ title: `${item.value?.title ?? 'News'} — Nebyss Innovation` })

const categoryLabels: Record<string, string> = {
  announcement: 'Announcement',
  partnership: 'Partnership',
  research: 'Research',
  event: 'Event',
  press: 'Press',
}

function categoryLabel(cat: string): string {
  return categoryLabels[cat] ?? cat
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
