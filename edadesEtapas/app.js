
var aNumber = Number(window.prompt("Type a number", "")); 

const validateInteger = (number) => {
    if (number == 0 || number == NaN) {
        document.write ("Debe indicar un número entero");
        return false
    }
    return true
}

const validateAge = (number) => {
    switch (true) {
        case (number <= 3)  : 
        document.write ("Toddler");
        break;
        case (number <= 5 )  : 
        document.write ("Preschool");
        break;
        case (number <= 12 )  : 
        document.write ("Gradeschooler");
        break;
        case (number <= 18 )  : 
        document.write ("Teen");
        break;
        case (number <= 21 )  : 
        document.write ("Young Adult");
        break;
        default: 
        document.write ("Tu edad no se encuentra en ninguna etapa mencionada")
            break;
    }
}

if (validateInteger(aNumber)) {
    validateAge(aNumber);
}
