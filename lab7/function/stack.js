let stack = []

function add(element) {
    stack.push(element);
}

function remove() {
    stack.reverse();
    stack.shift();
    stack.reverse();
}

let input = document.querySelector("input")
let button_add = document.getElementById("button_add");
let element_stack = document.getElementById("stack");
button_add.addEventListener('click', () => {
    add(input.value);
    let square = document.createElement("div");
    square.className = "element";
    square.textContent = input.value;
    element_stack.appendChild(square);
});

let button_remove = document.getElementById("button_remove");
button_remove.addEventListener("click", () => {
    remove();
    element_stack.removeChild(element_stack.lastChild);
})