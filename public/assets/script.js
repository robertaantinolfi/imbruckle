if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

function scrollToTop() {
    window.scrollTo(0, 0);
};

function toggleArrow() {
    const arrow = document.querySelector('.arrow');
    arrow.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');

  images.forEach((image) => {
    // Check if the image has already finished loading
    if (image.complete) {
      resizeImage(image);
    } else {
      // If not, wait for the load event
      image.addEventListener('load', () => {
        resizeImage(image);
      });
    }
  });
});

function resizeImage(image) {
  const naturalWidth = image.naturalWidth;
  const naturalHeight = image.naturalHeight;

  if (naturalWidth > 0 && naturalHeight > 0) {
    if (naturalWidth < naturalHeight) {
      image.style.width = '80%';
      image.style.paddingLeft = '20%';
    } else {
      image.style.width = '90%';
      image.style.paddingLeft = '10%';
    }
  }
}

var currElem = null; //will hold the element that is bold now
function BoldText(elem) {
    if (elem != currElem) { //do thing if you're clicking on a bold link
    if (currElem) //if a link bold right now unbold it
    currElem.style.fontWeight='normal';
    currElem = elem; //assign this element as the current one
    elem.style.fontWeight='bold';  //make the element clicked bold
    }
}

function removeLocationHash(){
    var noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL) 
}
window.addEventListener("popstate", function(event){
    removeLocationHash();
});
window.addEventListener("hashchange", function(event){
    event.preventDefault();
    removeLocationHash();
});
window.addEventListener("load", function(){
    removeLocationHash();
});