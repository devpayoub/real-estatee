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
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				},
				realestate: {
					blue: '#003DA5', // REMAX blue
					lightblue: '#e8f1fd',
					darkblue: '#002C75',
					blue50: '#EBF1FA',
					blue100: '#C6D8F0',
					blue200: '#A1BFE6',
					blue300: '#7BA7DC',
					blue400: '#5B8ED2',
					blue500: '#3B76C8',
					blue600: '#3062AA',
					blue700: '#254E8C',
					blue800: '#1B3A6E',
					blue900: '#112650',
					red: '#e4002b', // REMAX red
					lightred: '#ffebee', 
					darkred: '#b71c1c',
					red50: '#FEEBEF',
					red100: '#FBCCD5',
					red200: '#F9ABB9',
					red300: '#F6899E',
					red400: '#F46783',
					red500: '#F14668',
					red600: '#E4002B',
					red700: '#C1001F',
					red800: '#9F0017',
					red900: '#7D000F',
					black: '#000000e6',
					tag: '#e4002b',
					primary: '#003DA5', // Primary brand color - blue
					secondary: '#e4002b' // Secondary brand color - red
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'card': '0 4px 20px rgba(0, 61, 165, 0.08)',
				'card-hover': '0 8px 30px rgba(0, 61, 165, 0.15)',
				'button': '0 4px 10px rgba(0, 61, 165, 0.3)',
				'red-button': '0 4px 10px rgba(228, 0, 43, 0.3)',
			},
			backgroundImage: {
				'gradient-blue-red': 'linear-gradient(135deg, #003DA5 0%, #e4002b 100%)',
				'gradient-red-blue': 'linear-gradient(135deg, #e4002b 0%, #003DA5 100%)',
				'gradient-blue': 'linear-gradient(135deg, #003DA5 0%, #002C75 100%)',
				'gradient-red': 'linear-gradient(135deg, #e4002b 0%, #b71c1c 100%)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(5px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					from: { opacity: '0', transform: 'translateX(-10px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'slide-x': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'slide-x': 'slide-x 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
