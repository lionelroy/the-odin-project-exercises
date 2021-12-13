const container = document.querySelector('#container');
// a <p> with red text that says “Hey I’m red!”
const para = document.createElement('p');
para.textContent = 'Hey, I\'m red!';
para.style.color = 'red';
para.classList.add('para');

container.appendChild(para);

// an <h3> with blue text that says “I’m a blue h3!”
const header = document.createElement('h3');
header.textContent = 'I\'m a blue h3!';
header.style.color = 'blue';
header.classList.add('header');

container.appendChild(header);



// a <div> with a black border and pink background color with the following elements inside of it:
const content = document.createElement('div');

//     another <h1> that says “I’m in a div”
const contentHeader = document.createElement('h1');
contentHeader.textContent = 'I\'m in a div';
contentHeader.classList.add('contentHeader');

//     a <p> that says “ME TOO!”
const contentPara = document.createElement('p');
contentPara.textContent = 'ME TOO!';
contentPara.classList.add('contentPara');

// append elements in the the content(div)element before appending the content(div)element into the container
content.appendChild(contentHeader);
content.appendChild(contentPara);

content.style.border = '5px solid black';
content.style.padding = '20px';
content.style.margin = '50px';
content.style.backgroundColor = 'pink';
content.classList.add('content');

container.appendChild(content);





btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

btn.addEventListener('click', function (e) {
e.target.style.background = 'blue';
});