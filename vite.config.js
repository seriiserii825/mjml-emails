import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // автоматически открывать браузер
    watch: {
      usePolling: true // для некоторых файловых систем
    }
  }
});
