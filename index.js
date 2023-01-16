import axios, { AxiosError, isCancel } from 'axios';
//import { load } from 'cheerio';
import * as cheerio from 'cheerio';
import fs from 'fs';
import { ImagesPayload } from 'imastify';
import fetch from 'node-fetch';
import path from 'path';

//import path from 'path';

//const memeURL = 'https://memegen-link-examples-upleveled.netlify.app';

//const response = await fetch(memeURL);
//const htmlContent = await response.text();

//let $ = load(htmlContent);

{
  //$ = load(htmlContent);
  //const path = $('img').attr('src');
  //console.log(path);
}

// Function starts here
async function getMemes() {
  try {
    // Fetch data from URL and store the response into a const
    const response = await fetch(
      'https://memegen-link-examples-upleveled.netlify.app',
    );
    // Convert the response into text
    const body = await response.text();

    // Load body data
    const $ = cheerio.load(body);

    // Create empty array
    const items = [];

    // Selecting Each div and iterate through the list
    $('div').map((i, el) => {
      // Select img tag and src attribute

      const meme = $(el).find('img').attr('src');

      // Push the data into the items array
      items.push(meme);
      /*

      }
      */
    });
    for (let i = 3; i < 12; i++) {
      console.log(items[i]);
    }

    const dir = '../memes';

    fs.readdir(dir, (err, files) => {
      if (err) throw err;
      if (files.length !== 0) {
        for (const file of files) {
          fs.unlink(path.join(dir, file), (err) => {
            if (err) throw err;
          });
        }
      }
    });

    const memeArray = items.slice(3, 13);
    for (let i = 0; i < 10; i++) {
      const customstring = '../memes/spicymeme' + (i + 1) + '.png';
      await axios({
        method: 'get',
        url: memeArray[i],
        responseType: 'stream',
      }).then(function (response) {
        response.data.pipe(fs.createWriteStream(customstring));
      });
    }

    // return items;
  } catch (error) {
    console.log(error);
  }
}

/*async function memeprinter(items) {
  const payload = new ImagesPayload({
    // example headers
    headers: {
      Cookie: 'name=cookie',
    },

    // http or https agent
  });
  const {
    // Image Data
    image,
    // Image size in bytes
    size,
    // MIME ContentType
    contentType,
    // File extension - png, jpg and etc.
    type,
    // Image Url
    url,
    // Download status
    downloaded,
    //  Image hash
    hash,
  } = await payload.request(
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  );
  fs.writeFileSync('../memes/spicymeme.png', image.source);

  items[3] =
    'https://memecomplete.com/edit/https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg';
  for (let i = 3; i < 13; i++) {
    const {
      image,
      // Image size in bytes
      size,
      // MIME ContentType
      contentType,
      // File extension - png, jpg and etc.
      type,
      // Image Url
      url,
      // Download status
      downloaded,
      //  Image hash
      hash,
    } = await payload.request(items[i]);
    const custom = '../memes/spicymeme' + i + '.jpg';
    fs.writeFileSync(custom, image.source);
  }
}


//const items = getMemes();
//memeprinter(items);
*/
getMemes();

/*axios({
  method: 'get',
  url: 'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300',
  responseType: 'stream',
}).then(function (response) {
  response.data.pipe(fs.createWriteStream('../memes/spicymeme.png'));
});
*/

async function doShit(item) {
  const customstring = '../memes/spicymeme' + item + '.png';
  await axios({
    method: 'get',
    url: item,
    responseType: 'stream',
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(customstring));
  });
}

async function memeprinter(items) {
  try {
    for (let i = 3; i < 12; i++) {
      console.log(items[5] + '    spammyspamspam');
      setTimeout(await doShit(items[i]), 500);
    }
  } catch (error) {
    return { error: error };
  }
}

/*const items = getMemes();
memeprinter(items);
*/
