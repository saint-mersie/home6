let users = [];

while (true) {
    let command = prompt("add,Имя | del,Имя | stop");

    if (command === "stop") {
        console.log("Финальный массив:", users);
        break;
    }

    let parts = command.split(",");
    let action = parts[0].trim();
    let name = parts[1]?.trim();

    if (action === "add" && name) {
        users.push(name);
        console.log("Добавлено:", name);
        console.log(users);
    } 
    else if (action === "del" && name) {
        let index = users.indexOf(name);

        if (index !== -1) {
            users.splice(index, 1);
            console.log("Удалено:", name);
        }

        console.log(users);
    }
}

let array = [1,2,3,4,5,6,7,8,9,10,11];
let even = [];
let odd = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        even.push(array[i]);
    } else {
        odd.push(array[i]);
    }
}

console.log("Четные числа:", even);
console.log("Нечетные числа:", odd);
