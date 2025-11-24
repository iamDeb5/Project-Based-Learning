let arr = [
    {dp: "https://www.instyle.com/thmb/zaDdTVwp0BsBStofbA88N63O05E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kylie-jenner-black-bra-instagram-lead-ea133ac040794bdda07fc999b8877826.jpg", story: "https://i.pinimg.com/originals/e4/cc/98/e4cc98a2521a34d379f27d1198849ddc.jpg"},
    {
        dp: "https://www.mordeo.org/download/12363/",
        story: "https://wallpapers.oneindia.com/ph-1024x768/2015/12/gigi-hadid_1450086846230.jpg"
    },
    {
        dp: "https://data1.ibtimes.co.in/photo/en/full/64171/television-personality-kim-kardashian-poses-premiere-promise-los-angeles-california-u-s.jpg?w=900",
        story: "https://extra-images.akamaized.net/image/a0/5by6/2016/06/15/a0a79c688b445b2787eeed943ca2726b_md.jpeg"
    },
    {
        dp: "https://www.instyle.com/thmb/s2SI2XPU-TlQkgdEswaQlhj2lGw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Kendall-Jenner-Lead-01a9ffdddee24ba890ab5edf859595b7.jpg",
        story: "https://cdn.mos.cms.futurecdn.net/P7SSvqNopK8HqaQjoDwGF5.jpg"
    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDg-xQZihJZyZWpswC4cYcxAI6QSMlVmcVFg&s",
        story: "https://pagesix.com/wp-content/uploads/sites/3/2019/04/screen-shot-2019-04-15-at-3.57.00-pm.png?w=471"
    },
    {
        dp: "https://i.ebayimg.com/images/g/cOYAAeSwlW5nsrig/s-l400.jpg",
        story: "https://pbs.twimg.com/media/GFNiCs0agAARdGR.jpg"
    }

]

let storiyan = document.querySelector("#storiyan");
let clutter = ""

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",(dets)=>{
    
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector("#full-screen").style.display = "none"
    }, 3000);
})