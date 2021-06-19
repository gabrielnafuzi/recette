import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import ViteFonts from 'vite-plugin-fonts'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extendRoute(route) {
        const publicPaths = ['/', '/login', '/signup', '/recipes/:recipeId']

        if (publicPaths.includes(route.path)) {
          return route
        }

        return {
          ...route,
          meta: { auth: true },
        }
      },
    }),
    Layouts(),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    ViteIcons(),
    ViteFonts({
      google: {
        families: ['Nunito'],
      },
    }),
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),
  ],
})
