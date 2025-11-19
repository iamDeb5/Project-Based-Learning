let teams = [
    {
        name: "Kolkata Knight Riders",
        short: "KKR",
        founded: 2008,
        trophies: 3,
        owner: "Shah Rukh Khan, Juhi Chawla, Jay Mehta",
        captain: "Shreyas Iyer",
        coach: "Chandrakant Pandit",
        homeGround: "Eden Gardens",
        city: "Kolkata",
        colors: ["purple", "gold"],
    },
    {
        name: "Chennai Super Kings",
        short: "CSK",
        founded: 2008,
        trophies: 5,
        owner: "India Cements",
        captain: "Ruturaj Gaikwad",
        coach: "Stephen Fleming",
        homeGround: "M. A. Chidambaram Stadium",
        city: "Chennai",
        colors: ["yellow", "blue"],
    },
    {
        name: "Mumbai Indians",
        short: "MI",
        founded: 2008,
        trophies: 5,
        owner: "Reliance Industries",
        captain: "Hardik Pandya",
        coach: "Mark Boucher",
        homeGround: "Wankhede Stadium",
        city: "Mumbai",
        colors: ["blue", "gold"],
    },
    {
        name: "Royal Challengers Bengaluru",
        short: "RCB",
        founded: 2008,
        trophies: 0,
        owner: "United Spirits",
        captain: "Faf du Plessis",
        coach: "Andy Flower",
        homeGround: "M. Chinnaswamy Stadium",
        city: "Bengaluru",
        colors: ["red", "black"],
    },
    {
        name: "Rajasthan Royals",
        short: "RR",
        founded: 2008,
        trophies: 1,
        owner: "Emerging Media",
        captain: "Sanju Samson",
        coach: "Kumar Sangakkara",
        homeGround: "Sawai Mansingh Stadium",
        city: "Jaipur",
        colors: ["pink", "blue"],
    },
    {
        name: "Sunrisers Hyderabad",
        short: "SRH",
        founded: 2013,
        trophies: 1,
        owner: "Sun TV Network",
        captain: "Pat Cummins",
        coach: "Daniel Vettori",
        homeGround: "Rajiv Gandhi Intl. Stadium",
        city: "Hyderabad",
        colors: ["orange", "black"],
    },
    {
        name: "Delhi Capitals",
        short: "DC",
        founded: 2008,
        trophies: 0,
        owner: "GMR Group & JSW Group",
        captain: "Rishabh Pant",
        coach: "Ricky Ponting",
        homeGround: "Arun Jaitley Stadium",
        city: "Delhi",
        colors: ["blue", "red"],
    },
    {
        name: "Punjab Kings",
        short: "PBKS",
        founded: 2008,
        trophies: 0,
        owner: "Preity Zinta, Ness Wadia, Mohit Burman",
        captain: "Shikhar Dhawan",
        coach: "Trevor Bayliss",
        homeGround: "IS Bindra Stadium",
        city: "Mohali",
        colors: ["red", "silver"],
    },

    {
        name: "Gujarat Titans",
        short: "GT",
        founded: 2022,
        trophies: 1,
        owner: "CVC Capital Partners",
        captain: "Shubman Gill",
        coach: "Ashish Nehra",
        homeGround: "Narendra Modi Stadium",
        city: "Ahmedabad",
        colors: ["dark blue", "gold"],
    },
    {
        name: "Lucknow Super Giants",
        short: "LSG",
        founded: 2022,
        trophies: 0,
        owner: "RPSG Group",
        captain: "KL Rahul",
        coach: "Justin Langer",
        homeGround: "BRSABV Ekana Cricket Stadium",
        city: "Lucknow",
        colors: ["light blue", "orange"],
    }
];

let btn = document.querySelector("button");
let main = document.querySelector("main");
let stats = document.querySelector("#stats");

btn.addEventListener("click", function(){
    let team = teams[Math.floor(Math.random() * teams.length)];

    main.style.backgroundColor = team.colors[0];
    stats.style.backgroundColor = team.colors[1];

    stats.innerHTML = "";

    let h3 = document.createElement("h3");
    h3.textContent = team.name;
    stats.appendChild(h3);

    let ul = document.createElement("ul");
    ul.innerHTML = `
        <li><strong>Captain:</strong> ${team.captain}</li>
        <li><strong>Coach:</strong> ${team.coach}</li>
        <li><strong>Owner:</strong> ${team.owner}</li>
        <li><strong>Founded:</strong> ${team.founded}</li>
        <li><strong>Trophies:</strong> 🏆 ${team.trophies}</li>
        <li><strong>Home Ground:</strong> ${team.homeGround}</li>
        <li><strong>City:</strong> ${team.city}</li>
    `;
    stats.appendChild(ul);
});
