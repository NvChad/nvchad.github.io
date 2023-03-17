import fs from "fs";
import path from "path";

function getFileNames(dirPath) {
  const result = [];
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      result.push(...getFileNames(filePath));
    } else {
      result.push(filePath);
    }
  }

  return result;
}

const files = [...getFileNames("./docs/"), ...getFileNames("./news/")];

let database = [];

/*
This should be the format
[
 { content : "sentence" , route: "/someroute"}
 ...
]
*/

files.forEach((routes) => {
  const mdString = fs.readFileSync(`./${routes}`, "utf-8");

  // split string into array of strings
  const sentences = mdString.split(/\n+(?=\S)/);

  // make a new array with named keys
  const final_arr = sentences.map((x) => {
    return {
      sentence: x.replace(/^\s*-\s*/, ""),
      route: "/" + routes.replace(/\.[^/.]+$/, ""),
    };
  });

  database = [...database, final_arr];
});

fs.writeFileSync("./chad.js", "return " + JSON.stringify(database, null, 2));
