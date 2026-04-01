import fs from "fs/promises";
import { promisify } from "node:util";
import { execSync, exec as originalExec } from "node:child_process";

const exec = promisify(originalExec);
const string = "Hello ";

Array.from({ length: 10 }).map(async (el, i) => {
  await fs.appendFile("./temp.txt", string, "utf8");
  const command =
    'git add . && git commit -m "Some Commit Message" && git push origin master';

  await execSync(command);
  console.log("Commit DONE", i);
});
