import fs from "fs";
import { exec } from "child_process";

const string = "Hello ";

Array.from({ length: 10 }).map(async (el) => {
  fs.appendFile("./temp.txt", string, "utf8", () => {
    const command =
      'git add . && git commit -m "Some Commit Message" && git push origin master';

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
    console.log("Commit DONE", el);
  });
});
