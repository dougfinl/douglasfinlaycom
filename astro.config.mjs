import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [
        icon({
            iconDir: 'src/assets/icons',
        }),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    output: 'static',
    site: 'https://douglasfinlay.com',
});
