var myObject = new Vue({
    el: '#app',
    data: {message: 'Like'}
})

let users = document.getElementsByClassName('like');
let likes = document.getElementsByClassName("likes--comment");

function myFunction() {
    if (!event.target) return;
    myObject.message = onClick(event.target);
}
var clicks = 0;

function onClick(target) {
    if (clicks != 0) clicks = parseFloat(target.nextSibling.nextSibling.innerHTML);
    if (clicks == undefined || clicks == null) clicks = 0;
    clicks += 1;
    target.nextSibling.nextSibling.innerHTML = clicks;
};

function resetLikes() {

    for (let i = 0; i < likes.length; i++) {
        likes[i].innerHTML = 0;
    }
};

