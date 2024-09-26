import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem', // This will set space-x-30 to 120px
      },
      fontSize: {
        '50px': '50px',
        '18px': '18px',
      },
      lineHeight: {
        '66px': '66px',
      },
      letterSpacing: {
        '1px': '1px',
      },
      fontWeight: {
        'medium': '500',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
