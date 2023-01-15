//import { load } from 'cheerio';
import * as cheerio from 'cheerio';
import fs from 'fs';
import { ImagesPayload } from 'imastify';
import fetch from 'node-fetch';

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
    for (let i = 3; i < 13; i++) {
      console.log(items[i]);
    }
    //console.log(items[3]);
  } catch (error) {
    console.log(error);
  }
}

// Run getMemes
getMemes();
