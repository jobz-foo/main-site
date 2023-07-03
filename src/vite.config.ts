import path from 'path';
import devtools from 'solid-devtools/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    build: {
        target: 'esnext'
    },
    plugins: [
        /*
            Uncomment the following line to enable solid-devtools.
            For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
        */
        devtools({
            autoname: true
        }),
        solidPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        port: 3000
    }
});
