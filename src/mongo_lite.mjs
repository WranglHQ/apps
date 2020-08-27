//from from wrangl/mongo.js
import axios from 'axios';
const out = console.log
const API = 'https://d9k1wacmyi.execute-api.us-east-1.amazonaws.com'

export async function storeFunctionToCloud({ content, token }) {
  try {
    content = content.trim();
    const url = `${API}/dev/module`
    console.log('about to hit axios with token, url, content, config:');
    console.log('token::');
    console.log(token);
    console.log('url::');
    console.log(url);
    console.log('content::');
    console.log(content);

    //trigger upload to new 'wrangl' username account

    console.log('----end of content----');
    //https://github.com/robisonmark/mhac/blob/4a511e24a3b6684dc1031e472bc47197868f06be/src/api/endpoints.js
    //https://stackoverflow.com/questions/6408904/send-post-request-with-data-specified-in-file-via-curl
    const config = { headers: { "Authorization": token, "Content-Type": "text/xml" } };
    console.log(config);
    out('url::')
    out(url);

// TODO start here ??
// ReferenceError: test2 is not defined
// ... figure out how to acutally publish mod from cmd line
//not working rn


    // const restest = await axios.get('https://www.google.com');
    // out(restest);
    // return;
    const res = await axios.post(url, content.trim(), config);
    console.log('axios response res:');
    console.log(res);
    return res.data.manifestParsed;
  } catch (error) {

    out('problem in storeFunctionToCloud::')
    throw error;
  }
}
