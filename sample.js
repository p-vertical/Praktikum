var solution = 0
var loop = 0;
while (loop < 999) {
    loop++;
    if (loop % 3 === 0) {
        solution = solution + loop;
        console.log(solution);

    }
    else if (loop % 5 === 0) {
        solution = solution + loop;
        console.log(solution);
    }

}
