function scrollToTop() {
    window.scrollTo(0, 0);
};

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