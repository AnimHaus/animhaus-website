/**
 * Splits all text nodes inside `el` into individual word spans.
 * Each word gets: .word-wrap (overflow:hidden) > .word (the animated element).
 * Idempotent — skips elements that already contain .word spans.
 */
export function wordSplit(el: Element) {
  // Already processed
  if (el.querySelector('.word')) return;

  function walk(node: Node) {
    if (node.nodeType === 3) {
      const parts = (node.textContent ?? '').split(/(\s+)/);
      const frag = document.createDocumentFragment();
      parts.forEach(p => {
        if (!p.trim()) { frag.appendChild(document.createTextNode(p)); return; }
        const outer = document.createElement('span');
        outer.className = 'word-wrap';
        const inner = document.createElement('span');
        inner.className = 'word';
        inner.textContent = p;
        outer.appendChild(inner);
        frag.appendChild(outer);
      });
      node.parentNode?.replaceChild(frag, node);
    } else if (
      node.nodeType === 1 &&
      !['SCRIPT', 'STYLE', 'BR', 'EM', 'STRONG'].includes((node as Element).tagName)
    ) {
      Array.from(node.childNodes).forEach(walk);
    }
  }

  Array.from(el.childNodes).forEach(walk);
}

/**
 * Applies scroll-triggered word-reveal to all h2/h3 elements in the document.
 * Call this inside a GSAP + ScrollTrigger context.
 */
export function applyHeadingReveal(
  gsap: { set: (...a: unknown[]) => void; to: (...a: unknown[]) => void },
  ScrollTrigger: { create: (opts: Record<string, unknown>) => void },
) {
  document.querySelectorAll<HTMLElement>('h2, h3').forEach(el => {
    wordSplit(el);
    const words = el.querySelectorAll<HTMLElement>('.word');
    if (!words.length) return;
    gsap.set(words, { yPercent: 110 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(words, {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.045,
          ease: 'expo.out',
        });
      },
    });
  });
}
