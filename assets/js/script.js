
var currentTime = $("current-time")


// 1. DISPLAY CURRENT TIME //
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var date = new Date();
var d = days[date.getDay()] + " , " + months[date.getMonth()] + " " + date.getDate();
currentTime.text(d);



// 2. DISPLAY PAST, PRESENT OR FUTURE BY COLOR // 
var nine = $("#hour-9")
var ten = $("#hour-10")
var eleven = $("#hour-11")
var twelve = $("#hour-12")
var one = $("#hour-1")
var two = $("#hour-2")
var three = $("#hour-3")
var four = $("#hour-4")
var five = $("#hour-5")
var timeframe = [9, 10, 12, 1, 2, 3, 4, 5];
var divs = [nine, ten, eleven, twelve, one, two, three, four, five];

console.log("THE HOUR IS" + date.getHours());

function color() {
    $("div.container").each(function () {
        var time = $(this).children().length;

        console.log(time);

        for (var i = 0; i <= time; i++) {
            if (timeframe[i] < date.getHours())
                divs[i].css("background", "#D3D3D3");
            else if (timeframe[i] > date.getHours())
                divs[i].css("background", "green");
            else
                divs[i].css("backgroud", "red")
        }
    });
}

$(document).ready(builder);

var blocks = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-1", "hour-2", "hour-3", "hour-4", "hour-5"];


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










