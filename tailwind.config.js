const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {},
  plugins: [],
}
