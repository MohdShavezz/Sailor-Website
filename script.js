

function hideShow() {
  const icon = document.getElementById('hamburger')
  icon.classList.toggle('fa-times')
  icon.classList.toggle('fa-bars')
  document.getElementById('navId').classList.toggle('show-nav')
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.querySelector("header").style.padding =  "20px";
    document.querySelector(".sailor").style.fontSize =  "24px";
  } else {
    document.querySelector("header").style.padding = "28px";
    document.querySelector(".sailor").style.fontSize ="28px";
  }
}

// scroll up fn 
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}