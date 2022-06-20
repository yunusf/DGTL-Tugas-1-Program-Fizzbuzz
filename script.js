var arrHasil = [];

const hasil = document.getElementById("list-hasil");
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const inpt = document.getElementById("inputan").value;
   
    if(inpt < 1 && inpt > -1) {
        console.log("Invalid input");
        arrHasil.push("Invalid input");
        // break;
    } else if(inpt % 3 === 0 && inpt % 5 === 0) {
        console.log("FizzBuzz!");
        arrHasil.push("FizzBuzz1");
    } else if(inpt % 3 == 0) {
        console.log("Buzz!");
        arrHasil.push("Buzz!");
    } else if(inpt % 5 == 0) {
        console.log("Fizz!");
        arrHasil.push("Fizz");
    } else {
        console.log(inpt);
        arrHasil.push(inpt);
    }
    hasil.innerHTML = arrHasil;
})