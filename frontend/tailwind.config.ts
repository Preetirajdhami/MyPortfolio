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
        primary: "#f4a261",
        base:'#fdf6ec',
        textColor:'#2d2d2d ',
       

        
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
      },
      
    },
  },
  plugins: [],
} satisfies Config;
