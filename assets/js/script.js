
// 1. DISPLAY CURRENT TIME //

var currentTime = $("p#current-time")

// moment().format('MMMM Do YYYY, h:mm:ss a'); //

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();
const d = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate();

currentTime.text(d);

// 2. DISPLAY PAST, PRESENT OR FUTURE TIME BY COLOR //

const nine = $("#hour-9");
const ten = $("#hour-10");
const eleven = $("#hour-11");
const twelve = $("#hour-12");
const one = $("#hour-1");
const two = $("#hour-2");
const three = $("#hour-3");
const four = $("#hour-4");
const five = $("#hour-5");

const timeframe = [9, 10, 11, 12, 1, 2, 3, 4, 5];
const divs = [nine, ten, eleven, twelve, one, two, three, four, five];

console.log("the hours is " + date.getHours());

function builder() {
    $('div.container').each(function () {

        var contCount = $(this).children().length;

        console.log(contCount);

        for (var i = 0; i <= contCount; i++) {
            if (timeframe[i] < date.getHours())
                divs[i].css('background', '#ff6961');
            else if (timeframe[i] > date.getHours())
                divs[i].css('background', '#d3d3d3');
            else
                divs[i].css('background', '#77dd77');
        }
    });
}

$(document).ready(builder);

const blocks = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-1", "hour-2", "hour-3", "hour-4", "hour-5"];

// 3. SAVE TEXT ENTERED IN TIMEBLOCK TO LOCAL STORAGE //

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");
    console.log("hello");
    localStorage.setItem(time, value);
    for (var i = 0; i <= blocks.length; i++) {
        console.log(localStorage.getItem(blocks[i]));
    }
})

for (var i = 0; i <= blocks.length; i++) {
    divs[i].children(".col-10").text(localStorage.getItem(blocks[i]));
}
