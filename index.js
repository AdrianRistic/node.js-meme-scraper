//import { load } from 'cheerio';
import * as cheerio from 'cheerio';
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

      const photo = $(el).find('img').attr('src');

      // Push the data into the items array
      items.push({
        photo,
      });
    });

    console.log(items);
  } catch (error) {
    console.log(error);
  }
}

// Run getMemes
getMemes();
