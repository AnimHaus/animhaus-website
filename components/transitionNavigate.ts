// Module-level singleton so TransitionLink can call into PageTransition
// without React context or prop-drilling.
let _navigate: ((href: string) => void) | null = null;

export function registerNavigate(fn: (href: string) => void) {
  _navigate = fn;
}

export function transitionNavigate(href: string) {
  _navigate?.(href);
}
