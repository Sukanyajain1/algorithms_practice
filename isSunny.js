var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit var isRaining = false;
var whatToBring = "I should bring: ";

// Conditional statements begin with the keyword 'if'

if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
console.log(whatToBring);

// Prediction - I should bring: sunglasses, a coat, and a smile!