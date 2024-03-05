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
// let myFunction = (a,b) => (a, b);
// console.log("random " + myFunction(Math.floor(Math.random()*100),Math.floor(Math.random()*100)))

// var x = 10;
// const words = ["file", "edit", "selection", "view", "go", "math", "terminal", "help", "window", "run", "debug", "command", "line", "node", "use"];
// console.log("size: " + words.length);
// console.log("first element: " + words[0]);
// console.log("last element: " + words[words.length-1]);
// console.log("random element: " + words[Math.floor(Math.random()*15)]);
// words.sort();
// words.push(console);
// words.push(x);

// const numbers = [Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29), Math.floor(Math.random()*58+29)];
// const distances = [];
// for (let i = 0; i < numbers.length - 1; i++) {
//     var distance = numbers[i]-numbers[i+1]
//     if (distance<0) {
//         distance = distance*(-1);
//     }
//     distances.push(distance);
//     // console.log(numbers[i]);
// }
// var greatestDistance = 0;
// var distancesIndex;
// // console.log("****");
// for (let x = 0; x < distances.length; x++) {
//     // console.log(distances[x]);
//     if (distances[x] > greatestDistance) {
//         greatestDistance = distances[x];
//         distancesIndex = x;
//     }
// }
// console.log("greatest distance= " + greatestDistance + " between elements " + (distancesIndex+1) + " and " + (distancesIndex+2));

// const numbersSquared = numbers.map(square)
// function square(num) {
//   return num * num;
// }
// console.log("original numbers: " + numbersSquared);

// var largestNumberSquared = 0;
// for (let i = 0; i < numbersSquared.length; i++) {
//     if (numbersSquared[i] > largestNumberSquared) {
//         largestNumberSquared = numbersSquared[i];
//     }
// }
// console.log("largest number squared: " + largestNumberSquared);
// const squaredResult = numbersSquared.filter(largerThanHalf);
// function largerThanHalf(num){
//     return num > (largestNumberSquared/2);
// }
// console.log("filtered numbers squared array: " + squaredResult);

// squaredResult.reduce(getSum, 0);
// function getSum(total, num) {
//   return total + Math.round(num);
// }
// console.log("filtered numbers squared array sum= " + squaredResult.reduce(getSum, 0))

// squaredResult.forEach(print);
// function print(num) {
//     console.log(num);
// }

class Movie {
    constructor(releaseDate, title, director) {
        this.releaseDate = releaseDate;
        this.title = title;
        this.director = director;
    }
    print(){
        console.log("length: " + this.releaseDate + ". title: " + this.title + ". director: " + this.director);
    }
}
const movies = [];
const thePhantomMenace = new Movie(1999, "The Phantom Menace", "George Lucas");
movies.push(thePhantomMenace);
const attackOfTheClones = new Movie(2002, "Attack Of The Clones", "George Lucas");
movies.push(attackOfTheClones);
const revengeOfTheSith = new Movie(2005, "Revenge Of The Sith", "George Lucas");
movies.push(revengeOfTheSith);
const aNewHope = new Movie(1977, "A New Hope", "George Lucas");
movies.push(aNewHope);
const theEmpireStrikesBack = new Movie(1980, "The Empire Strikes Back", "George Lucas");
movies.push(theEmpireStrikesBack);
const returnOfTheJedi = new Movie(1983, "Return Of The Jedi", "George Lucas");
movies.push(returnOfTheJedi);
const theAvengers = new Movie(2012, "The Avengers", "Joss Whedon");
movies.push(theAvengers);
const ageOfUltron = new Movie(2015, "Age Of Ultron", "Joss Whedon");
movies.push(ageOfUltron);
const infinityWar = new Movie(2018, "Infinity War", "Anthony Russo");
movies.push(infinityWar);
const endgame = new Movie(2019, "Endgame", "Anthony Russo");
movies.push(endgame);
aNewHope.print();
//how to make a class full of objects javascript w3 schools
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
}
const moviesFiltered = movies.filter(e => 
    e.title == aNewHope.title
    )
    
console.log("movie i found: " );
moviesFiltered[0].print();

const movieDates = [];
for (let i = 0; i < movies.length; i++) {
    movieDates.push(movies[i].releaseDate);
}
const moviesMapped = movieDates.map(timeSince1900);
function timeSince1900(num) {
    return (num - 1900);
}
console.log("mapped movies: " + moviesMapped);
movies.forEach(e=>changeMovies(e));
function changeMovies( movie) {
   movie.releaseDate = movie.releaseDate-1900;
}
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].releaseDate);
}
movieDates.sort(function(a, b){return b-a});
console.log(movieDates);