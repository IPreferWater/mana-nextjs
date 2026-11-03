import type { Config } from 'tailwindcss';

// In Tailwind v4, theme is defined via @theme in globals.css.
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
} satisfies Config;
