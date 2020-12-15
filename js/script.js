/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Quotes array with 4 object properties. This array is a collection of quotes and details of the quote. 
***/
quotes = [ 
  {
    quote: 'To be or not to be',
    source: 'William Shakespeare',
    citation: 'Hamlet',
    year: 1603
  },
  {
    quote: 'A writer never has a vacation. For a writer life consists of either writing or thinking about writing',
    source: 'Eugene Ionesco',
    citation: 'Unknown Book',
    tags: 'Humor',
    year: 1927
  },
  {
    quote: 'I have a good collection of cookery books. This is not so much because I like cooking, but because I like eating.',
    source: 'Louise Brown',
    citation: 'Unknown Book',
    year: 1993
  },
  {
    quote: 'People are like peanuts. Sometimes you open their shell and there is nothing inside.',
    source: 'Timothy Bourne',
    citation: 'The Studio',
    tags: 'Thoughtful',
    year: 2020
  },
  {
    quote: 'The rest of my work, besides sketching and keeping a diary, which was the most troublesome of all, consisted in making geological and zoological collections.',
    source: 'John Hanning Speke',
    citation: 'Unknown Book',
    year: 2020
  }
]

/***
 * This Function is used to generate a random number from the length of the quotes array (5)
***/
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length)
  return quotes[randomNum]
}

//This function generated a random RGB value. Example output = rgb(223,23,184)
function randomRGB() {
  let red = Math.floor(Math.random() * 256 );
  let green = Math.floor(Math.random() * 256 );
  let blue = Math.floor(Math.random() * 256 );
  rgbColor = `rgb(${red}, ${green}, ${blue})`;
  return rgbColor;
}

//https://bit.ly/3gGcvO4 -> Referenced from this Treehouse student's question. Used bitly.com to shorten the link for visibility. 
  const mainBody = document.getElementById("mainBody");
  const myButton = document.getElementById("load-quote");
  
  myButton.addEventListener("click", () => {
  mainBody.style.backgroundColor = randomRGB();                       
  });


/***
 * This function is used to print out a random quote with its source, tags, and year properties (if they exist)
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source"> ${randomQuote.source}`

  if (randomQuote.year) {
    html+= `, <span>${randomQuote.year}, </span>`
  }
  if (randomQuote.tags) {
    html+= `<span>${randomQuote.tags}, </span>`
  }
  if (randomQuote.citation) {
    html+= `<span>${randomQuote.citation}</span>`
  }
  `</p>`

  return document.getElementById('quote-box').innerHTML = html; 
}

// This will refresh the quote every 6 seconds
setInterval(printQuote, 6000)


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
