
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/help': {
          target: 'https://chatbase.co/3rF_RisF8LluAGxvtEWe6/help',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/help/, '')
        },
        '/__cb': {
          target: 'https://chatbase.co',
          changeOrigin: true
        },
        '/api/chat/3rF_RisF8LluAGxvtEWe6': {
          target: 'https://chatbase.co',
          changeOrigin: true
        }
      }
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || null),
      'process.env.OPENAI_API_KEY': JSON.stringify(env.OPENAI_API_KEY || null),
    },
  };
});
