// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Сайт публикуется на GitHub Pages проекта, то есть в подкаталоге /xip-site/.
// При переходе на собственный домен site меняется на адрес домена, а base удаляется.
export default defineConfig({
    site: 'https://egsp.github.io',
    base: '/xip-site',
    integrations: [react()],
});
