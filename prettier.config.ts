import type { Config } from "prettier";
import type { PluginOptions } from "prettier-plugin-tailwindcss";

const config: Config & PluginOptions = {
  tabWidth: 2,
  semi: false,
  trailingComma: "none",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/styles.css",
  htmlWhitespaceSensitivity: 'ignore'
};

export default config;
