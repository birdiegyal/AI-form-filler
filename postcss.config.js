import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import postcssRgbPlz from "postcss-rgb-plz"

export default {
    plugins: [
        // this is exactly the order these plugins are invoked. so if you swap the first 2, then its going to get messy.
        postcssRgbPlz(),
        tailwindcss(),
        autoprefixer(),
    ],
}
