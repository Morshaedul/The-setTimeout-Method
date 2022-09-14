const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("demo").innerHTML = "Happy Birthday!"
}

function myStopFunction() {
  clearTimeout(myTimeout);
}

// var date =new Date();
// var currentDate=date.getFullYear();
// var Date=date.getDay();
// document.write(currentDate);
// document.write(date);