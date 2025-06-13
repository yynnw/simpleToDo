const todo_list = [];
const todoUL = document.querySelector('#todo-list');

function updateList() {
    todoUL.innerHTML = "";
for (let item of todo_list) {
const todoLI = document.createElement('li')
todoLI.textContent = `${item}`;
todoUL.append(todoLI);
}
}
 



let input = prompt("What would you like to do?")
while (input.toLowerCase() !== "quit"){
if (input.toLowerCase() === "new") {
    const new_item = prompt("Enter a new todo:");
    todo_list.push(new_item);
    console.log(`${new_item} added to the list`)
} else if (input.toLowerCase() === "list") {
    console.log("**********")
    todo_list.forEach((item, i) => console.log(`${i} : ${item}`));
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
updateList();


