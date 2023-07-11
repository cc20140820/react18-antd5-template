import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rollupReplace from '@rollup/plugin-replace'
import stylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/react18-antd5-template',
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('development')
      }
    }),
    react(),
    stylelint({
      fix: true,
      lintInWorker: true
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') }
    ]
  }
})
