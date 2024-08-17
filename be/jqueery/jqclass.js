window.onload = function () {
    var contener = document.getElementById("container");

    var selected = contener.getElementsByClassName("change-me");

    for (var j = 0; j < selected.length; j++) {

        var child = selected[j].children;
        for (var i = 0; i < child.length; i++) {
            child[i].style.backgroundColor = "black";
            child[i].style.color = "white";
        }

    }
}
//************************ ronny class exampale****************** 



/// Vanila JS of HTML4 - without querySelectorAll
/*
var container = document.getElementById('container');
var uls = container.getElementsByClassName('change-me');
for (var j=0; j<uls.length; ++j) {
  var lis = uls[j].getElementsByTagName('li');
  for (var i=0; i<lis.length; ++i) {
    var li = lis[i];
    li.style.color = '#FFF';
    li.style.background = '#000';
  }
}
*/

/// Vanila JS of HTML5 - with querySelectorAll
/*
var lis = document.querySelectorAll('#container ul.change-me li');
for (var i=0; i<lis.length; ++i) {
  var li = lis[i];
  li.style.color = '#FFF';
  li.style.background = '#000';
}
*/

/// jQuery
// $('#container ul.change-me li').css({color:'#FFF', background:'#000'});







