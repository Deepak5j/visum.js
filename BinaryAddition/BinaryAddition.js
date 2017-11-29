//=============Function definion for binary addition START=============
function binaryAddition(a, b) {
    let i = a.length - 1; //last index for a
    let j = b.length - 1; //last index for b

    let result  = "";
    let carry   = 0;

    //loop run up to smaller length among a and b
    while(i >= 0 && j >= 0) {
        let acur = parseInt(a[i], 10); //a current element
        let bcur = parseInt(b[j], 10); //b current element

        let rcur = (acur + bcur + carry) % 2; //result = acur + bcur + old carry
        carry = parseInt((acur + bcur + carry) / 2); //carry
        result += rcur;
        i--;
        j--;
    }
    
    //loop run left part of a
    while(i >= 0) {
        let acur = parseInt(a[i], 10);
        let rcur = (acur + carry) % 2;
        carry = parseInt((acur + carry) / 2); 
        result += rcur;
        i--;
    }

    //loop run left part of b
    while(j >= 0) {
        let bcur = parseInt(b[j], 10);
        let rcur = (bcur + carry) % 2;
        carry = parseInt((bcur + carry) / 2); 
        result += rcur;
        j--;
    }
    
    //if carry is left, or carry not zero
    if(carry) {
        result += carry;
    }
    
    //reversing the result
    return result.split("").reverse().join("");
}
//=============Function definion for binary addition END=============

//=================Function usage START==============================
let number1 = prompt("Enter binary number 1: ");
let number2 = prompt("Enter binary number 2: ");
let output = binaryAddition(number1, number2);
alert(output);
//=================Function usage START==============================
