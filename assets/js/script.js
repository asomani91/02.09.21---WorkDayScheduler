
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



// 2. display past, present or future time by color // 
// a. if past time, show gray //
// b. if present time, show red //
// c. if future time, show green //






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