/* eslint-disable quote-props */
import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  plugins: [typography()],
  attributify: true,
  theme: {
    extend: {
      colors: {
        orange: '#ff642f',
        'orange--darken': '#c2410c',
        'orange--lighten': '#fed7aa',
        red: '#b91c1c',
        'red--lighten': '#fecaca',
        green: '#15803d',
        'green--lighten': '#bbf7d0',
        text: '#4b5563',
        'text--darken': '#333',
        'text-lighten': '#6b7280',
        border: '#e5e7eb',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
          },
        },
      },
    },
  },
})
