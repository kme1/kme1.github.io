

var myButton0 = document.querySelector('button#btn0');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = storedName + ' is cool';
}

if(!localStorage.getItem('name')) {
  	setUserName();
} else {
 		var storedName = localStorage.getItem('name');
		myHeading.textContent = storedName + ' is cool';
}


myButton0.onclick = function() {
  	setUserName();
}

var myButton1 = document.querySelector('button#btn1');
myButton1.onclick = function() {
  alert('!');
}

var myButton2 = document.querySelector('button#btn2');
myButton2.onclick = function() {
  alert('HELP!');
}

/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var f = document.getElementById('foo');

document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
}, false);   

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
  if( ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done'); 
  }
}, false);
*/
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
