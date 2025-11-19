
let button = document.querySelector("button");
let box = document.querySelector("#box");

button.addEventListener("click", function(){
    let col1 = Math.floor(Math.random()*256);
    let col2 = Math.floor(Math.random()*256);
    let col3 = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${col1}, ${col2}, ${col3})`;
});


