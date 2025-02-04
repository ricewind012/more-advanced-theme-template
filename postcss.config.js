import fs from "node:fs";
import yargs from "yargs";
import postcssFunctions from "postcss-functions";
import postcssSass from "@csstools/postcss-sass";
import { selectorReplacerPlugin } from "steam-theming-utils/postcss-plugin";

const { argv } = yargs(process.argv);

// Recreate the CSS output directory
fs.rmSync(argv.dir, { recursive: true, force: true });
fs.mkdirSync(argv.dir);

const result = fs.readFileSync("steam_version").toString();
const getSteamVersion = () => `"${result}"`;

/** @type {import("postcss-load-config").Config} */
export default {
	map: false,
	plugins: [
		selectorReplacerPlugin(),
		postcssSass({
			silenceDeprecations: ["legacy-js-api"],
		}),
		postcssFunctions({
			functions: {
				"steam-version": getSteamVersion,
			},
		}),
	],
};
