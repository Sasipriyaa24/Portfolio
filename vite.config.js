import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages under a sub-path (username.github.io/my-repo),
// add:  base: "/my-repo/"
export default defineConfig({
  plugins: [react()],
});
