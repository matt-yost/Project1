// Array of quotes and properties as objects
var quotesArray = [
  {
    quote: "I hated every minute of training, but I said 'Don't quit. Suffer now and live the rest of your life as a champion.",
    source: "Muhammad Ali",
    citation: "",
    year: "",
    tags: "inspirational"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
    source: "Helen Keller",
    citation: "",
    year: "",
    tags: "inspirational"
  },
  {
    quote: "Strive to be whatever you want to be. Fate might be a lie, but if it isn't, then worrying abut it won't change a thing.",
    source: "Alyn Shir",
    citation: "Kingdoms of Amalur: Reckoning",
    year: "",
    tags: "fate"
  },
  {
    quote: "What you do today can improve all your tomorrows.",
    source: "Ralph Marston",
    citation: "",
    year: "",
    tags: "motivation"
  },
  {
    quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    source: "Aristotle",
    citation: "",
    year: "",
    tags: "education"
  },
  {
    quote: "The whole purpose of education is to turn mirrors into windows.",
    source: "Sydney J. Harris",
    citation: "",
    year: "",
    tags: "education"
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    source: "Nelson Mandela",
    citation: "",
    year: "",
    tags: "education"
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    source: "Confucius",
    citation: "",
    year: "",
    tags: "life"
  },
  {
    quote: "Life is not a problem to be solved, but a reality to be experimented.",
    source: "Soren Kierkegaard",
    citation: "",
    year: "",
    tags: "life"
  },
  {
    quote: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    source: "Winston Churchill",
    citation: "",
    year: "",
    tags: "life"
  },
  {
    quote: "All grown-ups were once children... but only few of them remember it.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince",
    year: "",
    tags: "life"
  }
];

// Return a random color
var getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Return a random Object in the quotesArray
var getRandomQuote = function() {
  return quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

// Print quote to document
var printQuote = function() {
  var randomBackgroundColor = getRandomColor();
  var randomQuote = getRandomQuote();
  // Add individual elements to HTML
  var html = "<p class='quote'>" + randomQuote.quote + "</p>";
  html += "<p class='source'>" + randomQuote.source;
  // If quote's citation is not an empty string then add it to the HTML
  if(randomQuote.citation != ""){
    html += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  // If quote's year is not an empty string then add it to the HTML
  if(randomQuote.year != ""){
    html += "<span class='year'>" + randomQuote.year + "</span>";
  }
  html += "</p>"
  document.getElementById("quote-box").innerHTML = html;
  // Every time loadQuote button is clicked change the background color of the body and the button
  document.getElementsByTagName("body")[0].style.backgroundColor=randomBackgroundColor;
  document.getElementById("loadQuote").style.backgroundColor=randomBackgroundColor;
}

// Event listener to respond to clicks on the page
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
