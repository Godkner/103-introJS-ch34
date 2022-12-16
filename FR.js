//creating array
let task = [];
console.log(task);
// console.table(task);//Showing the array in a table.

function register(){
    let newTask= String(document.getElementById("task-input").value); //getting the newGPA from the input
    task.push(newTask); //addinf the newGPA to the array
    displayTask(); // display the newGPA
}

function displayTask(){
    //get the HTML element
    let tsk="";
    //travel array
    for (let i=0;i<task.length;i++){
    tsk+=`
    <tr>
        <td>${i}. </td>
        <td>${task[i]}</td>
    </tr>


        `;
            //insert the tmp on the HTML
            document.getElementById("show-task").innerHTML=tsk;

}
}
function myFunction() {
    task.pop();
    displayTask();
}

