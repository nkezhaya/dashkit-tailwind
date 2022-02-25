// https://unpkg.com/browse/tailwindcss@3.0.18/stubs/defaultConfig.stub.js

// colors are combined from Dashkit files and this generator:
// https://tailwind.simeongriggs.dev/?indigo=727CF5&purple=6B5EAE&pink=FF679B&orange=FD7E14&yellow=F6C343&teal=02A8B5&cyan=39AFD1&green=00D97E&white=FFFFFF&red=E63757&black=12263F&blue=2C7BE5&gray=283E59

module.exports = {
  content: [
    "src/*.html"
  ],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      }
    },
    fontFamily: {
      sans: ['"Cerebri Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      icon: ['Feather'],
    },
    fontSize: {
      base: ['0.9375rem', '1.5'],
      xs: ['0.7187rem', '1,25'],
      sm: ['0.8125rem', '1.75'],
      lg: ['1.0625rem', '1.5'],
      h1: ['1.625rem', '1.5'],
      h2: ['1.25rem', '1.5'],
      h3: ['1.0625rem', '1.5'],
      h4: ['0.9375rem', '1.5'],
      h5: ['0.8125rem', '1.5'],
      h6: ['0.625rem', '1.5'],
    },
    screens: {},
    colors: {
      "primary": "#2C7BE5",
      "secondary": "#6E84A3",
      "success": "#00D97E",
      "info": "#39AFD1",
      "warning": "#F6C343",
      "danger": "#E63757",
      "light": "#EDF2F9",
      "lighter": "#F9FBFD",
      "dark": "#12263F",
      "blue": {
        "50": "#E8F1FC",
        "100": "#D6E6FA",
        "200": "#A9CAF4",
        "300": "#80B0EF",
        "400": "#5797EA",
        "500": "#2C7BE5",
        "600": "#1862C3",
        "700": "#2362b7",
        "800": "#0C305F",
        "900": "#061932",
        "DEFAULT": "#2C7BE5"
      },
      "indigo": {
        "50": "#F1F2FE",
        "100": "#E2E5FD",
        "200": "#C6CAFB",
        "300": "#A9B0F9",
        "400": "#8D96F7",
        "500": "#727CF5",
        "600": "#2D3EF0",
        "700": "#0E1EC8",
        "800": "#091485",
        "900": "#050A43",
        "DEFAULT": "#727CF5"
      },
      "purple": {
        "50": "#EFEEF6",
        "100": "#E3E0F0",
        "200": "#C4BFDF",
        "300": "#A8A0CF",
        "400": "#897EBE",
        "500": "#6B5EAE",
        "600": "#53488F",
        "700": "#40376D",
        "800": "#2A2447",
        "900": "#161325",
        "DEFAULT": "#6B5EAE"
      },
      "pink": {
        "50": "#FFF0F5",
        "100": "#FFE0EB",
        "200": "#FFC2D7",
        "300": "#FFA3C3",
        "400": "#FF85AF",
        "500": "#FF679B",
        "600": "#FF1F6D",
        "700": "#D6004B",
        "800": "#8F0032",
        "900": "#470019",
        "DEFAULT": "#FF679B"
      },
      "red": {
        "50": "#FDEDF0",
        "100": "#FAD6DD",
        "200": "#F5ADBA",
        "300": "#F0899C",
        "400": "#EB607A",
        "500": "#E63757",
        "600": "#CC193A",
        "700": "#9A132C",
        "800": "#640C1C",
        "900": "#32060E",
        "DEFAULT": "#E63757"
      },
      "orange": {
        "50": "#FFF1E6",
        "100": "#FFE6D1",
        "200": "#FECA9F",
        "300": "#FEB171",
        "400": "#FD9744",
        "500": "#FD7E14",
        "600": "#D96302",
        "700": "#A24A01",
        "800": "#6A3001",
        "900": "#381900",
        "DEFAULT": "#FD7E14"
      },
      "yellow": {
        "50": "#FEF9EC",
        "100": "#FDF3D8",
        "200": "#FCE8B6",
        "300": "#FADB8F",
        "400": "#F8CF68",
        "500": "#F6C343",
        "600": "#f7c956",
        "700": "#B48409",
        "800": "#7A5906",
        "900": "#3A2B03",
        "DEFAULT": "#F6C343"
      },
      "green": {
        "50": "#E0FFF2",
        "100": "#C7FFE8",
        "200": "#8AFFCE",
        "300": "#52FFB7",
        "400": "#14FF9D",
        "500": "#00D97E",
        "600": "#00AD65",
        "700": "#00ae65",
        "800": "#005733",
        "900": "#002E1B",
        "DEFAULT": "#00D97E"
      },
      "teal": {
        "50": "#E1FDFF",
        "100": "#BDFAFE",
        "200": "#7CF5FE",
        "300": "#3FF0FD",
        "400": "#03E7F7",
        "500": "#02A8B5",
        "600": "#028992",
        "700": "#01686F",
        "800": "#014247",
        "900": "#002123",
        "DEFAULT": "#02A8B5"
      },
      "cyan": {
        "50": "#EAF7FA",
        "100": "#D6EFF5",
        "200": "#B0E0ED",
        "300": "#87CFE3",
        "400": "#62C0DA",
        "500": "#39AFD1",
        "600": "#2891AE",
        "700": "#1E6B80",
        "800": "#144857",
        "900": "#0A2329",
        "DEFAULT": "#39AFD1"
      },
      "white": "#FFFFFF",
      "black": {
        "50": "#DFE9F6",
        "100": "#BCD1EC",
        "200": "#78A3D9",
        "300": "#3978C6",
        "400": "#254F83",
        "500": "#12263F",
        "600": "#0F1F34",
        "700": "#0B1828",
        "800": "#070E18",
        "900": "#03070C",
        "DEFAULT": "#12263F"
      },
      "gray": {
        "100": "#F9FBFD",
        "200": "#EDF2F9",
        "300": "#E3EBF6",
        "400": "#D2DDEC",
        "500": "#B1C2D9",
        "600": "#95AAC9",
        "700": "#5e708b",
        "800": "#586a82",
        "900": "#283E59",
        "DEFAULT": "#B1C2D9"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
