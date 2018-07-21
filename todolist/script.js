let add = document.querySelector(".adder");
let input = document.querySelector("input");

add.addEventListener('click', function() {
    let btn = document.createElement("button");
    btn.innerText = input.value;
    btn.classList.add("todo-item");
    btn.style.background = "lightblue";
    if(input.value !== '') {
        document.body.appendChild(btn);
    }
    btn.addEventListener('click', function() {
        btn.parentNode.removeChild(btn);
    });
})