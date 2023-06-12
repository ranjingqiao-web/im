import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve(
                        'src/assets/theme-default.less'
                    )}";`
                },
                javascriptEnabled: true
            }
        }
    },
    server: {
        host: '0.0.0.0',
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp'
        },
        proxy: {
            '^/api/': {
                // target: 'https://web.499jk.com/prod-api',
                target: 'http://20.239.165.170/prod-api',
                //'https://18859u3s41.imdo.co',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\//, '')
            }
        }
    }
})
