const quotes = [
    {name:"Benjamin Franklin",
    quote:"Tell me and I forget, teach me and I may remember, involve me and I learn."},
    {name: "Dr. Seuss",
    quote:"The more that you read, the more things you will know. The more that you learn, the more places you’ll go."},
    {name: "Mahatma Gandhi",
    quote:"Live as if you were to die tomorrow. Learn as if you were to live forever."},
    {name: "Phil Collins",
    quote: "In learning you will teach, and in teaching you will learn."},
    {name: "Leonardo da Vinci",
    quote:"Learning never exhausts the mind."},
    {name: " Aristotle",
    quote: "For the things we have to learn before we can do them, we learn by doing them."},
    {name: "John F. Kennedy",
    quote:"Leadership and learning are indispensable to each other."},
    {name: "Anton Chekhov",
    quote: "Wisdom…. comes not from age, but from education and learning."},
    {name: "Albert Einstein",
    quote: "Intellectual growth should commence at birth and cease only at death."}
]

let quoteAuthor = document.querySelector("#quoteAuthor");
let quotebtn = document.querySelector("#quote-btn");
let quote = document.querySelector("#quote");

quotebtn.addEventListener("click",displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);

    quote.innerHTML = quotes[number].quote;
    quoteAuthor.innerHTML = quotes[number].name;
}