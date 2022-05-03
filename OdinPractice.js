function capitalize(text){
    return text[0].toUpperCase()+text.slice(1);
}


function reverseString(string){
    let newString = "";
    const stringLength = string.length;
    for (let i = stringLength-1; i > -1; i--){
        newString += (string[i]);
    }
    return newString;
}

const calculator = {
    add: (firstNumber,secondNumber) => {return((firstNumber+secondNumber))},
    subtract: (firstNumber,secondNumber) => {return((firstNumber-secondNumber))},
    divide: (firstNumber,secondNumber) => {return((firstNumber/secondNumber))},
    multiply: (firstNumber,secondNumber) => {return((firstNumber*secondNumber))}
};


const alphabet = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25
}

const punctuation = [".", "?", "!", ",", ";", ":", "-", "--", "[", "]", "(" ,")", "{", "}", "'", '"', "*"]

function getKeyByValue(object, value) {
    // console.log(Object.keys(object).find(key => object[key] === value));
    return Object.keys(object).find(key => object[key] === value);
}

function caesarCipher(string, shift){
    const stringLength = string.length;
    let cipheredText = "";
    for (let i = 0; i < stringLength; i++){
        let shiftedNum = alphabet[string[i]]+shift;
        // console.log(alphabet[string[i]])
        if (string[i].toUpperCase() === string[i] && typeof(alphabet[string[i].toLowerCase()]) !== "undefined"){
            shiftedNum = alphabet[string[i].toLowerCase()]+shift;
            if (shiftedNum > 25){
                shiftedNum = shiftedNum - 26;
            }
            cipheredText += getKeyByValue(alphabet, shiftedNum).toUpperCase();
        }
        if (typeof(alphabet[string[i]]) !== "undefined" ){
            if (shiftedNum > 25){
                shiftedNum = shiftedNum - 26;
            }
            cipheredText += getKeyByValue(alphabet,shiftedNum);
        }
        if (typeof(alphabet[string[i].toLowerCase()]) === "undefined"){
            if (punctuation.includes(string[i].toLowerCase())){
                cipheredText += string[i];
            }
            else{
                cipheredText += " ";
            }
        }
    }
    return cipheredText;
}

const mathsObject = {
    average: 0,
    min: 0,
    max: 0,
    length: 0
}
function analyzeArray(list = []){
    mathsObject.length = list.length;
    // for (let i = 0; i < list.length; i++){
    //     mathsObject.average += list[i];
    // }
    // mathsObject.average = mathsObject.average / mathsObject.length;
    mathsObject.average = list.reduce((a,b) => a+b,0);
    mathsObject.average = mathsObject.average / list.length;
    mathsObject.min = Math.min(...list);
    mathsObject.max = Math.max(...list);
    return mathsObject;
}

module.exports = {
    capitalize: capitalize,
    reverseString: reverseString,
    calculator:calculator,
    caesarCipher:caesarCipher,
    analyzeArray: analyzeArray
};