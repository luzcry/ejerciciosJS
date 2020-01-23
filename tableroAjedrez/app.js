let size= 8;

let result = " ";

for (let row = 1; row <= size; row++) {
    for (let column = 1; column <= size; column++) { result += "\n"  ;
        if ((column + row) % 2 === 0 ){
            result += " ";
        } else {
            result += "#";
        }
     
}
    console.log(result)    
}
    
