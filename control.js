 /*
Control Structures: Used to control the flow of execution in a program

- if..else, if..elseif..else
- switch/case
- for loop
- while
- do..while
*/ 

var x = 20;
if (x > 10) {
  log("X is greater than 10");
} else {
  log("X is not greater than 10");
}


var signal = "Red";
if (signal === "Red") {
  log("Traffic stops");
} else if (signal === "Yellow") {
  log("Traffic slows and prepares to stop");
} else if(signal === "Green") {
  log("Traffic moves");
} else {
  log("Stop and go");
}

switch(signal){
  case "Red":
    log("Traffic stops");
    break;
  case "Yellow":
    log("Traffic slows and prepared to stop");
    break;
  case "Green":
    log("Traffic moves");
    break;
  default:
    log("Stop and go");
}

// loops
// for: if you know upfront how many time to loop
// while: you dont know how many times to loop, but will break at some condition
// do..while: similar to while, but guarantees atleast one loop iteration

/*
for(var i = 0 <step1>; i < 10 <step2>; i++ <step4> ) {
  log(i); <step3> // iteration
}

step1: One time operation
step2: condition evaluated immediately after step1 and gets evaulated every iteration
step3: iteration is run
step4: gets evalutated
step2: condition evalauted

if step2 is false, then loop exits
*/

for(var i = 0 /* <step1> */; i < 10 /*<step2> */; i++ /*<step4>*/) {
  log(i); // <step3> iteration
}

var i = 10;
while(true) {
  log(i);
  i++;
  if (i > 20) {
    break;
  }
}

do {
  log(i);
  i++;
} while(i > 20)



