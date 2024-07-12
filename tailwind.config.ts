import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // green: "#21682D",
        green: "#20672C",
      },
      fontFamily: {
        mouse: ["var(--font-mouse)", "sans-serif"],
        mochiy: ["var(--font-mochiy)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        monda: ["var(--font-monda)", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(96.79deg, #66974C -62.94%, #66974C -62.92%, rgba(102, 151, 76, 0.05) 54.42%, #66974C 174.24%)",
      },

      borderImageSource: {
        "custom-gradient":
          "linear-gradient(157.16deg, #3ED5DD -14.7%, rgba(223, 232, 232, 0.29) 99.02%)",
      },
    },
  },
  plugins: [],
};
export default config;
