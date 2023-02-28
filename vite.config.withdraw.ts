import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "",
  build: {
    rollupOptions: {
      input: {
        withdraw: resolve(__dirname, "./index-withdraw.html"),
      },
      output: [
        {
          dir: "withdraw",
          entryFileNames: `[name].js`,
          assetFileNames: `[name].css`,
          manualChunks: undefined,
        },
      ],
    },
  },
});
