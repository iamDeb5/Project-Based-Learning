let h1 = document.querySelector("h1");
let aud = new Audio('audios/A0.mp3')

document.body.addEventListener("keydown", (dets) => {
    if (dets.key === "1"){
        aud.play();
    }
   
})

