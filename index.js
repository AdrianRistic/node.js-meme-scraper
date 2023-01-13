import { load } from 'cheerio';
import fetch from 'node-fetch';
import path from 'path';

const memeURL = 'https://memegen-link-examples-upleveled.netlify.app';

const response = await fetch(memeURL);
const htmlContent = await response.text();

let $ = load(htmlContent);

{
  $ = load(htmlContent);
  const path = $('img').attr('src');
  console.log(path);
}
