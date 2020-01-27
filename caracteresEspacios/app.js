let text = prompt ("Danos un mensaje");

const printAllCharacters = (text)  =>{
    text.split("").forEach (element => {
        console.log(element)
    });
}
let printCharCount = (text)  =>{
    let result = 0
    for (var char in text) {
        if (char != " " ) {
            result++
        }
    }
    console.log(result)
}

let printSpaces = (text)  =>{ 
    let result  = text.split(" ").lenght-1
    console.log(result)
}

console.log(text)

printAllCharacters(text)

printSpaces(text)

printCharCount (text)