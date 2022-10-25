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
        searchBar: "#efefef",
      },
      fontSize: {
        common: "14px",
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')",
        'loading-icon': "url('https://cdn-icons-png.flaticon.com/512/174/174855.png')",
        'loading-meta': "url('https://branditechture.agency/wp-content/uploads/2021/11/Instagram-Meta-Gradient-Logo-SVG-1.svg')"
      }
    },
  },
  plugins: [],
}
