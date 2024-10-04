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
        67.5: '16.875rem',
        120: '30rem',
        175: '43.75rem',
        205: '51.25rem',
      },
      width: {
        67: '16.5rem',
        67.5: '16.875rem',
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
