let h1 = document.querySelector("h1");
let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let count = 0;

inc.addEventListener("click",function(){
    count++;
    h1.textContent = count;
});

dec.addEventListener("click", function(){
    count--;
    h1.textContent = count;
});
