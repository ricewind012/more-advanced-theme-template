import postcssSimpleVars from "postcss-simple-vars";
import postcssNested from "postcss-nested";

/** @type {import("postcss-load-config").Config} */
const config = {
	plugins: [postcssSimpleVars, postcssNested],
};

export default config;
