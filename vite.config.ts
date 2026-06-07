import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('Loading');
  console.log(env.VITE_APP_BASE_URL);

  return {
    plugins: [tailwindcss()],
    base: env.VITE_APP_BASE_URL,
  };
});
