import { getIssue } from "./github.js";
import { convertIssue } from "./cambria.js";

async function run() {
  const doc = await getIssue();
  console.log(doc);
  const newDoc = await convertIssue(doc);
  console.log(newDoc);
}

// ...
run();
