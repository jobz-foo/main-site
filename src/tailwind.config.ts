import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    darkMode: 'class',
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                pridi: ['Pridi', 'serif']
            }
        }
    }
};

export default config;
