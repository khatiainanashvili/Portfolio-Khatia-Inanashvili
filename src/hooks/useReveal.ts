import { useEffect, useRef, type RefObject } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref and adds the
 * `is-visible` class (see .reveal in global.css) the first time the
 * element scrolls into view.
 *
 * Generic so the ref matches whatever element you attach it to, e.g.:
 *   const ref = useReveal<HTMLDivElement>()
 *   <div ref={ref} />
 */
export default function useReveal<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {}
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
