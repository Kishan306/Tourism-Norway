window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("back-to-top-id").className = "back-to-top-visible";
  } else {
    document.getElementById("back-to-top-id").className = "back-to-top";
  }
}