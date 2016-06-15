// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

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
  }
];

// Create a function to get a random number? Might be more readable to just store it in a variable inside the function. UNLESS I need it globally.

// I was trying to make it harder than it should have been. [i] is what needed to be random.
// But now how am I going to make sure that it doesn't repeat?


// Also this for loop in probably useless?. Does anyone know what they're doing?
// for(var i=0; i < quotesArray.length; i++) {
//   return quotesArray[i].quote;
// }


var getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var getRandomQuote = function() {
  return quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

function printQuote() {
  var randomBackgroundColor = getRandomColor();
  var randomQuote = getRandomQuote();
  var html = "<p class='quote'>" + randomQuote.quote + "</p>";
  html += "<p class='source'>" + randomQuote.source;
  if(randomQuote.citation != ""){
    html += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if(randomQuote.year != ""){
    html += "<span class='year'>" + randomQuote.year + "</span>";
  }
  html += "</p>"
  document.getElementById("quote-box").innerHTML = html;
  document.getElementsByTagName("body")[0].style.backgroundColor=randomBackgroundColor;
  document.getElementById("loadQuote").style.backgroundColor=randomBackgroundColor;
}

printQuote();
