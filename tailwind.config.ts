import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
        colors:{
                'green-darker': '#434B2F',
                'green': '#858C36',
                'green-light': '#BABE8E',
                'red': '#EC0404',
                'orange': '#FF7B02',
                'white': '#F9FAF7'
        },
        fontFamily:{
                noto: ["Noto Sans Arabic", 'sans-serif'],
                amiri : ["Amiri", 'serif'],
        }
    },
  },
  plugins: [],
};
export default config;
