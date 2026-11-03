/**
 * Design system constants
 * Matches the Tailwind theme configuration from the HTML design
 */

export const COLORS = {
  // Primary
  primary: '#25686a',
  'on-primary': '#ffffff',
  'primary-container': '#5f9ea0',
  'on-primary-container': '#003234',
  'primary-fixed': '#aeeef0',
  'on-primary-fixed': '#002021',
  'primary-fixed-dim': '#92d2d3',
  'on-primary-fixed-variant': '#004f51',
  'inverse-primary': '#92d2d3',

  // Secondary
  secondary: '#4e6260',
  'on-secondary': '#ffffff',
  'secondary-container': '#d0e7e3',
  'on-secondary-container': '#536866',
  'secondary-fixed': '#d0e7e3',
  'on-secondary-fixed': '#0a1f1d',
  'secondary-fixed-dim': '#b5cbc7',
  'on-secondary-fixed-variant': '#364b48',

  // Tertiary
  tertiary: '#446464',
  'on-tertiary': '#ffffff',
  'tertiary-container': '#799a9a',
  'on-tertiary-container': '#103232',
  'tertiary-fixed': '#c6e9e9',
  'on-tertiary-fixed': '#002020',
  'tertiary-fixed-dim': '#abcdcd',
  'on-tertiary-fixed-variant': '#2c4c4c',

  // Error
  error: '#ba1a1a',
  'on-error': '#ffffff',
  'error-container': '#ffdad6',
  'on-error-container': '#93000a',

  // Surface
  background: '#f8fafa',
  'on-background': '#191c1d',
  surface: '#f8fafa',
  'on-surface': '#191c1d',
  'on-surface-variant': '#3f4849',
  'surface-dim': '#d8dada',
  'surface-bright': '#f8fafa',
  'surface-container-lowest': '#ffffff',
  'surface-container-low': '#f2f4f4',
  'surface-container': '#eceeee',
  'surface-container-high': '#e6e8e9',
  'surface-container-highest': '#e1e3e3',
  'surface-variant': '#e1e3e3',
  'surface-tint': '#25686a',

  // Inverse
  'inverse-surface': '#2e3131',
  'inverse-on-surface': '#eff1f1',

  // Outline
  outline: '#6f7979',
  'outline-variant': '#bfc8c8',
} as const;

export const SPACING = {
  'unit': '4px',
  'stack-sm': '8px',
  'stack-md': '16px',
  'stack-lg': '32px',
  'gutter': '24px',
  'margin-mobile': '20px',
  'margin-desktop': '64px',
} as const;

export const BORDER_RADIUS = {
  'DEFAULT': '0.25rem',
  'lg': '0.5rem',
  'xl': '0.75rem',
  'full': '9999px',
} as const;

export const FONTS = {
  'display-lg': {
    size: '48px',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    fontWeight: 700,
  },
  'display-lg-mobile': {
    size: '32px',
    lineHeight: '1.2',
    fontWeight: 700,
  },
  'headline-md': {
    size: '24px',
    lineHeight: '1.3',
    fontWeight: 700,
  },
  'body-lg': {
    size: '18px',
    lineHeight: '1.6',
    fontWeight: 400,
  },
  'body-md': {
    size: '16px',
    lineHeight: '1.6',
    fontWeight: 400,
  },
  'label-sm': {
    size: '12px',
    lineHeight: '1.0',
    letterSpacing: '0.1em',
    fontWeight: 700,
  },
} as const;

export const MAX_WIDTH = '1440px';
export const Z_INDEX = {
  sideNav: 30,
  nav: 50,
  footer: 40,
} as const;
