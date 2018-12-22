// Task 1 --------------------------------------------------------
var userEnterText = prompt("Введите текст для анализа", "");
if (userEnterText.length>0) {
    var userEnterChar = prompt("Введите искомый символ", "");
    if (userEnterChar.length == 1) {
        var matchCount = 0;
        for (var i= 0; i < userEnterText.length; i++) {
            if (userEnterText[i] == userEnterChar) { matchCount++ }   
        }
        console.log (`Количество символов ${userEnterChar} во введенном тексте - ${matchCount}`);
    } else if (userEnterChar.length == 0) {
        console.error ("Вы не ввели искомый символ!");    
    } else {
        console.error ("Вы ввели сильно много искомых символов!");
    } 
} else {
    console.error ("Вы не ввели текст!");
}

//  Task 2 --------------------------------------------------------
var userEnterNumber = Number(prompt("Введите число ", ""));
if (userEnterNumber) {
    var signOdd = !!(userEnterNumber % 2);
    var outputNumber = Number(!signOdd)-1;
    for (var i = 1; i <= (userEnterNumber - Number(signOdd))/2 + Number(signOdd); i++) {
        console.log (outputNumber+= 2);
    } 
} else {
    console.error ("Вы не ввели число!");
}

// Task 3 --------------------------------------------------------
var userEnterText = prompt("Введите текст для анализа", "");
if (userEnterText.length>0) {
    var signSpace = true;
    var outputText ="";
    for (var i = 0; i < userEnterText.length; i++) {
        if (userEnterText[i] == " ") {
            signSpace = true;
            outputText = outputText + userEnterText[i];
        } else {
            if (signSpace) {
                outputText = outputText + userEnterText[i].toUpperCase();
            } else {
                outputText = outputText + userEnterText[i];
            }
            signSpace=false;
        }
    } 
    console.log (outputText);
} else {
    console.error ("Вы не ввели текст!");
}