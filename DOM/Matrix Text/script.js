let p = document.querySelector("p");
let text = p.innerText;

let charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let itr = 0;

function randomText(){
    let str = text.split("").map((char,idx)=>{
        if(idx < itr){
            return char
        }

        return charecters.split("")[Math.floor(Math.random()*charecters.length)]
    }).join("")
    
    p.innerText = str

    itr += 0.2
}

setInterval(randomText,30)