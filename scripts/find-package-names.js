const fs = require("fs");
const path = require("path");

const MATERIAL_DIR = path.join("node_modules", "@material");

const pkgDist = pkg => path.join(MATERIAL_DIR, pkg, "dist");

const packageNames = fs
  .readdirSync(MATERIAL_DIR)
  .filter(pkg => fs.existsSync(pkgDist(pkg)))
  .map(pkg => {
    const jsFile = fs
      .readdirSync(pkgDist(pkg))
      .find(file => file.match(/(?!.min).js$/));
    return jsFile && [pkg, jsFile];
  })
  .filter(Boolean)
  .reduce(
    (acc, [pkg, jsFile]) => ({
      ...acc,
      [path.join("@material", pkg) + '$']: path.join("@material", pkg, "dist", jsFile)
    }),
    {}
  );

console.log(JSON.stringify(packageNames, null, "\t"));
