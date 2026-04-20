<template>
  <main>
    <section class="nb-section page-hero">
      <div class="nb-container">
        <h1 class="page-hero__title nb-reveal">Privacy Policy</h1>
        <p class="page-hero__desc nb-reveal" data-delay="1">
          Last updated: April 2026
        </p>
      </div>
    </section>

    <section class="nb-section">
      <div class="nb-container policy-content">
        <div class="policy nb-reveal" data-delay="1">
          <h2>Overview</h2>
          <p>
            Nebyss Innovation ("Nebyss", "we", "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard personal data when you visit nebyss.eu or interact with our services.
          </p>

          <h2>Data we collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul>
            <li>Contact information you provide through our contact form (name, email, organization, message)</li>
            <li>Technical data automatically collected through website analytics (IP address, browser type, pages visited, referral source)</li>
            <li>Communication records when you correspond with us via email</li>
          </ul>

          <h2>How we use your data</h2>
          <p>Personal data is processed for the following purposes:</p>
          <ul>
            <li>Responding to enquiries and providing requested information</li>
            <li>Improving our website and services</li>
            <li>Complying with legal obligations</li>
          </ul>
          <p>We do not sell, trade, or rent personal data to third parties.</p>

          <h2>Legal basis</h2>
          <p>
            We process personal data on the basis of legitimate interest (website analytics, service improvement), consent (contact form submissions), and legal obligation where applicable, in accordance with the General Data Protection Regulation (GDPR).
          </p>

          <h2>Data retention</h2>
          <p>
            Personal data is retained only for as long as necessary to fulfill the purposes outlined above, or as required by law. Contact form data is retained for up to 24 months unless you request earlier deletion.
          </p>

          <h2>Your rights</h2>
          <p>Under the GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:privacy@nebyss.eu">privacy@nebyss.eu</a>.</p>

          <h2>Cookies</h2>
          <p>
            This website uses only essential cookies required for basic functionality. We do not use tracking cookies or third-party advertising cookies. Analytics, where used, relies on privacy-respecting, cookie-free solutions.
          </p>

          <h2>Third-party services</h2>
          <p>
            We may use third-party services for hosting, analytics, or email delivery. These services are selected for their GDPR compliance and data processing agreements are in place.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions or requests, contact:<br />
            <a href="mailto:privacy@nebyss.eu">privacy@nebyss.eu</a>
          </p>
          <address>
            Nebyss Innovation<br />
            Via Malta 12<br />
            Valletta VLT 1000<br />
            Malta, EU
          </address>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Privacy Policy — Nebyss Innovation' })
useScrollReveal()
</script>

<style scoped>
.page-hero {
  padding: 160px 0 60px;
}

.page-hero__title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 16px;
}

.page-hero__desc {
  font-size: 0.875rem;
  color: var(--nb-text-3);
}

/* Policy content */
.policy-content {
  max-width: 720px;
}

.policy h2 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 48px;
  margin-bottom: 16px;
}

.policy h2:first-child {
  margin-top: 0;
}

.policy p {
  font-size: 0.9375rem;
  line-height: 1.8;
  margin-bottom: 16px;
  color: var(--nb-text-2);
}

.policy ul {
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
}

.policy ul li {
  font-size: 0.9375rem;
  line-height: 1.8;
  color: var(--nb-text-2);
  padding-left: 20px;
  position: relative;
}

.policy ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--nb-text-3);
}

.policy a {
  color: var(--nb-accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.policy a:hover {
  border-color: var(--nb-accent);
  opacity: 1;
}

.policy address {
  font-style: normal;
  font-size: 0.9375rem;
  line-height: 1.8;
  color: var(--nb-text-2);
  margin-top: 12px;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 40px;
  }
}
</style>
