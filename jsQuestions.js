 var num = Math.floor(Math.random()*100);

// if (num % 7 == 0) {
//     console.log(num + " is divisible by 7");
// } else {
//     console.log(num + " is not divisible by 7");
// }
// if (num % 9 == 0) {
//     console.log(num + " is divisible by 9");
// } else {
//     console.log(num + " is not divisible by 9");
// }

// var ans =  num > 90 ? "A": 90 > num  && num > 80 ? "B": 80 > num  && num > 70 ? "C": 70 > num && num > 60 ? "D": "F"
// console.log(num + " " + ans);

// console.log(add(5, 9));
// function add(x, y) {
//     return(x+y);
// }

// add = (Math.floor(Math.random()*100),Math.floor(Math.random()*100)) =   > x + y;

// var x = 10;
// const words = ["file", "edit", "selection", "view", "go", "math", "terminal", "help", "window", "run", "debug", "command", "line", "node", "use"];
// console.log("size: " + words.length);
// console.log("first element: " + words[0]);
// console.log("last element: " + words[words.length-1]);
// console.log("random element: " + words[Math.floor(Math.random()*15)]);
// words.sort();
// words.push(console);
// words.push(x);
const numbers = [Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29)];
const distances = [];
for (let i = 0; i < numbers.length - 1; i++) {
    var distance = numbers[i]-numbers[i+1]
    if (distance<0) {
        distance = distance*(-1);
    }
    distances.push(distance);
    console.log(numbers[i]);
}
var greatestDistance = 0;
var distancesIndex;
console.log("****");
for (let x = 0; x < distances.length; x++) {
    console.log(distances[x]);
    if (distances[x] > greatestDistance) {
        greatestDistance = distances[x];
        distancesIndex = x;
    }
}
console.log("greatest distance= " + greatestDistance + " between elements " + (distancesIndex+1) + " and " + (distancesIndex+2));
