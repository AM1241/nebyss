<template>
  <main>
    <!-- Hero -->
    <section class="nb-section page-hero">
      <div class="nb-container">
        <span class="nb-eyebrow nb-reveal">Contact</span>
        <h1 class="page-hero__title nb-reveal" data-delay="1">
          Let's <span class="accent">talk</span>
        </h1>
        <p class="page-hero__desc nb-reveal" data-delay="2">
          Whether you're interested in partnering, collaborating on a project, or just learning more about what we're building — we'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- Form + Info -->
    <section class="nb-section nb-section--alt">
      <div class="nb-container">
        <div class="contact-grid">
          <!-- Form -->
          <div class="contact-form-wrap nb-reveal">
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Name *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  autocomplete="name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  autocomplete="email"
                />
              </div>
              <div class="form-group">
                <label for="interest">I'm interested in</label>
                <select id="interest" v-model="form.interest">
                  <option value="" disabled>Select an option</option>
                  <option value="partnership">Partnership opportunities</option>
                  <option value="collaboration">Research collaboration</option>
                  <option value="demo">Product demo</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                />
              </div>
              <button type="submit" class="nb-btn nb-btn--primary">
                Send message <span class="arrow">→</span>
              </button>
            </form>
          </div>

          <!-- Sidebar info -->
          <div class="contact-info nb-reveal" data-delay="1">
            <div class="contact-block">
              <h2 class="contact-block__title">Email</h2>
              <a href="mailto:nebyss.innovation@gmail.com" class="contact-block__link">nebyss.innovation@gmail.com</a>
            </div>

            <div class="contact-block">
              <h2 class="contact-block__title">Partner with us</h2>
              <p class="contact-block__text">
                We're looking for research organisations, public bodies, and domain experts who share our approach to AI — transparent, supervised, and purpose-built. If you're working on EU-funded projects or exploring applied AI in energy, policy, or other high-stakes domains, let's talk.
              </p>
            </div>

            <div class="contact-block">
              <h2 class="contact-block__title">EU project opportunities</h2>
              <p class="contact-block__text">
                If you're forming a consortium for Horizon Europe, Digital Europe, or other EU funding programmes, we're open to joining as a technology or AI partner. We bring domain-specific intelligence, explainable AI, and platform-level tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Contact — Nebyss Innovation' })
useScrollReveal()

const form = reactive({
  name: '',
  email: '',
  interest: '',
  message: '',
})

function handleSubmit() {
  const subject = encodeURIComponent(`Contact from ${form.name}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nInterest: ${form.interest}\n\n${form.message}`
  )
  window.location.href = `mailto:nebyss.innovation@gmail.com?subject=${subject}&body=${body}`
}
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
  max-width: 620px;
  line-height: 1.75;
}

/* ── Contact Grid ── */
.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 8px;
}

.contact-block__title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--nb-text-3);
  margin-bottom: 12px;
}

.contact-block__link {
  font-size: 1.0625rem;
  color: var(--nb-text);
  text-decoration: none;
  border-bottom: 1px solid var(--nb-border);
  padding-bottom: 2px;
  transition: border-color 0.3s ease, color 0.3s ease;
}

.contact-block__link:hover {
  color: var(--nb-accent);
  border-color: var(--nb-accent);
  opacity: 1;
}

.contact-block__text {
  font-size: 0.875rem;
  line-height: 1.75;
  color: var(--nb-text-2);
}

/* ── Form ── */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--nb-text-3);
}

.form-group input,
.form-group textarea,
.form-group select {
  background: var(--nb-bg);
  border: 1px solid var(--nb-border-md);
  border-radius: var(--nb-radius);
  padding: 12px 16px;
  font-family: var(--nb-font);
  font-size: 0.9375rem;
  color: var(--nb-text);
  transition: border-color 0.3s ease;
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: var(--nb-accent);
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23888' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
  cursor: pointer;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 56px;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 60px;
  }
}
</style>
