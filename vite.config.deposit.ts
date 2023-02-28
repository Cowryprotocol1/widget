import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "",
  build: {
    rollupOptions: {
      input: {
        deposit: resolve(__dirname, "./index-deposit.html"),
        // withdraw: resolve(__dirname, "./index-withdraw.html"),
      },
      output: [
        {
          name: "deposit",
          dir: "deposit",
        },
      ],
    },
  },
});
