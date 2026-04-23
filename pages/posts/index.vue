<template>
  <main>
    <section class="nb-section page-hero">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">Insights</span>
        <h1 class="page-hero__title nb-reveal" data-delay="1">Blog</h1>
        <p class="page-hero__desc nb-reveal" data-delay="2">
          Perspectives on domain-specific AI, human-supervised intelligence, and building technology responsibly.
        </p>
      </div>
    </section>

    <section class="nb-section">
      <div class="nb-container">
        <div v-if="posts && posts.length" class="content-grid">
          <NuxtLink
            v-for="(post, i) in posts"
            :key="post.path"
            :to="post.path"
            class="content-card nb-reveal"
            :data-delay="(i % 3) + 1"
          >
            <div class="content-card__meta">
              <time class="content-card__date">{{ formatDate(post.date) }}</time>
              <span v-if="post.tags && post.tags.length" class="nb-pill">{{ post.tags[0] }}</span>
            </div>
            <h2 class="content-card__title">{{ post.title }}</h2>
            <p class="content-card__excerpt">{{ post.excerpt }}</p>
            <span class="content-card__read">Read post →</span>
          </NuxtLink>
        </div>

        <div v-else class="content-empty nb-reveal">
          <p>No posts yet. Check back soon.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Blog — Nebyss Innovation' })
useScrollReveal()

const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('date', 'DESC').all()
)

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
