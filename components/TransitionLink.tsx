'use client';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { transitionNavigate } from './transitionNavigate';

interface TransitionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: ReactNode;
}

export default function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
  // Fragments, mailto, tel — plain anchor, no transition
  const isPassthrough =
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');

  // External URLs — plain anchor with target/rel
  let isExternal = false;
  try {
    if (typeof window !== 'undefined') {
      const u = new URL(href, window.location.href);
      isExternal = u.origin !== window.location.origin;
    }
  } catch {
    // relative hrefs are internal
  }

  if (isPassthrough || isExternal) {
    return (
      <a href={href} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (props.target && props.target !== '_self') return;
    onClick?.(e);
    if (e.defaultPrevented) return;
    e.preventDefault();
    transitionNavigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
