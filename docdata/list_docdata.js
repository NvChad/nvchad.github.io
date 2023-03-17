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
  const sentences = mdString.split(
    /\n\s*\n(?!(?:.*```[\s\S]*?```))/,
  );

  // make a new array with named keys
  const final_arr = [];

  sentences.map((x) => {
    // dont include codeblocks and certain strings
    if (
      !(x.includes("<div>") || x.includes("</div>") || x.includes("<iframe>") ||
        x.includes("\n"))
    ) {
      final_arr.push({
        sentence: x.replace(/^\s*-\s*/, ""),
        route: "/" + routes.replace(/\.[^/.]+$/, ""), // rm file extension
      });
    }
  });

  database = [...database, final_arr];
});

// parse data
let data = JSON.stringify(database);
data = data.replace(/^\[|\]$/g, ""); // remove extra []'s
data = `return ${data}`;

fs.writeFileSync("./chad.js", data);
