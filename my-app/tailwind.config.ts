import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-A-200': '#302E7D',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sirukota: ["Sirukota", "serif"],
        righteous: ["Righteous", "sans-serif"],
        steelfish: ["Steelfish", "sans-serif"],
      },
      fontSize: {
        '10xl': ['152px', '144px'],
        '4xl': ['36px', '44px'],
      },
      margin: {
        '100': '545px',
      },
    }, // Menutup objek extend di sini
  },
  plugins: [],
};

export default config;
