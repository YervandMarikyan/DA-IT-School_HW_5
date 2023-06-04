"use strict";

/*
1.	Write script that will show current date DD-MM-YYYY HH:MM
2.	Write script by clicking buttons “Show alert”, “Show confirm”, “Show prompt” will show native popups
3.	Write function that will show only even numbers of this array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
4.	Write function that will sort this array by ascending order [3, 2, 30, -4, 9, 10, 7, 55, 12]
5.	Create simple calculator using html + js 

*/

const nowDate = document.querySelector(".now-date p");
const showAlert = document.querySelector(".alert");
const showConfirm = document.querySelector(".confirm");
const showPrompt = document.querySelector(".prompt");


const number1 = document.querySelector("#firstNum");
const number2 = document.querySelector("#secondNum");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const calc = document.querySelector(".calc");
const result = document.querySelector(".res");

//1. DD-MM-YYYY HH:MM
const currentDate = new Date();
document.querySelector(".day").textContent = `${currentDate.getDate()} - `;
document.querySelector(".month").textContent = `${currentDate.getMonth()+1} - `;
document.querySelector(".year").textContent = `${currentDate.getFullYear()} `;
document.querySelector(".hour").textContent = `${currentDate.getHours()}:`;
document.querySelector(".minute").textContent = `${currentDate.getMinutes()}`;
//nowDate.textContent = currentDate;

//2.
showAlert.addEventListener("click", () => {
	alert("This is alert function");
});

showConfirm.addEventListener("click", () => {
	confirm("This is confirm function");
});

showPrompt.addEventListener("click", () => {
	let person = prompt("Please enter your name", "Firstname Lastname");

	if (person != null) {
	  alert("Hello " + person);
	}
});

//3.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function showEvenNums(arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i] % 2 === 0 ? console.log(arr[i]) : "";
	}
}

//showEvenNums(array);

//4.
const someArr = [3, 2, 30, -4, 9, 10, 7, 55, 12];

function BubblesortArr(arr) {
	console.log(arr);
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
		}
	}
	console.log(arr);
}

//BubblesortArr(someArr);


function compareNumbers(a, b) {
  return a - b;
}

//console.log(someArr.sort(compareNumbers));


//5.
calc.addEventListener("click", (event) => {
	event.preventDefault()
});

multiply.addEventListener("click", () => {
	result.textContent = number1.value * number2.value;
});

divide.addEventListener("click", () => {
	result.textContent = number1.value / number2.value;
});

