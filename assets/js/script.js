
var currentTime = $("current-time")


// 1. DISPLAY CURRENT TIME //
// var check = moment(n.entry.date_entered, 'YYYY/MM/DD');
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var date = new Date();
var d = days[date.getDay()]+" , "+months[date.getMonth()]+" "+date.getDate();
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
var timeframe = [9,10, 12, 1, 2, 3, 4, 5];
var divs = [nine, ten, eleven, twelve, one, two, three, four, five];

console.log ("THE HOUR IS" + date.getHours());






// 3. save text entered in timeblock to local storage //
// a. saved events stay after refreshing page //































// check for button clicks inside an on click


// $(".saveBtn").on("click", function () {
//     var value = $(this).siblings(".task").val();
//     var time = $(this).parent().attr("id")
//     localStorage.setItem(time, value)
// })


// write a function to update the hours in the time blocks                             
// get current time; use moment

// loop over our time blocks: hint - (look up .each)

// check to see if we have moved past the current time
// if

// check to see if it is the current time
// else if
// addClass
// addClass("past")

// check to see if time is future
// else 
// remove class
// removeClass
// addClass

// load any saved data from local storage

// $("hour-9 .task").val(localStorage.getItem("hour-9"));

// display current day on page (use moment)