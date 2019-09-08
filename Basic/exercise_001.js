/*
1. Write a JavaScript program to display the current day and time in the following format.

Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

var today = new Date();
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = daysOfWeek[today.getDay()];

var hourAmPm;

function ampm() {
  var hour = today.getHours();
  if (hour < 12) {
    if (hour == 0) {
      hourAmPm = 12 + " AM";
    }
    else {
      hourAmPm = hour + " AM";
    }
  }
  else {
    if (hour == 12) {
      hourAmPm = 12 + " PM";
    }
    else {
      hour = hour % 12;
      hourAmPm = hour + " PM";
    }
  }
}

ampm();

console.log("Today is : " + day);
console.log("Current time is : " + hourAmPm + " : " + today.getMinutes() + " : " + today.getSeconds());
