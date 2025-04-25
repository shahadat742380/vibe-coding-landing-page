import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00856A',
        secondary: '#1E1B4B',
        gray: '#4A5565', 
        black_: '#292929',
        white: '#FFFFFF',
        stroke: '#EEEEEE',
        light_green: '#F0FDF9',
      },

    },
  },
  plugins: [],
};
export default config;
