let name = prompt ("¿Cúal es tu nombre y tu apellido?");

let firstInitial = name.slice(0,1);

let secondInitialPosition = name.indexOf (" ") + 1;

let secondInitial = name.slice(secondInitialPosition, secondInitialPosition+1);

console.log(firstInitial+secondInitial)


document.write ("Tus iniciales son " + firstInitial + secondInitial);