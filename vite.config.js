import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const repositoryName = "react-output-first-v2";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? `/${repositoryName}/` : "/",
});
