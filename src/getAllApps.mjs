
import readdir from 'recursive-readdir';
import fs from 'fs'

export async function getAllAppFiles() {
  const files = await readdir("./apps");
  return files;
}

function getFileAppContents(relativeFilePath) {
  const fileContents = fs.readFileSync(relativeFilePath).toString();
  const appsStrings = fileContents.split('##WRANGLAPPBREAK##').filter(i => i);
  return appsStrings;
}

export async function getAllApps() {
  const files = await getAllAppFiles();
  let appContents = [];
  files.forEach(f => {

    let fileAppContents = getFileAppContents(f);
    appContents = appContents.concat(fileAppContents);

  })
  return appContents;
}
