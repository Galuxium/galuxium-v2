module.exports = {
  content: [('./app/**/*.{js,jsx}', './components/**/*.{js,jsx}')],
  theme: {
    extend: {
      colors: {
        primary: '#4267b2',
        secondary: '#93a2c2',
        tertiary: '#e2e8f0',
        neutral: '#333',
      },
      spacing: {
        '16': '4rem',
        '32': '8rem',
      },
      borderRadius: {
        'sm': '0.125rem',
        'lg': '0.375rem',
        'xl': '0.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  corePlugins: {
    ...require('@tailwindcss/typography'),
  },
  pluginOptions: {
    shadcn: {
      theme: 'extended',
      components: {},
      variants: {},
    },
  },
};