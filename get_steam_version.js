import fs from "node:fs";
import { connection, runWithResult } from "@web-app-class-maps/scripts";

// This needs an app argument just like @web-app-class-maps/scripts for the
// connection import to work correctly.

async function getSteamVersion() {
	const info = await SteamClient.System.GetSystemInfo();
	return info.nSteamVersion;
}

// This is here since postcss-cli hangs because of cdp
const result = await runWithResult(getSteamVersion);
fs.writeFileSync("steam_version", result.toString());
await connection.close();
