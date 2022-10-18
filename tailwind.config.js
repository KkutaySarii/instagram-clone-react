/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0095F6",
        facebookC: "#385185",
        forgetPass: "#00376B",
        signIn: "#0095F6",
        footer: "#8e8e8e",
        formBorder: "#dbdbdb",
      },
      fontSize: {
        common: "14px",
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')"
      }
    },
  },
  plugins: [],
}
