//parse contents of apps dir
// publish each discovered app using storeFunctionToCloud
// 
import dotenv from 'dotenv'
import { storeFunctionToCloud } from './mongo_lite.mjs';
import { getAllApps } from './getAllApps.mjs';
dotenv.config();

const out = console.log
const token = process.env.WRANGL_PUBLISH_TOKEN;

// out(token);

//now, run... 
// storeFunctionToCloud({ content: 'lalala', token });
async function main() {

  const appContents = await getAllApps();
  out(appContents)
  out(appContents.length)

  appContents.forEach(async content => {
    await storeFunctionToCloud({ content, token });
  })
}

main()