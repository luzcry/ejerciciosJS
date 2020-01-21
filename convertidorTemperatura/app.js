let temperetureinC = parseInt (prompt ("¿Cuál es la temperatura en °C?"));

let temperatureinF = (temperetureinC * 1.8) + 32;

const div = document.createElement("div");
div.className = "answers";
div.innerHTML = "la temperatura en Fahrenheit es " + temperatureinF;
document.write("la temperatura en Fahrenheit es " + temperatureinF);