var second = 2;
var first = 1;
var solution = 2;
while (first + second < 4000000) {
    first = first + second;
    second = first + second;

    if (first % 2 === 0) {
        solution = solution + first;
    }
    if (second % 2 === 0) {
        solution = solution + second;
    }
}

console.log(solution);


