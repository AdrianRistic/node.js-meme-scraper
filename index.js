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
async function getFormulaOneDrivers() {
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

    // Selecting Each col-12 class name and iterate through the list
    $('div').map((i, el) => {
      // Select rank, points, first name, last name, team and photo

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

// Run getFormulaOneDrivers
getFormulaOneDrivers();
