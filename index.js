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

var name = 'Srini';
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

var count = 0;
for (let char of greet) {
  console.log(`String postion at ${count} :: ${char}`);
  count++;
}

for (let i = 0; i < greet.length; i++)
  console.log(`chartAt position  ${i} :: `, greet.charAt(i));

console.clear();

console.log('changing string to uppercase ', greet.toUpperCase());
console.log('changing string to lowercase ', greet.toLowerCase());

console.log(
  'String.includes() return boolean',
  greet.toLowerCase().includes('xavier')
);

console.log(
  'String.startswith() return boolean',
  greet.toLowerCase().startsWith('m')
);

console.log(
  'String.endsWith() return boolean',
  greet.toLowerCase().endsWith('r')
);

console.log('String.indexOf()', greet.toLowerCase().indexOf('x'));

// indexof based condition sample
if (greet.toLowerCase().indexOf('xavi') > -1) {
  console.log('hello', greet, '!!!');
}

var forTrimSample = `            <div>                </div>           `;
// console.log('String.trim()', forTrimSample.trim());
console.log('String.trimStart()', forTrimSample);
// console.log(pieceOfHtmlUsingBackTick, pieceOfHtmlWithoutUsingBackTick);

var replacedString = greet.replace('i', '');
var replacedString2 = greet.replaceAll('i', '');

console.log('String.replace()', replacedString);
console.log('String.replace()', replacedString2);

//if you want to cut a portion of string
console.log(greet.slice(0, 2));
console.log(greet.substring(2, 5));
console.log(greet.substr(-1, 2));

console.log('String.padStart()', '123'.padStart(10, 0));
console.log('String.padStart()', '123'.padEnd(10, 0));

var number = '123';

console.log(number);
console.log(parseInt(number)); // usage of radix number advantages

// TODO
// Applying for of generate all first letters in capital letters for following string
// JACK AND JILL WENT UP THE HILL -> Jack And Jill Went Up The Hill
