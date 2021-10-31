let button = document.getElementById("icon");
console.log(button);
let content = document.getElementById("dropdown-content");
console.log(content);
button.addEventListener("click", function(){
    content.classList.toggle("hidden");
})