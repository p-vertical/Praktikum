var zeichen = [];
var zahlen = [];
var aNum = true;
function numbers(N) {
    var anzeige = document.getElementById("anzeige");
    anzeige.value += N;
    zahlen.push(N);
    console.log(zahlen);
    aNum = true;
}
function operators(O) {
    var anzeige = document.getElementById("anzeige");
    anzeige.value += O;
    zeichen.push(O);
    console.log(zeichen);
    aNum = false;
}
function clr() {
    if (aNum === false) {
        zeichen.pop();
        console.log(zeichen);
    }
    else {
        zahlen.pop();
        console.log(zahlen);
    }
    aNum = !aNum;
    var anzeige = document.getElementById("anzeige");
    anzeige.value = anzeige.value.substring(0,anzeige.value.length -1)
}
function getResult() {
    var result = zahlen[0];
    var tempzeichen = zeichen;
    for (var i = 1; i < zahlen.length; i++) {
        var z = tempzeichen[0];
        tempzeichen = tempzeichen.slice(1);
        switch (z) {
            case '*':
                result *= zahlen[i];
                break;
            case '+':
                result += zahlen[i];
                break;
            case '-':
                result -= zahlen[i];
                break;
            case '/':
                result /= zahlen[i];
                break;
        }

    }

    var anzeige = document.getElementById("anzeige");
    anzeige.value = result;
}                      