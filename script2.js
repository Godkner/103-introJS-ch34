// save the following information in variables using the correct data
// type: name, email, password, age , country, salary (monthly).
// let userName="Kevin Fierro";
// let email= "kfierro@uabc.edu.mx";
// let password=  "kevin1234";
// let age= "21";
// let country= "Mexico";
// let salary= "5000";


// let userName= prompt("enter your name");
// let email= prompt("enter your email");
// let password= prompt("enter your password");
// let age= prompt("enter your age");
// let country= prompt("enter your country");
// let salary= prompt("enter yout monthly salarykevin")

// console.log(userName,email,password,age,country,salary*12);
// document.write(`
// <p>Name: ${userName}</p>
// <p> email: ${email}</p> 
// <p>password: ${password}</p>
// <p>age:${age}</p>
// <p> country: ${country}</p>
// <p> salary:${salary*12}</p>
// `);

// creating fucntions

// function expressions
function greeting(){
    //body of the function

    console.log("Hello");
    // alert("Hello");
    // document.write("Hello");
    return "Kevin";

}
// global variable
let global;

function sum(a,b){
    //local variable
    global="affected";
    return a+b;
}
console.log(sum(10.50));
console.log(global);
// function expressions

let displayValues= function(){
    console.log("Displaying values ...")
}
displayValues();

// arrow  function
let traveling= country => "Traveling to ..." + country;

travel = traveling("Italy");
console.log(travel);

let total=0;
function addCart(price){
    total= total + price;
    console.log(total);
    return total; 
}

function calculateTaxes(){
    subtotal=addCart(2);
    let totalTax= subtotal*1.11;

    document.getElementById("receipt").innerHTML=
    `
    <p>Subtotal = ${subtotal}</p>
    <p>Total = ${totalTax}</p>
    `
}

