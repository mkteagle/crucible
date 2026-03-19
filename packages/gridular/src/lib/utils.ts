import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { CSSProperties } from 'react';

/**
 * Merges Tailwind classes using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Pass-through for inline style objects (React.CSSProperties)
 */
export function tssToInlineStyles(styles?: CSSProperties): CSSProperties {
  return styles ?? {};
}

/**
 * Spacing helper
 * spacing(1) => 4px, spacing(2) => 8px, etc.
 */
export function spacing(...values: number[]): string {
  return values.map(v => `${v * 4}px`).join(' ');
}
