// console.log("Hello World");
// window.onload= ()=> {
//     const heading= document.createElement('h1');
//     const headingText= document.createTextNode("Another heading 1 with javascript");
//     heading.appendChild(headingText);
//     document.body.appendChild(heading);
// }

let textArea= document.querySelector('.text-area')
let textContent= document.getElementById('text-content');
let clearContent= document.getElementById('clear-text-content');

textContent.addEventListener('click',function() {
    textArea.textContent= "Here is some text you have added";
});

clearContent.addEventListener('click',function() {
    textArea.textContent= "";
});
