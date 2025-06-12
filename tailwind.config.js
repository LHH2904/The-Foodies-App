module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts}"
    ],
    theme: {
        extend: {
            keyframes: {
                'fade-slide-in-left': {
                    '0%': {opacity: 0, transform: 'translateX(-30px)'},
                    '100%': {opacity: 1, transform: 'translateX(0)'},
                },
                'fade-slide-in-right': {
                    '0%': {opacity: '0', transform: 'translateX(20px)'},
                    '100%': {opacity: '1', transform: 'translateX(0)'},
                },
                'fade-slide-in-from-bottom': {
                    '0%': {opacity: '0', transform: 'translateY(20px)'},
                    '100%': {opacity: '1', transform: 'translateY(0)'},
                },
            },
            animation: {
                'fade-slide-in-from-bottom': 'fade-slide-in-from-bottom 1s ease-out forwards',
                'fade-slide-in-right': 'fade-slide-in-right 1s ease-out forwards',
                'fade-slide-in-left': 'fade-slide-in-left 1s ease-out forwards',
            },
        },
    },
};
