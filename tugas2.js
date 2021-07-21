let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function convertToFar(){
    let temperature = (parseFloat(celsius.value)*9/5)+32;
    fahrenheit.value= parseFloat(temperature);
}

function convertToCel(){
    let temperature = (parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value = parseFloat(temperature);
}

