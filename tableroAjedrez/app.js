let size= 8;

let result = " ";

for (let row = 1; row <= size; row++) {
    for (let column = 1; column <= size; column++) { result += "\n"  ;
        if ((column + row) % 2 === 0 ) {
            result += " ";
        } else {
            result += "#";
        }
        
    }
    console.log(result);  
}
function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}