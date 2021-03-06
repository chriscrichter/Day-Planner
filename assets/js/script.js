// Day Planner

$(document).ready(function() {

// Variables for date and time.
var dateParagraph = $("#currentDay");
var todayDate = moment().format('dddd, MMMM Do YYYY');
dateParagraph.text(todayDate);
var currentTime = moment().format('H');
currentTime = parseInt(currentTime);

//Saving and getting appointments to and from local storage. Todo variables are set up here for the changeColor function below.
var todo9 = $('.todo9').get(0);
$(".todo9").val(localStorage.getItem("9:00"));
$(".saveTodo9").on("click", function() {
    var description = $(".todo9").val();
    localStorage.setItem("9:00", description);
});

var todo10 = $(".todo10").get(0);
$(".todo10").val(localStorage.getItem("10:00"));
$(".saveTodo10").on("click", function() {
    var description = $(".todo10").val();
    localStorage.setItem("10:00", description);
});

var todo11 = $(".todo11").get(0);
$(".todo11").val(localStorage.getItem("11:00"));
$(".saveTodo11").on("click", function() {
    var description = $(".todo11").val();
    localStorage.setItem("11:00", description);
});

var todo12 = $(".todo12").get(0);
$(".todo12").val(localStorage.getItem("12:00"));
$(".saveTodo12").on("click", function() {
    var description = $(".todo12").val();
    localStorage.setItem("12:00", description);
});

var todo1 = $(".todo1").get(0);
$(".todo1").val(localStorage.getItem("1:00"));
$(".saveTodo1").on("click", function() {
    var description = $(".todo1").val();
    localStorage.setItem("1:00", description);
});

var todo2 = $(".todo2").get(0);
$(".todo2").val(localStorage.getItem("2:00"));
$(".saveTodo2").on("click", function() {
    var description = $(".todo2").val();
    localStorage.setItem("2:00", description);
});

var todo3 = $(".todo3").get(0);
$(".todo3").val(localStorage.getItem("3:00"));
$(".saveTodo3").on("click", function() {
    var description = $(".todo3").val();
    localStorage.setItem("3:00", description);
});

var todo4 = $(".todo4").get(0);
$(".todo4").val(localStorage.getItem("4:00"));
$(".saveTodo4").on("click", function() {
    var description = $(".todo4").val();
    localStorage.setItem("4:00", description);
});

var todo5 = $(".todo5").get(0);
$(".todo5").val(localStorage.getItem("5:00"));
$(".saveTodo5").on("click", function() {
    var description = $(".todo5").val();
    localStorage.setItem("5:00", description);
});

//Function for changing appointment color based on the hour
var hours = [parseInt(09), parseInt(10), parseInt(11), parseInt(12), parseInt(13), parseInt(14), parseInt(15), parseInt(16), parseInt(17)];
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

});