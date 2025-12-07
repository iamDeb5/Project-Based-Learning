//Basic callback

// function showMessage(){
//     console.log("CallBack run succesfully!!");
// }

// function doSomething(callback){
//     callback();
// }

// doSomething(showMessage);




//Callback with argument

// function greet (name){
//     console.log("Hello"+" "+ name);
// }

// function wellCome(cb){
//     cb("Deb");
// }

// wellCome(greet);



//2 kaam karo phir callback chale

// function done(){
//     console.log("All task is done");
// }

// function work(cb){
//     console.log("Task 1");
//     console.log("Task 2");
//     cb();
// }

// work(done);




//function ke andar value pass karna

// function printResult(result) {
//     console.log("Answer:", result);
// }

// function add(a,b, cb){
//     cb(a+b);
// }

// add(12,8,printResult);



//setTimeout

// setTimeout(() => {
//     console.log("run after 3 seconds");
// },3000)



//Array callback (forEach)

// let arr = [1,2,3];

// arr.forEach(function(num){
//     console.log("Number:", num);
// });



// Jab kaam complete ho, tab callback

// function download(cb){
//     console.log("Downloading...");
//     setTimeout(()=>{
//         cb("Download Complete")
//     },3000)
// }

// download((msg)=>{
//     console.log(msg);
// })



// Callback to change text

// function change(text){
//     console.log("New Text:", text);
// }

// function update(cb){
//     cb("chalie suru karte hein")
// }

// update(change);



//Question1

// function multiply(a, b, callback) {
//     callback(a*b);
// }

// multiply(4, 5, function(result) {
//     console.log("Result is", result);
// });
