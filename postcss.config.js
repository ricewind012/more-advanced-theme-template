import postcssFunctions from "postcss-functions";
import { runWithResult } from "steam-theming-utils";

const steamVersion = await runWithResult(
	"(async () => (await SteamClient.System.GetSystemInfo()).nSteamVersion)()",
);
const getSteamVersion = () => `"${steamVersion}"`;

/** @type {import("postcss-load-config").Config} */
const config = {
	plugins: [
		postcssFunctions({
			functions: {
				getSteamVersion,
			},
		}),
	],
};

export default config;
