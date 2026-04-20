/**
 * Scroll reveal composable using Intersection Observer.
 * Targets elements with `.nb-reveal` class, adds `.is-visible` when in view.
 */
export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  function init() {
    if (typeof window === 'undefined') return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      document.querySelectorAll('.nb-reveal').forEach((el) => {
        el.classList.add('is-visible')
      })
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '-60px 0px',
      },
    )

    document.querySelectorAll('.nb-reveal').forEach((el) => {
      observer!.observe(el)
    })
  }

  function destroy() {
    observer?.disconnect()
    observer = null
  }

  onMounted(() => {
    // Delay slightly to ensure DOM is painted
    requestAnimationFrame(() => {
      requestAnimationFrame(() => init())
    })
  })

  onUnmounted(() => {
    destroy()
  })

  return { init, destroy }
}
