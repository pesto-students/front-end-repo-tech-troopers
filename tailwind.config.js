// eslint-disable-line global-require
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
        resources:
          "url('https://res.cloudinary.com/dtbt6but5/image/upload/b_rgb:171616,co_rgb:000000,e_auto_brightness,o_54/v1691322098/Brighter%20Days/Photo_rcujqq.png')",
        'hero-pattern':
          "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1692185604/background_home_p4oyvo.png')",
        'resource-pattern':
          "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1692186531/resource_background_iomfnl.png')",
        'message-pattern':
          "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1692187176/message_background_nbkc1z.png')",
        'donate-pattern':
          "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1692186121/donate_background_va4rag.png')",
        'events-pattern':
          "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1692185814/background_events_cgf3in.png')",
        'about-pattern':
          "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1692185813/aboutus_background_wcoske.jpg')",
        'donatesingle-pattern':
          "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1692187221/donate_single_aymey8.png')",
        'volunteer-pattern':
          "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1692185816/volunteersingle_background_jiz2xo.png')",
        'volunteersingle-pattern':
          "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1692185815/volunteer_background_cs3eg5.png')",
        placeholder:
          "url('https://asset.cloudinary.com/dtbt6but5/482ae0152f27d44b5105d3232e379671')",
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
      lightg: '#d0d0d0',
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
