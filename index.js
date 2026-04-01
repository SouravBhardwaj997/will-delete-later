import fs from "fs";
import { exec } from "child_process";

const string = "Hello";

fs.writeFile("./temp.txt", string, "utf8", () => {});

const command = "git status";

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
