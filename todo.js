const todo_list = [];

let input = prompt("What would you like to do?")
while (input.toLowerCase() !== "quit"){
if (input.toLowerCase() === "new") {
    let new_item = prompt("Enter a new todo:");
    todo_list.push(new_item);
} else if (input.toLowerCase() === "list") {
    console.log("**********")
    for (item of todo_list){
        console.log(`${todo_list.indexOf(item)} : ${item}`);
    }
    console.log("**********")
} else if (input.toLowerCase() === "delete") {
    let to_delete = prompt("Enter item number to delete:");
    todo_list.splice(to_delete, 1);
    console.log("**********")
    for (item of todo_list){
        console.log(`${todo_list.indexOf(item)} : ${item}`);
    }
    console.log("**********")
} else if (input.toLowerCase() === "quit") {
    console.log("Goodbye")
}
else {
    input = prompt("What would you like to do?")
}
input = prompt("What would you like to do?")
}