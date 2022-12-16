//creating array
let gpas = [2.2,3,1.2,3.3,4,3.5,1.5];
// console.log(gpas);
// console.table(gpas);//Showing the array in a table.

function register(){
    let newGPA= Number(document.getElementById("gpa-input").value); //getting the newGPA from the input
    gpas.push(newGPA); //addinf the newGPA to the array
    displayGPAS(); // display the newGPA
}

function displayGPAS(){
    //get the HTML element
    let tmp="";
    //travel array


    for (let i=0;i<gpas.length;i++){
        if(gpas[i]<2){
            //create the tmp (HTML)
            tmp+=`
            <p style="color:red"> ID ${i} -->${gpas[i]} Fail</p>`;
            //insert the tmp on the HTML
            document.getElementById("users-gpas").innerHTML=tmp;
        }else if(gpas[i]>=3.5){
            //create the tmp (HTML)
            tmp+=`
            <p style="color:green"> ID ${i} -->${gpas[i]}☺️</p>`;
            //insert the tmp on the HTML
            document.getElementById("users-gpas").innerHTML=tmp;
        }else{
             //create the tmp (HTML)
             tmp+=`
             <p> ID ${i} -->${gpas[i]}</p>`;
             //insert the tmp on the HTML
             document.getElementById("users-gpas").innerHTML=tmp;
        }
    }



}

displayGPAS();