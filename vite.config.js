import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "MedicineUI",
    lib: {
      entry: path.resolve(__dirname, "./src/components/MedicineUI/index.js"),
      name: "MedicineUI",
      fileName: "MedicineUI"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
})
