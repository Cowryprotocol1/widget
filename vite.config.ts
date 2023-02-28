import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  
  // expose .env as process.env instead of import.meta.env
  // Reference: https://github.com/vitejs/vite/issues/1149#issuecomment-857686209
  let env = loadEnv(mode, process.cwd(), "VITE_APP");

  // Optional: Populate NODE_ENV with the current mode (development/production)
  env.NODE_ENV = mode;

  const envWithProcessPrefix = {
    "process.env": `${JSON.stringify(env)}`,
  };
  

  return {
    plugins: [react()],
    define: envWithProcessPrefix,
  };
  
});

// // vite.config.js
// import { resolve } from 'path'
// // import { defineConfig } from 'vite'

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         other: resolve(__dirname, 'main.html'),
//       },
//     },
//   },
// })
