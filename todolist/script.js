let add = document.querySelector(".adder");
let input = document.querySelector("input");

add.addEventListener('click', function() {
    let btn = document.createElement("button");
    btn.innerText = input.value;
    if(input.value !== '') {
        document.body.appendChild(btn);
    }
    btn.addEventListener('click', function() {
        btn.parentNode.removeChild(btn);
    });
})