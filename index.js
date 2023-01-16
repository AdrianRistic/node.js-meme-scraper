import axios, { AxiosError, isCancel } from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

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
    });
    for (let i = 3; i < 12; i++) {}

    // search the memes directory, if there are already memes delete those

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

    // put the image links into a new array and put that array into image downloader axios so we get the right image numbers when axios downloads

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

// next step: free the MEMES!!!

getMemes();
