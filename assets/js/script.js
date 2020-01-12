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
    $(".saveButton").on("click", function() {
        //console.log(this);
        var value = $(this).siblings(".description").val(); // This gets the VALUE of the description in jQuery

        var time = $(this).siblings(".time-block").text();
        //var hour time.replace(":00 ", "")
        localStorage.setItem(time, value);
        $("this").siblings(".description").html(localStorage.value);
    });

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