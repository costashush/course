var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/velcoz_image.png') {
      myImage.setAttribute ('src','images/zyra_image.png');
    } else {
      myImage.setAttribute ('src','images/velcoz_image.png');
    }
}


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'MiniVelcoz, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}