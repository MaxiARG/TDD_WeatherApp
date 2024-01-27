/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  // theme:{
  //   extend:{
  //     colors:{
  //       WHITE: '#ffffff',
  //       LIGHT_GRAY: '#484B4B',
  //       GRAY: '#5D6972',
  //       DARKER_GRAY: '#2C2D35',
  //     }
  //   }

  // },
  plugins: [],
}
