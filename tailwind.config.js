/** @type {import('tailwindcss').Config} */

/*
NOTE: 
> the BEST way to do the transformation is use a hsl function defined in the @lib/hsl. pass it the var() vals and thats it.
*/
export default {
    darkMode: ["class"],

    // these files are scanned by postCSS.
    content: ["./src/routes/**/*.tsx", "./src/global.css"],

    // i need to know what the fuck is this.
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            // why the fuck we are not directly using var here and hsl there. ANS: opacity modifier syntax wont work and would eventually break the shadcn ui.

            colors: {
                // this ain't going to work btw. postcss preprocess this string before putting it in the output.css. for this to work, var(--background) should be resolved first and then, hsla should be called.
                background: "var(--background)",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },
        },
    },
    // plus this as well.
    /* 
	NOTE:
	> we can't simply define a custom plugin here because then we would have to apply the transformation on each CSS variable.
	*/
    plugins: [require("tailwindcss-animate")],
};
