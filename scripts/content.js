var divBlocker = document.querySelector(".container .pointer-enabled").lastChild;
divBlocker.removeAttribute("style")

// ANOTHER OPTIONS
// var newSpan = document.createElement('div');
// newSpan.innerHTML = divBlocker.innerHTML;
// divBlocker.replaceWith(newSpan);