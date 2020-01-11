// Day Planner
$(document).ready(function() {
// populates current date when dom is loaded
var dateParagraph = $("#currentDay");
var todayDate = moment().format('dddd, MMMM Do YYYY');
dateParagraph.text(todayDate);
});
var currentTime = moment().format('H');
currentTime = parseInt(currentTime);

//to save the user's input of text into each time slot....

var input_textarea1 = document.querySelector('#todo9');
var save_button1 = document.querySelector('#saveTodo1');
//retrieves previously save text to display
input_textarea1.value = localStorage.getItem('9am');
//when the Save button is clicked, store the input of the textarea
saveTodo1.addEventListener('click', updateOutput1);
//sets the input of text area into local storage
function updateOutput1() {
    localStorage.setItem('9am', input_textarea1.value);
};

var input_textarea2 = document.querySelector('#todo10');
var save_button2 = document.querySelector('#saveTodo2');
//retrieves previously save text to display
input_textarea2.value = localStorage.getItem('10am');
//when the Save button is clicked, store the input of the textarea
saveTodo2.addEventListener('click', updateOutput2);
//sets the input of text area into local storage
function updateOutput2() {
	localStorage.setItem('10am', input_textarea2.value);
};

var input_textarea3 = document.querySelector('#todo11');
var save_button3 = document.querySelector('#saveTodo3');
//retrieves previously save text to display
input_textarea3.value = localStorage.getItem('11am');
//when the Save button is clicked, store the input of the textarea
saveTodo3.addEventListener('click', updateOutput3);
//sets the input of text area into local storage
function updateOutput3() {
	localStorage.setItem('11am', input_textarea3.value);
};

var input_textarea4 = document.querySelector('#todo12');
var save_button4 = document.querySelector('#saveTodo4');
//retrieves previously save text to display
input_textarea4.value = localStorage.getItem('12pm');
//when the Save button is clicked, store the input of the textarea
saveTodo4.addEventListener('click', updateOutput4);
//sets the input of text area into local storage
function updateOutput4() {
	localStorage.setItem('12pm', input_textarea4.value);
};

var input_textarea5 = document.querySelector('#todo1');
var save_button5 = document.querySelector('#saveTodo5');
//retrieves previously save text to display
input_textarea5.value = localStorage.getItem('1pm');
//when the Save button is clicked, store the input of the textarea
saveTodo5.addEventListener('click', updateOutput5);
//sets the input of text area into local storage
function updateOutput5() {
	localStorage.setItem('1pm', input_textarea5.value);
};

var input_textarea6 = document.querySelector('#todo2');
var save_button6 = document.querySelector('#saveTodo6');
//retrieves previously save text to display
input_textarea6.value = localStorage.getItem('2pm');
//when the Save button is clicked, store the input of the textarea
saveTodo6.addEventListener('click', updateOutput6);
//sets the input of text area into local storage
function updateOutput6() {
	localStorage.setItem('2pm', input_textarea6.value);
};

var input_textarea7 = document.querySelector('#todo3');
var save_button7 = document.querySelector('#saveTodo7');
//retrieves previously save text to display
input_textarea7.value = localStorage.getItem('3pm');
//when the Save button is clicked, store the input of the textarea
saveTodo7.addEventListener('click', updateOutput7);
//sets the input of text area into local storage
function updateOutput7() {
	localStorage.setItem('3pm', input_textarea7.value);
};

var input_textarea8 = document.querySelector('#todo4');
var save_button8 = document.querySelector('#saveTodo8');
//retrieves previously save text to display
input_textarea8.value = localStorage.getItem('4pm');
//when the Save button is clicked, store the input of the textarea
saveTodo8.addEventListener('click', updateOutput8);
//sets the input of text area into local storage
function updateOutput8() {
	localStorage.setItem('4pm', input_textarea8.value);
};

var input_textarea9 = document.querySelector('#todo5');
var save_button9 = document.querySelector('#saveTodo9');
//retrieves previously save text to display
input_textarea9.value = localStorage.getItem('5pm');
//when the Save button is clicked, store the input of the textarea
saveTodo9.addEventListener('click', updateOutput9);
//sets the input of text area into local storage
function updateOutput9() {
	localStorage.setItem('5pm', input_textarea9.value);
};

//Getting the hours from the page and converting them into numbers.
//Also getting each texarea.
var time1 = document.querySelector(".time1").textContent;
time1 = parseInt(time1[0]);
var timeodo9 = document.querySelector(".todo9");

var time2 = document.querySelector(".time2").textContent;
time2 = parseInt(time2[1]) + 10;
var timeodo10 = document.querySelector(".todo10");

var time3 = document.querySelector(".time3").textContent;
time3 = parseInt(time3[1]) +10;
var timeodo11 = document.querySelector(".todo11");

var time4 = document.querySelector(".time4").textContent;
time4 = parseInt(time4[1]) + 10;
var timeodo12 = document.querySelector(".todo12");

var time5 = document.querySelector(".time5").textContent;
time5 = parseInt(time5[0]) +12;
var timeodo1 = document.querySelector(".todo1");

var time6 = document.querySelector(".time6").textContent;
time6 = parseInt(time6[0]) +12;
var timeodo2 = document.querySelector(".todo2");

var time7 = document.querySelector(".time7").textContent;
time7 = parseInt(time7[0]) +12;
var timeodo3 = document.querySelector(".todo3");

var time8 = document.querySelector(".time8").textContent;
time8 = parseInt(time8[0]) +12;
var timeodo4 = document.querySelector(".todo4");

var time9 = document.querySelector(".time9").textContent;
time9 = parseInt(time9[0]) +12;
var timeodo5 = document.querySelector(".todo5");


//function that color codes the various time rows depending on current hour.

var hours = [time1, time2, time3, time4, time5, time6, time7, time8, time9];
var inputs = [todo9, todo10, todo11, todo12, todo1, todo2, todo3, todo4, todo5];
function changeColor() {
    for (i = 0; i < hours.length; i ++) {
        if (hours[i] < currentTime) {
            inputs[i].classList.add("past");
        }
        else if (hours[i] === currentTime) {
            inputs[i].classList.add("present");
        }
        else {
            inputs[i].classList.add("future");
        }
    }
}
changeColor();
