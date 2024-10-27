const row = document.getElementById("row");
const textElement = document.getElementById("todoName");
const dateElement = document.getElementById("date");

const todo = JSON.parse(localStorage.getItem("todo")) || {length: 0, data: []};

if (todo.length) {
    for (const element of todo.data) {
        createEle(element.todoName, element.date);
    }
}

function addData(event) {
    const todoName = textElement.value;
    const date = dateElement.value;
    textElement.value = "";
    dateElement.value = "";
    if (todoName === "") {
        alert("Enter todo name.");
        return;
    }
    if (date === "") {
        alert("Enter date.");
        return;
    }
    const data = {
        todoName,
        date
    };
    todo.data.push(data);
    createEle(data.todoName, data.date);
    localStorage.setItem("todo", JSON.stringify(todo));
    textElement.focus();
}

function createEle(todoName, date) {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const button = document.createElement("button");
    div1.classList.add("row", "g-2", "justify-content-center");
    div1.id = `row${++todo.length}`;
    div2.classList.add("col-md-6");
    div3.classList.add("col-md-3");
    div4.classList.add("col-md-3");
    div5.classList.add("form-floating");
    p1.classList.add("text-capitalize", "fs-4", "mt-3");
    p2.classList.add("fs-4", "mt-3");
    button.classList.add("btn", "btn-danger", `row${todo.length}`);
    button.type = "submit";
    button.setAttribute("onclick", "deleteEle(event)");
    p1.textContent = todoName;
    p2.textContent = date;
    button.textContent = "Delete";
    div2.append(p1);
    div3.append(p2);
    div4.append(button);
    div1.append(div2);
    div1.append(div3);
    div1.append(div4);
    row.append(div1);
}

function deleteEle(event) { 
    const row = document.getElementById(event.target.classList[2]);
    const index = row.id.at(-1);
    todo.data.splice(index - 1, 1);
    --todo.length;
    row.remove();
    localStorage.setItem("todo", JSON.stringify(todo));
    if (todo.length === 0) {
        localStorage.removeItem("todo");
    }
}