let elem = document.querySelectorAll(".elem");

elem.forEach(function(dets){
    dets.addEventListener("mouseenter",() => {
        dets.childNodes[1].style.opacity = 1;
    })
    dets.addEventListener("mouseleave",() => {
        dets.childNodes[1].style.opacity = 0;
    })
    dets.addEventListener("mousemove",(eve) => {
        dets.childNodes[1].style.left = eve.x+"px";
        // dets.childNodes[1].style.top = eve.y+"px";
    })
})
