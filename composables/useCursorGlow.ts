/**
 * Cursor glow composable — soft radial glow that follows the mouse.
 * Only active on non-touch devices with pointer: fine.
 */
export function useCursorGlow() {
  let glow: HTMLElement | null = null
  let raf = 0
  let mouseX = 0
  let mouseY = 0
  let glowX = 0
  let glowY = 0
  const lerp = 0.06

  function onMouseMove(e: MouseEvent) {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  function animate() {
    if (!glow) return

    glowX += (mouseX - glowX) * lerp
    glowY += (mouseY - glowY) * lerp

    glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`
    raf = requestAnimationFrame(animate)
  }

  function init() {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    glow = document.createElement('div')
    glow.id = 'nb-cursor-glow'
    document.body.appendChild(glow)

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    animate()
  }

  function destroy() {
    cancelAnimationFrame(raf)
    window.removeEventListener('mousemove', onMouseMove)
    glow?.remove()
    glow = null
  }

  onMounted(() => init())
  onUnmounted(() => destroy())
}
