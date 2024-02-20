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

var ans =  num > 90 ? "A": 90 > num  && num > 80 ? "B": 80 > num  && num > 70 ? "C": 70 > num && num > 60 ? "D": "F"
console.log(num + " " + ans);