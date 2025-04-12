/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        primary: {
          50: '#f5f7f1',
          100: '#e8ecde',
          200: '#d1dbbe',
          300: '#b2c494',
          400: '#94ad70',
          500: '#768c52', // Olive drab
          600: '#5c6e41',
          700: '#4c5937',
          800: '#3a4429',
          900: '#343e25',
        },
        military: {
          olive: '#4B5320', // Olive green
          drab: '#6B8E23', // Olive drab
          khaki: '#BDB76B', // Dark khaki
          tan: '#D2B48C', // Tan
          camo: '#606c38', // Camouflage green
          navy: '#1D2D44', // Navy blue
          black: '#0B0B0B', // Almost black
          sand: '#C9B18A', // Desert sand
          brown: '#5F4B32', // Military brown
        },
        gold: {
          100: '#FEF9E7',
          200: '#FCF3CF',
          300: '#F9E79F',
          400: '#F7DC6F',
          500: '#D4AF37', // Gold metallic
          600: '#C5A028',
          700: '#B8860B', // Dark goldenrod
          800: '#A67C00',
          900: '#95710A',
        },
        dark: '#1D1D1D',
        navy: '#1D2D44',
        cream: '#F2EBDC',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'military-gradient': 'linear-gradient(to right, #4B5320, #BDB76B)',
        'navy-gradient': 'linear-gradient(to right, #1D2D44, #395066)',
      },
      boxShadow: {
        'elegant': '0 10px 30px -10px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'military': '0 10px 20px -5px rgba(75, 83, 32, 0.3)',
        'card': '0 22px 40px rgba(0, 0, 0, 0.1)',
        'soft': '0 15px 35px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#5c6e41',
              '&:hover': {
                color: '#4c5937',
              },
            },
            h1: {
              fontFamily: 'var(--font-playfair)',
            },
            h2: {
              fontFamily: 'var(--font-playfair)',
            },
            h3: {
              fontFamily: 'var(--font-playfair)',
            },
            h4: {
              fontFamily: 'var(--font-cormorant)',
            },
          },
        },
      },
    },
  },
  plugins: [],
} 