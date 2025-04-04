import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "hover:text-violet-600",
    "hover:text-red-400",
    "hover:bg-gray-50",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue_flip : "#2874f0",
        light_brown : "#C0BCB9",
        light_black : "#2A2E35",
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
      },
      scrollbar: {
        thin: {
          "scrollbar-width": "thin",
        },}
    },
  },
  plugins: [  function ({ addComponents }) {
    addComponents({
      '.hide-scrollbar': {
        'overflow': 'auto',
        'scrollbar-width': 'none',
        'msOverflowStyle': 'none',
      },
      '.hide-scrollbar::-webkit-scrollbar': {
        'display': 'none',
      },
      '.disable-scroll': {
        'overflow': 'hidden', // Disable overflow scrolling
      }
    });
  }],
} satisfies Config;
