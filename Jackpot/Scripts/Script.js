function getRando(number) {
    var num = Math.round(Math.random() * number); //generate number between 0 and 65

    num = num.toString(); //turn into string so we can declare length

    if (num.length < 2) { //add a second character
        num = "0" + num;
    }
    return num;
}

function getPBNums() {
    document.getElementById("PB1").innerHTML = getRando(65);
    document.getElementById("PB2").innerHTML = getRando(65);
    document.getElementById("PB3").innerHTML = getRando(65);
    document.getElementById("PB4").innerHTML = getRando(65);
    document.getElementById("PB5").innerHTML = getRando(65);
    document.getElementById("PB6").innerHTML = getRando(65);
}