/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'serif'],
        ellen: ['Sue Ellen Francisco', 'cursive'],
        shippori: ['Shippori Mincho', 'serif'],
        work: ['Work Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background_home.png')",
        'resource-pattern': "url('/src/assets/resource_background.png')",
        'message-pattern': "url('/src/assets/message_background.png')",
        'donate-pattern': "url('/src/assets/donate_background.png')",
      },
    },
    colors: {
      primary: '#FF6D6D',
      secondary: '#77D7D3',
      dark: '#2E4049',
      'gray-50': '#F1EEEC',
      'gray-100': '#ECF1F0',
      'gray-200': '#F2F2F2',
      'gray-dark': '#727272',
      'gray-light': '#384356',
      white: '#fff',
      'gray-lighter': '#384C56',
    },
    screens: {
      // Define your custom screen sizes here
      xs: '480px', // Extra small screens
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
      xl: '1280px', // Extra large screens
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
