let age= parseInt( prompt ("¿Cuál es tu edad?"));

let ageInSeconds= age*365*24*60*60;

const div = document.createElement("div");
div.className = "answers";
div.innerHTML = "Tu edad es " + age + " y en segundos serían " + ageInSeconds;
document.write("Tu edad es " + age + " y en segundos serían " + ageInSeconds);