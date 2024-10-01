let queue = {};
let head = 0;
let tail = 0;

function enqueue(element) 
{
    queue[tail] = element;
    tail++;
}

function dequeue() 
{
    if (tail - head == 0)
    {
        alert("queue is empty");
    }
    const item = queue[head];
    delete queue[head];
    head++;
    return item;
}

let input = document.querySelector("input")
let button_add = document.getElementById("button_add");
let element_queue = document.getElementById("queue");
button_add.addEventListener('click', () => {
    enqueue(input.value);
    let square = document.createElement("div");
    square.className = "element";
    square.textContent = input.value;
    element_queue.appendChild(square);
});

let button_remove = document.getElementById("button_remove");
button_remove.addEventListener("click", () => {
    dequeue();
    element_queue.removeChild(element_queue.firstChild);
})