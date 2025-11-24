let btn = document.querySelector("button");
let h5 = document.querySelector("h5");

let isStatus = true;
btn.addEventListener("click", function(){
    if(isStatus == true){
        btn.textContent = "unfollow"
        btn.style.backgroundColor = "#cbcbcb"
        h5.textContent = "followed"
        h5.style.color = "green"
        isStatus = false;
    }
    else{
        btn.textContent = "follow"
        btn.style.backgroundColor = "rgb(224, 124, 219)"
        h5.textContent = "stranger"
        h5.style.color = "red"
        isStatus = true;
    }
})