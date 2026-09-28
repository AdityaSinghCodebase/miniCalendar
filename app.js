let date = document.getElementById("date");

let day = document.getElementById("day");

let month = document.getElementById("month");

let year = document.getElementById("year");

const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const weekday = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

let calendar = new Date();

date.innerText = calendar.getDate();
day.innerText = weekday[calendar.getDay()];
month.innerText = months[calendar.getMonth()];
year.innerText = calendar.getFullYear();
