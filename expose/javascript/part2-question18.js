function printTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);

// run the same function again after 1 second
  setTimeout(printTime, 1000);
}

printTime();