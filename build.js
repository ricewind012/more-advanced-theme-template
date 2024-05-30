import * as CSSSelectorExtract from "css-selector-extract";
import fs from "node:fs";
import path from "node:path";

const CSS_MAP_FILE = "stable.json";

const findKeyByClass = (name) =>
  classes[keys.find((e) => classes[e].find((e) => e.includes(name)))].at(-1);

if (!fs.existsSync(CSS_MAP_FILE)) {
  fs.writeFileSync(
    CSS_MAP_FILE,
    await fetch("https://api.deckthemes.com/stable.json").then((e) => e.text())
  );
}

const classes = JSON.parse(fs.readFileSync(CSS_MAP_FILE));
const keys = Object.keys(classes);

const parsedCss = fs
  .readdirSync("src", { recursive: true })
  .filter((e) => e.endsWith(".css"))
  .map((e) => [
    e,
    // TODO: use postcss directly
    CSSSelectorExtract.process({
      css: fs.readFileSync(path.join("src", e)),
      filters: [
        {
          selector: /#(\w+)/,
          replacement: (_, s) => {
            return `\n.${findKeyByClass(
              path.basename(e, ".css") + "_" + s
            )} /* ${s} */`;
          },
        },
        // Let everything else in to the output
        { selector: /.*/ },
      ],
    }),
  ]);

fs.rmSync("dist", { force: true, recursive: true });
for (const [file, css] of parsedCss) {
  fs.mkdirSync(path.join("dist", path.dirname(file)), { recursive: true });
  fs.writeFileSync(path.join("dist", file), await css);

  console.log("Compiled '%s'", file);
}
