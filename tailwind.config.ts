import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        IBM: "var(--font-ibm)",
        Noto: "var(--font-noto)",
        Poppins: "var(--font-poppins)"
      },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  	}
  },
    plugins: []
} satisfies Config;
