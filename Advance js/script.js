//Section-1: Objects and oops thinking foundation

//create a user objects that stores name and email and has a login method
//Then convert the same logic using a class and observe how the codes becomes cleaner


class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log("user loged in")
    }
}

let user1 = new User("Anand","anand@h.com");
let user2 = new User("Anamika","anamika69@h.in");



//Create a product object that stores name and price and has a method which returns the final price after discount

let product = {
    name: "Nvidia RTX-4060",
    price: 30000,
    final_price: function (){
        let discount = 5/100;
        let finalPrice = this.price - (this.price * discount);
        console.log(`final price after discount is ${finalPrice}`)
    }
}

// product.final_price();


//Section-2: Classes and Objects
// create a car class with the following
// Brand and Speed
// A drive method that prints the car brand and speed
//Create two different car objects from the same class and verify that their data is different

class Car {
    constructor(brand,speed) {
        this.brand = brand
        this.speed = speed
    }
    drive() {
        console.log(`Brand is ${this.brand} and Speed of this car is ${this.speed}`)
    }
}

let bmw = new Car("BMW","300kmph");
let mercedes = new Car("Mercedes-Benz","250kmph")
let porsche = new Car("Porsche","300kmph") 


//Create a student class whose constructor accepts name and roll number
//add a method introduce that prints both values

class Student {
    constructor(name, roll) {
        this.name = name
        this.roll = roll
    }
    introduce(){
        console.log(`${this.name} - ${this.roll}`)
    }
}

let stud1 = new Student("Rahul",1163)

// stud1.introduce();



//Constructor Function and Prototypes
//Create a user constructor function (do not use class syntax)
//Add a login method in two ways:
//first inside the constructor 
//then move the method to the prototypes

function Human (){
    this.name = "Harshita"
}

let human1  = new Human();


//Create a function that prints this.name

function abcd(){
    console.log(this.name)
}

let obj = {
    name: "Raima"
}

// abcd.call(obj)



// ## Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai



function afterDelay(time, cb){
    setTimeout(function(){
        cb();
    },time)
}

afterDelay(2000, function(){
    // console.log("CallBack Executed...");
})




// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice



function getUser(username,cb){
    // console.log("getting user details...");
    setTimeout(function(){
        cb({id:1001,username:"Ryan"})
    },1000)
};

function getUserPosts(id,cb){
    // console.log("getting user posts...");
    setTimeout(function(){
        cb(["img1","img2","img3","img4","img5"])
    },1000)
}

getUser("Ryan001",function(data){
    getUserPosts(data.id,function(allPosts){
        // console.log(data.username,allPosts);
    })
})




//Fetch unique id from instagram and then 
// fetch all infos from meta using the unique id;


function fetchUniqueId(usrname,cb){
    // console.log("Fetching uniqued id....");
    setTimeout(() => {
        cb({username: "Rebeca", uniqueId: 1164});
    },3000)
};

function fetchInfo(id,cb){
    // console.log("Fetching all information....");
    setTimeout(() => {
        cb({name:"Rebeca Garfiled",
            username:"rebeca05",
            gender:"female",
            post:13,
            likes:13000,
            comments: 5600,
            mobile: 1179531589,
            birthday:"05/11/2003",
            city:"Mexico",
        })
    },4000)
};

fetchUniqueId("Rebeca",function(data){
    fetchInfo(data.id, function(infos){
        // console.log(infos);
    })
})




// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai



function loginUser(username, cb){
    // console.log("Logging User....");
    setTimeout(() => {
        cb({user:"Gwen Stacy", id: 1171});
    },2000)
};
function fetchPermissions(id, cb){
    // console.log("Fetching Permissions....");
    setTimeout(() => {
        cb(["Read","Write","Update"]);
    }, 1500);
};
function loadDashboard(permissions,cb){
    // console.log("Loading dashboard....");
    setTimeout(() => {
        cb();
    }, 1500);
};


loginUser("gwen05", function(userdata){
    fetchPermissions(userdata.id, function(permissions){
        loadDashboard(permissions, function(){
            // console.log("Dashboard Loaded....");
        })
    })
})




//Practises questions

//question-1
//Basic Callback Execution

function sayhello(cb){
    // console.log("Hello");
    cb();
};

sayhello(function(){
    // console.log("call back executed...");
})

//Question-2
// Callback With Arguments

function addnumbers(a,b,cb){
    cb(a+b);
}

addnumbers(5,10,function(sum){
    // console.log(`sum is :- ${sum}`)
})


//Questions-3
//Callback Flow Check

function runSteps(step1, step2){
    step1();
    step2();
}

runSteps(function(){
    // console.log("Step1 done")
},function(){
    // console.log("Step2 done")
})



//Questioin-4
//Function Calling Another Function

function execute(cb){
    // console.log("Executing....")
    cb();
}

execute(function(){
    // console.log("Execution Done");
})



//Level-2 
//INTERMEDIATE CALLBACK QUESTIONS
//Question-5

//Delay + Callback

function delayedMessage(cb){
    setTimeout(() => {
        // console.log("Task completed...");
        cb();
    },2000)
}

delayedMessage(function(){
    // console.log("Call back executed...");
})


// Question-6
// Error-First Callback Handling

function safeDivide(a, b, cb){
    if(b === 0){
        cb("Cannot divide by zero",null)
    }
    else{
        cb(null, a/b)
    }
};

safeDivide(10,5,(msg,val) => {
    if(val === null){
        // console.log(`Error: ${msg}`)
    }
    else{
        // console.log(`Result: ${val}`)
    }
})


//Question-7
// Array Processing

function transformArray(numers, cb){
    let newNum = [];
    numers.forEach((elem) => {
        newNum.push(elem*2);
    });
    cb(newNum)
};

transformArray([2,8,5,12], (newNum)=>{
    // console.log(newNum)
});



//Question-8
//Age Verification

function validateAge(age, cb){
    age>=18 ? cb("Allowed") : cb("Not Allowed")
};

validateAge(21, (msg) => {
    // console.log(msg)
});



//Level-3
//Question-9
//Chained Async Calls

function fetchUserData (cb){
    cb("Fetching User data ....")
};

function getUser(id, cb){
    setTimeout(() => {
        cb({id:1102, name: "Andrew"})
    }, 1500);
};

function getOrders(userId, cb){
    setTimeout(() => {
        cb(["order1", "order2", "order3"])
    },1500)
}



fetchUserData((msg) => {
    // console.log(msg);
    getUser(1102,(userdata) => {
        getOrders(userdata.id, (orders) => {
            // console.log(`Users: ${userdata.name}`);
            // console.log(`Orders: ${orders}`);
        })
    })
});



//Question-10
//Callback Hell Simulation

function stepOne(cb){
    setTimeout(() => {
        cb("Step-1 Completed..")
    },1000)
};
function stepTwo(cb){
    setTimeout(() => {
        cb("Step-2 Completed..")
    },1000)
};
function stepThree(cb){
    setTimeout(() => {
        cb("Step-3 Completed..")
    },1000)
};

stepOne((msg1) => {
    // console.log(msg1);
    stepTwo((msg2) => {
        // console.log(msg2);
        stepThree((msg3) => {
            // console.log(msg3);
        })
    })
});



//Question-11
//LogIn flow

function LogIn(email, cb){
    setTimeout(() => {
        cb({userid: 1164, email: email})
    },1000)
}

function getProfile(userid, cb){
    setTimeout(() => {
        cb({age: 23, city: "Kolkata"})
    }, 1000);
}

function showWelcome(profile, cb){
    setTimeout(() => {
        cb(`Your age is ${profile.age} and Welcome from ${profile.city}`)
    }, 1000);
}

LogIn("khanradebojyoti@gmail.com", (userdata) => {
    getProfile(userdata.userid, (profileData) => {
        showWelcome(profileData, (welcomeMsg) => {
            // console.log(welcomeMsg);
        })
    })
})




// 🚀 CALLBACK MASTER PACKAGE 
//  LEVEL 4 (Advanced Problems)

//Question-12
//Ek “Product Loader” system banana hai callbacks se.

function fetchProducts (cb) {
    // console.log("Fetching Products list....");
    
    setTimeout(() => {
        cb(["laptop", "phone", "tablet"])
    }, 1500);
}

function getPrice (product, cb) {
    // console.log(`Fetching price of ${product}....`);
    
    setTimeout(() => {
        let prices = {
                    laptop: 75000,
                    phone: 67000, 
                    tablet: 35000
                    }
        cb(prices[product])
    }, 1000);
}

function displayProduct (product, price, cb) {
    // console.log("Preparing product information....");
    
    setTimeout(() => {
        cb(`${product} - ${price}`)
    }, 500);
}

// fetchProducts ((products) => {
//     let selectedProduct = prompt(`Select any products among ${products}`);
    
//     getPrice(selectedProduct, (prices) => {
//         displayProduct(selectedProduct,prices, (displayMsg) => {
//             // console.log(displayMsg);
            
//         })
//     })
// })



//Question - 13
//Error Handling in Callback Chain

function connectDB(cb){
    setTimeout(() => {
        let success = Math.random() > 0.5;

        if(!success) {
            cb("DB connection failed", null);
        }else{
            cb(null, "connected to DB")
        }
    }, 1000);
};
function fetchRecords(cb){
    // console.log("fetching records....");

    setTimeout(() => {
        cb(["A","B","C"])
    }, 1000);
};


connectDB((err,msg) => {
    if (err){
        // console.log(err);
        return;
    }

    // console.log(msg);

    fetchRecords((records) => {
        // console.log(`Records - ${records}`);
    })
})



// Question - 14
// Food Order Processing

// let dish = prompt("What dish you need sir ?");

// function takeOrder(dish, cb){
//     setTimeout(() => {
//         cb(`Order recived for ${dish}`)
//     }, 1000);
// };
// function cookFood(dish, cb){
//     setTimeout(() => {
//         cb(`${dish} cooked`)
//     }, 2000);
// };
// function deliverFood(dish, cb){
//     setTimeout(() => {
//         cb(`${dish} delivered`)
//     }, 1000);
// };


// takeOrder(dish, (status) => {
//     // console.log(status);
//     cookFood(dish, (cookStatus) => {
//         // console.log(cookStatus);
//         deliverFood(dish, (deliverStatus) => {
//             // console.log(deliverStatus);
//         })
//     })
// })



// Question - 15
// Quiz System

function askQuestion(cb){
    setTimeout(() => {
        // cb(Number(prompt("What is 2+2 ?")))
    }, 1000);
}

function checkAnswer(ans, cb){
    // console.log("Checking Answer....");
    
    setTimeout(() => {
        if (ans === 4){
            cb("Your answer is correct")
        }
        else{
            cb("You are wrong")
        }
    }, 1000);
}

function showResult(result, cb){
    setTimeout(() => {
        cb(result)
    }, 500);
}

askQuestion((answer) => {
    checkAnswer(answer, (result) => {
        showResult(result, (msg) => {
            // console.log(msg);
        })
    })
    
})



//Question - 16
//File Downloader Simulation

function startDownload(url, cb){
    console.log("Initializing Download.....");
    
    setTimeout(() => {
        cb(`Download started: ${url}`);
    }, 1000);
};

function showProgress(cb){
    setTimeout(() => {
        cb("Progress: 50%")
    }, 1000);
};

function finishDownload(cb){
    setTimeout(() => {
        cb("Download Finished..")
    }, 1000);
};

startDownload(prompt("paste the download link here...."), (startingMsg) => {
    console.log(startingMsg);
    showProgress((progressMsg) => {
        console.log(progressMsg);
        finishDownload((finishMsg) => {
            console.log(finishMsg);
        })
    })
})