
// check for button clicks inside an on click
$(".saveBtn").on("click", function() {
// grab my values for time and text
var value = $(this).siblings(".task").val();
var time =  $(this).parent().attr("id")
// save them to local storage
localStorage.setItem(time, value)
})

// write a function to updae the hours in the time blocks                             
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

$("hour-9 .task").val(localStorage.getItem("hour-9"));

// display current day on page (use moment)