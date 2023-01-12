import { load } from 'cheerio';
import fetch from 'node-fetch';

const memeURL = 'https://memegen-link-examples-upleveled.netlify.app';

const response = await fetch(memeURL);
const body = await response.text();

//const htmlContent = console.log(body);

let $ = load(body);

{
  $ = load(body);
  const path = $('img').attr('src');
  console.log(path);
}
