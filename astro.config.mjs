import { defineConfig } from 'astro/config';


export default defineConfig({
  site: 'https://z-eksen.eth.limo',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      assetsDir: 'assets'
    }
  }
});
