import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import {
    createStyleImportPlugin,
    ElementPlusResolve,
} from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 设置别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        hmr: {
            host: 'localhost',
            port: 8080,
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
});
