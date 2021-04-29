console.log('Hello world'); //did this to test the file is linked into the HTML

//these are all DOM - Document Object Modelling commands 

var images = document.getElementsByTagName('img');
console.log(images);

var anchors = document.getElementsByTagName('a');
console.log(anchors);

var phrase = document.getElementsByTagName('p');
console.log(phrase);

var heading = document.getElementById("heading");
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.nodeType);

// modifying the webpage through Js

var main_content = document.getElementById ('main_content');
main_content.setAttribute('align','right');

var heading = document.getElementById ('heading')
heading.innerHTML = 'JavaScript updated this'

// adding content through Js

var main_content = document.getElementById('main_content');

var new_heading = document.createElement('h2');
var new_phrase = document.createElement('p');

new_heading.innerHTML = 'This is a Js Heading';
new_phrase.innerHTML = 'This is some sameple placehoder text that is being added via JavaScript';

main_content.appendChild(new_heading);
main_content.appendChild(new_phrase);

// Handling Events
// .onclick is a staatemnt so end it with ;

var btn = document.getElementById('testbutton');
btn.onclick = function()
    {
        alert('hello world');
        alert('bye world');
    };

// getting info from elements

// this is looking for an element called 'myform'- then it refers to the username field - then you are asking for the value = by using equals you are setting the value
// document.myform.u_name.value = "Taimour Saeed"

