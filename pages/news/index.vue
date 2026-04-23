<template>
  <main>
    <section class="nb-section page-hero">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">Updates</span>
        <h1 class="page-hero__title nb-reveal" data-delay="1">News</h1>
        <p class="page-hero__desc nb-reveal" data-delay="2">
          Announcements, partnerships, research milestones, and events from Nebyss Innovation.
        </p>
      </div>
    </section>

    <section class="nb-section">
      <div class="nb-container">
        <div v-if="newsItems && newsItems.length" class="content-grid">
          <component
            :is="item.external_link ? 'a' : NuxtLink"
            v-for="(item, i) in newsItems"
            :key="item.path"
            v-bind="item.external_link
              ? { href: item.external_link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: item.path }"
            class="content-card nb-reveal"
            :data-delay="(i % 3) + 1"
          >
            <div class="content-card__meta">
              <time class="content-card__date">{{ formatDate(item.date) }}</time>
              <span v-if="item.category" class="nb-pill">{{ categoryLabel(item.category) }}</span>
            </div>
            <h2 class="content-card__title">{{ item.title }}</h2>
            <p class="content-card__excerpt">{{ item.excerpt }}</p>
            <span class="content-card__read">
              {{ item.external_link ? 'Read more ↗' : 'Read more →' }}
            </span>
          </component>
        </div>

        <div v-else class="content-empty nb-reveal">
          <p>No news yet. Check back soon.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'

useHead({ title: 'News — Nebyss Innovation' })
useScrollReveal()

const { data: newsItems } = await useAsyncData('news', () =>
  queryCollection('news').order('date', 'DESC').all()
)

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
