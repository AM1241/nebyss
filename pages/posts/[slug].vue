<template>
  <main>
    <article v-if="post" class="post-article">
      <!-- Hero -->
      <section class="nb-section post-hero">
        <div class="nb-container post-hero__inner">
          <NuxtLink to="/posts" class="post-back">← Back to Blog</NuxtLink>
          <div class="post-hero__meta">
            <time class="content-card__date">{{ formatDate(post.date) }}</time>
            <span v-if="post.author" class="post-hero__author">by {{ post.author }}</span>
          </div>
          <h1 class="post-hero__title nb-reveal">{{ post.title }}</h1>
          <p v-if="post.excerpt" class="post-hero__excerpt nb-reveal" data-delay="1">{{ post.excerpt }}</p>
          <div v-if="post.tags && post.tags.length" class="post-hero__tags nb-reveal" data-delay="2">
            <span v-for="tag in post.tags" :key="tag" class="nb-pill">{{ tag }}</span>
          </div>
        </div>
      </section>

      <!-- Body -->
      <section class="nb-section post-body-section">
        <div class="nb-container post-body-container">
          <ContentRenderer :value="post" class="post-body nb-reveal" />
        </div>
      </section>

      <!-- CTA -->
      <section class="nb-section post-cta-section">
        <div class="nb-container">
          <div class="post-cta nb-reveal">
            <h2>Want to discuss how this applies to your work?</h2>
            <NuxtLink to="/contact" class="nb-btn nb-btn--primary">Get in touch →</NuxtLink>
          </div>
        </div>
      </section>
    </article>

    <div v-else class="nb-container" style="padding: 120px 24px;">
      <p>Post not found.</p>
      <NuxtLink to="/posts" class="nb-btn" style="margin-top: 24px;">← Back to Blog</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
useScrollReveal()

const { data: post } = await useAsyncData(`post-${route.path}`, () =>
  queryCollection('posts').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useHead({ title: `${post.value?.title ?? 'Post'} — Nebyss Innovation` })

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
