const user = [
    {
        img: "https://data2.nssmag.com/images/galleries/41977/cover-lana.webp",
        name: "Lana Del Rey",
        profession: "Singer",
        desc: "American singer known for cinematic and dreamy music."
    },
    {
        img: "https://stylecaster.com/wp-content/uploads/2024/07/GettyImages-1822981405.jpg?w=800",
        name: "Ariana Grande",
        profession: "Singer",
        desc: "Pop diva with iconic high vocals and chart-topping hits."
    },
    {
        img: "https://i.pinimg.com/564x/82/dc/bc/82dcbc51522a31e891222e921bc6a8c8.jpg",
        name: "Zendaya",
        profession: "Actress",
        desc: "Versatile actress known for Euphoria & Marvel roles."
    },
    {
        img: "https://i.pinimg.com/236x/dd/86/b6/dd86b635382fd8047919b6c32188b096.jpg",
        name: "Emma Watson",
        profession: "Actress",
        desc: "British actress famous for playing Hermione Granger."
    },
    {
        img: "https://media.glamour.com/photos/646a84f7aa366dbb5f41f8ec/master/w_2560%2Cc_limit/GettyImages-1492016278.jpg",
        name: "Jennifer Lawrence",
        profession: "Actress",
        desc: "Known for Hunger Games and Oscar-winning roles."
    },
    {
        img: "https://nationaltoday.com/wp-content/uploads/2022/04/4-Gal-Gadot.jpg",
        name: "Gal Gadot",
        profession: "Actress",
        desc: "Wonder Woman star and former Miss Israel."
    },
    {
        img: "https://i2-prod.dailystar.co.uk/article30734521.ece/ALTERNATES/s615b/2_GCDS-Front-Row-Milan-Fashion-Week-Womenswear-FallWinter-20232024.jpg",
        name: "Dua Lipa",
        profession: "Singer",
        desc: "British pop star with global music success."
    },
    {
        img: "https://hollywoodlife.com/wp-content/uploads/2023/09/selena-gomez-vertical-1.jpg",
        name: "Selena Gomez",
        profession: "Singer / Actress",
        desc: "Multi-talented performer and founder of Rare Beauty."
    },
    {
        img: "https://media.allure.com/photos/66019dc3f16debe4b685b8a7/1:1/w_1337,h_1337,c_limit/anne%20hathaway%20faux%20pixie%20dark%20lipstick%20vanity%20fair.jpg",
        name: "Anne Hathaway",
        profession: "Actress",
        desc: "Known for Princess Diaries & The Dark Knight Rises."
    },
    {
        img: "https://i.pinimg.com/736x/e0/20/98/e020986b0cc83ed592871ddc4046d63e.jpg",
        name: "Margot Robbie",
        profession: "Actress",
        desc: "Barbie and Harley Quinn — audience favorite."
    }
];

let main = document.querySelector("main");
let sum = " ";

user.forEach(function(elem){
    sum = sum + `
        <div class="card">
            <img src="${elem.img}" alt="">
            <h3>${elem.name}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.desc}</p>
        </div>
    `
});

main.innerHTML = sum;