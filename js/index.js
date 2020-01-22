//jshint esversion:6

window.onscroll = function() {stickyFunction();};

var header = document.getElementById("stickynav");

// offsetTop returns the offset coordinates for the selected elements, relative to the document.
var sticky = header.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) { // pageYOffset properties returns the
    //pixels the current document has been scrolled from the upper left corner of the window vertically
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
