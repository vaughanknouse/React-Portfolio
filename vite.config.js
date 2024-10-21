import { defineConfig } from 'vite'; // Import the defineConfig function from Vite
import react from '@vitejs/plugin-react'; // Import the React plugin for Vite

// https://vitejs.dev/config/
export default defineConfig({
  // Define the plugins to be used by Vite
  plugins: [react()],
  // Server configuration
  server: {
    port: 3000, // Set the server port to 3000
    open: true, // Automatically open the browser when the server starts
  },
});
