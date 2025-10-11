function validateCreditCard(cardNumber)
{
    let sum = 0;
    let allSame = "";
    cardNumber = String(cardNumber);

    if(cardNumber.length != 16)
        return false;

    if((cardNumber.slice(-1) % 2) != 0)
        return false;
    
    for (let i = 0; i < cardNumber.length; i++) {
        sum += Number(cardNumber[i]);
        if( cardNumber[i] < "0" || cardNumber[i] > "9" ) {
            return false;
        }
    }

    for (let i = 0; i < cardNumber.length; i++) {
        if("0123456789".includes(cardNumber[i]) && !String(allSame).includes(cardNumber[i])) {
            allSame += cardNumber[i];
        }
    }
    if(allSame.length < 2) {
        return false;
    }

    if(sum < 16)
        return false;

    return true;
}

console.log(validateCreditCard("9999777788880000")); // true
console.log(validateCreditCard("6666666666661666")); // true
console.log(validateCreditCard("a92332119c011112")); // false
console.log(validateCreditCard("4444444444444444")); // false
console.log(validateCreditCard("1111111111111110")); // false
console.log(validateCreditCard("6666666666666661")); // false
