/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-6': "#0F0F0F",
        'gray-10': "#1A1A1A",
        'gray-12': "#1F1F1F",
        'gray-15': "#262626",
        'gray-20': "#333333",
        'gray-25': "#404040",
        'gray-30': "#4D4D4D",
        'gray-40': "#666666",
        'white-50': "#808080",
        'white-55': "#8C8C8C",
        'white-60': "#999999",
        'white-65': "#A6A6A6",
        'white-70': "#B3B3B3",
        'white-75': "#BFBFBF",
        'white-80': "#CCCCCC",
        'white-90': "#E6E6E6",
      },
      fontFamily: {
        'Sora': ['Sora']
      },
      gridTemplateColumns: {
        'xl-main': '162px 1fr 162px',
        'lg-main': 'minmax(80px, 1fr) 844px minmax(80px, 1fr)',
        'mobile-main': '16px 1fr 16px'
      }
    },
  },
  plugins: [],
}

