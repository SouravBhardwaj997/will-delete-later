import fs from "fs/promises";
import { execSync } from "node:child_process";

const string = "Hello ";

async function run() {
  for (let i = 0; i < 10; i++) {
    await fs.appendFile("./temp.txt", string, "utf8");

    const command =
      'git add . && git commit -m "Some Commit Message" && git push origin master';

    execSync(command, { stdio: "inherit" });
    console.log("Commit DONE", i);
  }
}

run();
