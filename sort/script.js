// let array = [2, 4, 5, 7, 9];
// let currIndex = array.length, temp, rand;
// while(currIndex !== 0) {
//     rand = Math.floor(Math.random() * currIndex);
//     currIndex -= 1;
//     temp = array[currIndex];
//     array[currIndex] = array[rand];
//     array[rand] = temp;
// }

// let i = 0;
// let add = document.querySelector(".add");
// add.addEventListener('click', function() {
//     let space = document.createElement("br");
//     document.body.appendChild(space);

//     for(let i = 0; i < array.length; i++) {
//         let btn = document.createElement("button");
//         btn.innerText = array[i]; 
//         document.body.appendChild(btn);
//     }
//     let temp;
//     let min = i;

//     for(let j = i + 1; j < array.length; j++) {
//        if(array[j] < array[min]) {
//             min = j;
//         }
//     } 
//     temp = array[i];
//     array[i] = arr[min];
//     array[mid] = temp;
//     i++;
// });


// let create = setInterval(function() {
    
// }, 3000);
// setTimeout(() => {
//     clearInterval(create);
// }, 15000);

let array = [2, 5, 7, 1, 3];

let currentIndex = array.length, temp, rand;
while(currentIndex !== 0) {
  rand = Math.floor(Math.random()*currentIndex);
  currentIndex -= 1;
  temp = array[currentIndex];
  array[currentIndex] = array[rand];
  array[rand] = temp;
}

let i = 0;

let create = setInterval(function() {
  let temp;

  let mid = i;

  for(let j = i + 1; j < array.length; j++) {
    if(array[j] < array[mid])
      mid = j;
  }

  temp = array[i];
  array[i] = array[mid];
  array[mid] = temp;

  let space = document.createElement("br");
  document.body.appendChild(space);

  for(let i = 0; i < array.length; i++) {
    let num = document.createElement("button");
    num.innerText = array[i];
    document.body.appendChild(num); 
  }

  i++;
}, 3000);
 
setTimeout(() => {
  clearInterval(create);
}, 15000);
