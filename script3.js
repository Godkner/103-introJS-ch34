




// let yourName= "Kevin";
// if(confirm("Are you "+ yourName + "?")){
//     console.log("Hello " + yourName);
//    }else{
//     console.log("Then what is your name?");
//    }

// let num1 = Number(prompt("Enter number 1"));// Number convert a string to a number
// let num2 = Number(prompt("Enter number 2"));
// console.log(num1,num2);
// if(num1 < num2){
//     console.log("num 1 is smaller than num 2");
// } else if (num2 < num1){
//     console.log("num 1 is bigger than num 2");
// } else {
//     console.log("The numbers are equal");
// }



// let num1 =1;
// let num2 =2;
// let num3 =3;
// let notTrue= false;//boolean (true or false)

// if(nume1<num2 && num3>num2){
//     console.log("num 1 is smaller than num2 and num 3 is larger than num2");
// }
// if(num1==1  || num2 == 1  || num3 == 1 ){
//     console.log("num 1 is or num 2 is 1 or num3 is 1");

// }
// if(!notTrue){
//     console.log("This is true");
// }
// const expr= 'Papayas';
// switch (expr){
//     case 'Oranges': 
//     console.log('Oranges are $0.59 a pound.');
//     break;
//     case 'Mangoes':
//     case 'Papayas':
//         console.log('Mangoes and papayas are $2.79 a pound.');
//         //expected output: "Mangoes and papayas are $2.79 a pound"
//         break;
//         default:
//             console.log (`Sorry, wr are out of ${expr}.`);
// }



//for loop
//start point ; stop condition ; increment
let database = ["Brayan", "John", "Briannna"];
//i=1+1 is the same as 1++
for (let i=0; i<=5; i+=1){
    document.write(`<p> ${i} ${database[i]} </p>`);

}

//create a loop display the numbers fro, 0 to 12 but 2 by 2 
for(let i=0; i<=12; i+=2){
    document.write (`<p> ${i}</p>`);
}