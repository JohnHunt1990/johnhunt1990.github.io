// var myVar = 'Bob';
// var myNum = 1000;
// var myBoolean = false;
// var myArray = [1, 'Bob']

// /* comment */
// myHeading2.textContent = myVar;
// alert('This is a test.');

// function multiply(x, y){
//     return (x * y);
// }

// alert(multiply(5, 5));

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.jpg') {
        myImage.setAttribute ('src', 'images/catninja.jpg');
    } else {
        myImage.setAttribute ('src', 'images/firefox-logo.jpg');
    }
       
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = ('Look ' + myName + ' I wrote a thing!');
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {   
    var storedName = localStorage.getItem('name');
    myHeading.textContent = ('Look ' + storedName + ' I wrote a thing!');
}

myButton.onclick = function() {
    setUserName();
}


