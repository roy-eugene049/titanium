
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ({
    org: "frontendsafari",
    project: "titanium",
    telemetry: false,
  })],

  build: {
    sourcemap: true
  }
})