const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode:'class',
    theme: {
        screens: {
        'xs': '475px',
        ...defaultTheme.screens,
        },
        fontFamily: {
            'sans': ['"Work Sans"'],
            'body': ['"Work Sans"'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'dmbgray': {
                100: '#E9E9E9',
                200: '#AAAAAA',
                300: '#1A1A1A',
            },
            'dmbneutro': {
                100: '#E9D5C4',
                200: '#E0B394',
                300: '#CC963E',
                400: '#93601D',
                500: '#873525',
                600: '#5E2619',
                700: '#38160e',
            },
            'dmblime': '#D6F267',
            'dmbyellow': '#FFE900',
            'dmborange': {
                100: '#FFBA03',
                200: '#FF6919',
            },
            'dmbpink': {
                100: '#FFA4DA',
                200: '#FF66BB',
            },
            'dmbred': '#FF2222',
            'dmbpurple': {
                100: '#E3D5FF',
                200: '#C8ACFF',
                300: '#AC59F8',
            },
            'dmbblue': {
                100: '#C0E3FF',
                200: '#81C9FF',
                300: '#0554EB',
                400: '#040348',
            },
            'dmbgreen': {
                100: '#00B841',
                200: '#02A54B',
            },
        },
    },
    plugins: [
    ],
}