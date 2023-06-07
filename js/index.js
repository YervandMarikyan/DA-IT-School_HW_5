"use strict";

/*
1.	Write script that will show current date DD-MM-YYYY HH:MM
2.	Write script by clicking buttons “Show alert”, “Show confirm”, “Show prompt” will show native popups
3.	Write function that will show only even numbers of this array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
4.	Write function that will sort this array by ascending order [3, 2, 30, -4, 9, 10, 7, 55, 12]
5.	Create simple calculator using html + js 

*/

const number1 = document.querySelector("#firstNum");
const number2 = document.querySelector("#secondNum");
const result = document.querySelector(".calc-result-block__res");

const zeroSetter = (number) => parseInt(number) < 10 ? "0" + number : number;

//1. DD-MM-YYYY HH:MM
const currentDate = new Date();
document.querySelector(".result p").textContent = `${zeroSetter(currentDate.getDate())} - 
	${zeroSetter(currentDate.getMonth()+1)} - 
	${currentDate.getFullYear()} 
	${zeroSetter(currentDate.getHours())}:${zeroSetter(currentDate.getMinutes())}`;

//2.
document.querySelector(".alert").addEventListener("click", () => {
	alert("This is alert function");
});

document.querySelector(".confirm").addEventListener("click", () => {
	confirm("This is confirm function");
});

document.querySelector(".prompt").addEventListener("click", () => {
	let person = prompt("Please enter your name", "Firstname Lastname");

	if (person) {
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
        const temp = arr[j];
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
document.querySelector(".calc").addEventListener("click", (event) => {
	event.preventDefault()
});

const calculate = (param) => {	
	switch(param) {
		case "*": return result.textContent = number1.value * number2.value;
		case "/": return result.textContent = number1.value / number2.value;
		default: alert("Something went wrong");
	}
};

document.querySelector(".multiply").addEventListener("click", () => {
	calculate("*");
});

document.querySelector(".divide").addEventListener("click", () => {
	calculate("/");
});

