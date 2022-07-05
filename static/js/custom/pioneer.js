
// x-scroll navigation controller
function slideRightNavigatorFunc () {
  var container = document.getElementById(this.getAttribute('data-x-scroll-id'));
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    container.scrollLeft -= 200;
    scrollAmount += 200;
    if (scrollAmount >= 201) {
      window.clearInterval(slideTimer);
    }
  }, 10);
};

function slideLeftNavigatorFunc () {
  var container = document.getElementById(this.getAttribute('data-x-scroll-id'));
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    container.scrollLeft += 200;
    scrollAmount += 200;
    if (scrollAmount >= 201) {
      window.clearInterval(slideTimer);
    }
  }, 10);
  console.log(container.scrollLeft)
  console.log(container.offsetWidth)
};


var slideRightNavigator = document.getElementsByClassName('x-scroll-navitagor slide-to-right');
for (var i = 0; i < slideRightNavigator.length; i++) {
  slideRightNavigator[i].addEventListener("click", slideRightNavigatorFunc);
}
var slideLeftNavigator = document.getElementsByClassName('x-scroll-navitagor slide-to-left');
for (var i = 0; i < slideLeftNavigator.length; i++) {
  slideLeftNavigator[i].addEventListener("click", slideLeftNavigatorFunc);
}


// Light box trigger via external link - PRODUCT PAGE
const lightbox = document.getElementById('lightbox');
const lightboxInstance = mdb.Lightbox.getInstance(lightbox)
const lightboxTogglers = document.getElementsByClassName('lightboxToggler');

for (var i = 0; i < lightboxTogglers.length; i++) {
  lightboxTogglers[i].addEventListener('click', () => {
    lightboxInstance.open(0);
  });
}

