const todo_list = [];

let input = prompt("What would you like to do?")
while (input.toLowerCase() !== "quit"){
if (input.toLowerCase() === "new") {
    const new_item = prompt("Enter a new todo:");
    todo_list.push(new_item);
    console.log(`${new_item} added to the list`)
} else if (input.toLowerCase() === "list") {
    console.log("**********")
    for (let i = 0; i < todo_list.length; i++){
        console.log(`${i} : ${todo_list[i]}`);
    }
    console.log("**********")
} else if (input.toLowerCase() === "delete") {
    const to_delete = parseInt(prompt("Enter item number to delete:"));
    if (Number.isNaN(to_delete) || to_delete > todo_list.length - 1) {
        alert("Unknown item")
    } else {
        todo_list.splice(to_delete, 1);
        console.log("**********")
        for (item of todo_list){
            console.log(`${todo_list.indexOf(item)} : ${item}`);
    }
        console.log("**********")
    }
    
} else if (input.toLowerCase() === "quit") {
    console.log("Goodbye")
}
else {
    alert("Not a valid command.")
}
input = prompt("What would you like to do?")
} 