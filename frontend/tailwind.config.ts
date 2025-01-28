import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgTheme:'#e8efff',
        textColor:'#002147',
        ButtonC: '#7091E6',
        DarkButton: '#3D52A0',
        Form: '#8697C4'

        
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
      },
      
    },
  },
  plugins: [],
} satisfies Config;
