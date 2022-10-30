// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/**
 * Strings
 *
 */

// string backtick
var data = `Hello World`;
// string doublequotes
var data = 'Hello World';
// string singlequotes
var data = 'Hello World';

var name = 'Xavier';
var salutation = 'Mr.';

var greet = `${salutation} ${name}`; // we can embed the varaible or functions into a string

var bigString = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing`;

// no cancatenation , we can pass on multiple lines

var bigString2 =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
// old school methodology acheived by concatenation

var pieceOfHtmlUsingBackTick = `<div class="card">
<div class="card-body">
  This is some text within a card body.
</div>
</div>`;

var pieceOfHtmlWithoutUsingBackTick =
  '<div class="card">' +
  '<div class="card-body">' +
  'This is some text within a card body.' +
  '</div>' +
  '</div>';

document.write(pieceOfHtmlUsingBackTick);

for (let char of greet) console.log(char);

// console.log(pieceOfHtmlUsingBackTick, pieceOfHtmlWithoutUsingBackTick);
