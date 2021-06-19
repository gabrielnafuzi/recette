/* eslint-disable quote-props */
import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  plugins: [typography()],
  attributify: true,
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        'orange--base': '#ff642f',
        'orange--darken': '#c2410c',
        'orange--lighten': '#fed7aa',
        'red--base': '#b91c1c',
        'red--lighten': '#fecaca',
        'green--base': '#15803d',
        'green--lighten': '#bbf7d0',
        'typo--base': '#4b5563',
        'typo--darken': '#333',
        'typo-lighten': '#6b7280',
        border: '#e5e7eb',
      },
      boxShadow: {
        lighten: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        'lighten-2': '0px 0px 4px rgba(0, 0, 0, 0.15)',
        darken: '0px 1px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
})
