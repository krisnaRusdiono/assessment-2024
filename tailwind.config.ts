import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      height: {
        41.5: '10.375rem',
        67: '16.75rem',
        67.5: '16.875rem',
        92.5: '23.125rem',
        120: '30rem',
        124: '31rem',
        142: '35.5rem',
        150: '37.5rem',
        175: '43.75rem',
        205: '51.25rem',
        205.25: '51.3125rem',
      },
      maxWidth: {
        120: '30rem',
      },
      minHeight: {
        124: '31rem',
        142: '35.5rem',
        205.25: '51.3125rem',
      },
      width: {
        67: '16.5rem',
        67.5: '16.875rem',
        90: '22.5rem',
        92.5: '23.125rem',
        105.5: '26.375rem',
        108: '27rem',
        167.5: '41.875rem',
      },
      fontWeight: {
        seminormal: '500',
      },
    },
  },
  plugins: [],
}
export default config
