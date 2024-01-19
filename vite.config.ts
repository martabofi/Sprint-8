/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({
  plugins: [react()],
  test: {
    // Configuración de pruebas aquí
    environment: "jsdom",
  },
});
