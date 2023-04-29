/*
- Write code using
1) for loop to print numbers from 0, 20
2) while loop to print even numbers from 0 to 20
3) if..elseif..else code for traffic stop
4) write a function to print your name
5) write a function to print your school name
6) write a fucntion which combines both
*/

// 1)

for(var i = 0; i <= 20; i++) {
  log(i);
}

var i = 0;
while(true) {
  if ((i % 2) === 0) {
    log(i);
  }
  i++;
  if (i === 20) {
    break;
  }
}


var signal = "red";
if (signal === "red") {
  log("trafficstops");
} else if (signal === "Yellow") {
  log("slowstop");
} else if(signal === "Green") {
  log("go");
} else {
  log("stopAndGo");
}



function printName(name) {
  log(name);
}

log(printName("Alice"));

function printSchoolName(name2) {
  log(name2);
}

log(printSchoolName("Crofton"));

function schoolMyName(name, name2) {
  return name + name2;
}

log(schoolMyName("Alice", "Crofton"));

console.log("tom");