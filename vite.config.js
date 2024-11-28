import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: false, // автоматически открывать браузер
    watch: {
      usePolling: true // для некоторых файловых систем
    }
  }
});
