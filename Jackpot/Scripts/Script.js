function getRando(number) {
    var num = Math.round(Math.random() * number); //generate number between 0 and 65

    num = num.toString(); //turn into string so we can declare length

    if (num.length < 2) { //add a second character
        num = "0" + num;
    }
    return num;
}

//var nums = [1,2,3,4,5,6];
//var genNumbers = [];

//for (var i = 0; i <= genNumbers.Length - 1; i++)
//{
//    genNumbers[i] = randomNumber.Next(lowNumber, highNumber + 1);
//    while (genNumbers[1] == genNumbers[0]) {
//        genNumbers[1] = randomNumber.Next(lowNumber, highNumber + 1);
//}


function getPBNums() {
    document.getElementById("PB1").innerHTML = getRando(65);

    document.getElementById("PB2").innerHTML = getRando(65);
    while ("PB2" == "PB1") {
        document.getElementById("PB2").innerHTML = getRando(65);
    }

    document.getElementById("PB3").innerHTML = getRando(65);
    while ("PB3" == "PB1" || "PB3" == "PB2") {
        document.getElementById("PB3").innerHTML = getRando(65);
    }

    document.getElementById("PB4").innerHTML = getRando(65);
    while ("PB4" == "PB1" || "PB4" == "PB2" || "PB4" == "PB3") {
        document.getElementById("PB4").innerHTML = getRando(65);
    }

    document.getElementById("PB5").innerHTML = getRando(65);
    while ("PB5" == "PB1" || "PB5" == "PB2" || "PB5" == "PB3" || "PB5" == "PB4") {
        document.getElementById("PB5").innerHTML = getRando(65);
    }

    document.getElementById("PB6").innerHTML = getRando(65);
    while ("PB6" == "PB1" || "PB6" == "PB2" || "PB6" == "PB3" || "PB6" == "PB4" || "PB6" == "PB5") {
        document.getElementById("PB6").innerHTML = getRando(65);
    }
}