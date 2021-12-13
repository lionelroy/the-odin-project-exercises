// Targeting Nodes with Selectors
// div.display
// .display
// #container > .display
// div#container > div.display
// You can also use relational selectors
// (i.e. firstElementChild or lastElementChild etc.) with special properties owned by the nodes.

const container = document.querySelector('#container');
// select the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);
// select the first child of #container => .display

const controls = document.querySelector('.controls');
// select the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display

// ------------------------------Query Selectors----------------------
element.querySelector(selector); //returns reference to the first match of selector
element.querySelectorAll(selectors); //returns a “nodelist” containing references to all of the matches of the selectors

const div = document.createElement('div'); //Created new element

// Append Elements
parentNode.appendChild(childNode); //appends childNode as the last child of parentNode
parentNode.insertBefore(newNode, referenceNode); //inserts newNode into parentNode before referenceNode

// Remove Elements
parentNode.removeChild(child); //removes child from parentNode on the DOM and returns reference to child

const div = document.createElement('div');
// create a new div referenced in the variable 'div'

// ---------------------------Adding inline style-----------------------
div.style.color = 'blue';
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');
// adds several style rules

div.style.background - color; // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor; // accesses the divs background-color style
div.style['background-color']; // also works
div.style.cssText = 'background-color: white'; // ok in a string

// ---------------------------------Editing Attributes------------------------
div.setAttribute('id', 'theDiv');
// if id exists update it to 'theDiv' else create an id
// with value "theDiv"

div.getAttribute('id');
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');
// removes specified attribute

// --------------------------Classes---------------------------
div.classList.add('new');
// adds class "new" to your new div

div.classList.remove('new');
// remove "new" class from div

div.classList.toggle('active');
// if div doesn't have class "active" then add it, or if
// it does, then remove it

// It is often standard (and more clean) to toggle a CSS style rather than adding
// and removing inline CSS.
// Adding text content

div.textContent = 'Hello World!';
// creates a text node containing "Hello World!" and
// inserts it in div

//---------------------------- Adding HTML content---------------------------
div.innerHTML = '<span>Hello World!</span>';
// renders the html inside div

// --------------------------------Events-------------------------------
// method 1
/* <button onclick="alert('Hello World')">Click Me</button> */

// This solution is less than ideal because we’re cluttering our HTML with JavaScript.
// Also, we can only have 1 “onclick” event per element.

// method 2
// <!-- the html file -->
// <button id="btn">Click Me</button>

// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

// This is a little better. We’ve moved the JS out of the HTML and into a JS file,
// but we still have the problem that a DOM element can only have 1 “onclick” property.

// // method 3
// <!-- the html file -->
// <button id="btn">Click Me Too</button>

// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert('Hello World');
});

// Now, we maintain separation of concerns,
// and we also allow multiple event listeners if the need arises.
// Method 3 is much more flexible and powerful, though it is a bit more complex to set up.



// Note that all 3 of these methods can be used with named functions like so:

// <!-- the html file -->
// <!-- METHOD 1 -->
// <button onclick="alertFunction()">CLICK ME BABY</button>

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
// METHOD 2
btn.onclick = alertFunction;
// METHOD 3
btn.addEventListener('click', alertFunction);

// Using named functions can clean up your code considerably, 
// and is a really good idea if the function is something 
// that you are going to want to do in multiple places.

// With all three methods we can access more information about the event by 
// passing a parameter to the function that we are calling. Try this out on your own machine:
btn.addEventListener('click', function (e) {
  console.log(e);
});



// -------------------------------Exemple for querySelectorAll---------------------
/* <div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div> */

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});