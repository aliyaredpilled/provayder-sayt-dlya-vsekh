import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				skynet: {
					blue: {
						DEFAULT: 'rgb(42,110,182)',
						dark: '#1a5592',
						light: '#5a97d0',
					},
					gray: {
						DEFAULT: '#8E8E93',
						light: '#F2F2F7',
						dark: '#48484A',
					},
					orange: {
						DEFAULT: '#FF7A00',
						light: '#FF8A50',
						bright: '#FF7A00',
						dark: '#E56900',
					},
					purple: {
						DEFAULT: '#9B87F5',
						dark: '#6E59A5',
						light: '#D6BCFA',
					},
					yellow: {
						DEFAULT: '#FFCC00',
						light: '#FBEEC9',
						bright: '#FACC15',
					}
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%',
					},
					'50%': {
						'background-position': '100% 50%',
					},
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'bounce-slight': {
					'0%, 100%': { transform: 'translateY(-5%)' },
					'50%': { transform: 'translateY(0)' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' },
				},
				'scale-up': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'float': 'float 5s ease-in-out infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'bounce-slight': 'bounce-slight 2s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out',
				'scale-up': 'scale-up 0.5s ease-out',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'speed-gradient': 'linear-gradient(90deg, rgb(42,110,182), #5A97D0)',
				'orange-gradient': 'linear-gradient(90deg, #FF7A00, #E56900)',
				'blue-purple-gradient': 'linear-gradient(135deg, rgb(42,110,182), #9B87F5)',
				'blue-green-gradient': 'linear-gradient(135deg, rgb(42,110,182), #34C759)',
				'orange-yellow-gradient': 'linear-gradient(135deg, #FF7A00, #FFCC00)',
			},
			boxShadow: {
				'glow': '0 0 20px 5px rgba(255, 122, 0, 0.2)',
				'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
				'orange-glow': '0 0 20px rgba(255, 122, 0, 0.3)',
				'blue-glow': '0 0 20px rgba(42, 110, 182, 0.3)',
				'floating': '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
				'intense': '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
			},
			backdropBlur: {
				'xs': '2px',
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			},
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100',
			},
			opacity: {
				'15': '0.15',
				'35': '0.35',
				'85': '0.85',
				'95': '0.95',
			},
			maxHeight: {
				'128': '32rem',
				'160': '40rem',
			},
			height: {
				'128': '32rem',
				'160': '40rem',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
