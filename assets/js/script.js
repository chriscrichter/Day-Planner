// Day Planner

$(document).ready(function() {

// populates current date when dom is loaded
var dateParagraph = $("#currentDay");
var todayDate = moment().format('dddd, MMMM Do YYYY');
dateParagraph.text(todayDate);
});
var currentTime = moment().format('H');
currentTime = parseInt(currentTime);

//Save buttons will save user inputs to local store and saved inputs will display in the textarea.

$(".saveTodo9").on("click", function() {
    var description = $(".todo9").val();
    localStorage.setItem("9:00", description);
});
$(".todo9").val(localStorage.getItem("9:00"));

$(".saveTodo10").on("click", function() {
    var description = $(".todo10").val();
    localStorage.setItem("10:00", description);
});
$(".todo10").val(localStorage.getItem("10:00"));

$(".saveTodo11").on("click", function() {
    var description = $(".todo11").val();
    localStorage.setItem("11:00", description);
});
$(".todo11").val(localStorage.getItem("11:00"));

$(".saveTodo12").on("click", function() {
    var description = $(".todo12").val();
    localStorage.setItem("12:00", description);
});
$(".todo12").val(localStorage.getItem("12:00"));

$(".saveTodo1").on("click", function() {
    var description = $(".todo1").val();
    localStorage.setItem("1:00", description);
});
$(".todo1").val(localStorage.getItem("1:00"));

$(".saveTodo2").on("click", function() {
    var description = $(".todo2").val();
    localStorage.setItem("2:00", description);
});
$(".todo2").val(localStorage.getItem("2:00"));

$(".saveTodo3").on("click", function() {
    var description = $(".todo3").val();
    localStorage.setItem("3:00", description);
});
$(".todo3").val(localStorage.getItem("3:00"));

$(".saveTodo4").on("click", function() {
    var description = $(".todo4").val();
    localStorage.setItem("4:00", description);
});
$(".todo4").val(localStorage.getItem("4:00"));

$(".saveTodo5").on("click", function() {
    var description = $(".todo5").val();
    localStorage.setItem("5:00", description);
});
$(".todo5").val(localStorage.getItem("5:00"));


//Getting the hours from the page and converting them into numbers.
//Also getting each texarea.

var time1 = $(".time1").first().text();
$(".time1").html( time1 );
time1 = parseInt(time1[0]);
var todo9 = document.querySelector(".todo9");

var time2 = $(".time2").first().text();
$(".time2").html( time2 );
time2 = parseInt(time2[0]);
var todo10 = document.querySelector(".todo10");

var time3 = $(".time3").first().text();
$(".time3").html( time3 );
time3 = parseInt(time3[0]);
var todo11 = document.querySelector(".todo11");

var time4 = $(".time4").first().text();
$(".time4").html( time4 );
time4 = parseInt(time4[0]);
var todo12 = document.querySelector(".todo12");

var time5 = $(".time5").first().text();
$(".time5").html( time5 );
time5 = parseInt(time5[0]);
var todo1 = document.querySelector(".todo1");

var time6 = $(".time6").first().text();
$(".time6").html( time6 );
time6 = parseInt(time6[0]);
var todo2 = document.querySelector(".todo2");

var time7 = $(".time7").first().text();
$(".time7").html( time7 );
time7 = parseInt(time7[0]);
var todo3 = document.querySelector(".todo3");

var time8 = $(".time8").first().text();
$(".time8").html( time8 );
time8 = parseInt(time8[0]);
var todo4 = document.querySelector(".todo4");

var time9 = $(".time9").first().text();
$(".time9").html( time9 );
time9 = parseInt(time9[0]);
var todo5 = document.querySelector(".todo5");


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