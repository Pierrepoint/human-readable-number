module.exports = function toReadable(number) {
    let sum = "";
    let stringNumber = String(number);
    let lastDigitOfNumber = +stringNumber[+stringNumber.length - 1];
    let secondDigitOfNumber = +stringNumber[+stringNumber.length - 2];
    let hundredS = +stringNumber[+stringNumber.length - 3];
    let simpleDigits = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let teenS = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let decimalS = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    function simpleDigitsFunction(lastDigitOfNumber){
        switch (lastDigitOfNumber) {
        case 0:
            return simpleDigits[0];
        case 1:
            return simpleDigits[1];
        case 2:
            return simpleDigits[2];
        case 3:
            return simpleDigits[3];
        case 4:
            return simpleDigits[4];
        case 5:
            return simpleDigits[5];
        case 6:
            return simpleDigits[6];
        case 7:
            return simpleDigits[7];
        case 8: 
            return simpleDigits[8];
        case 9:
            return simpleDigits[9];
        }
    };
    function twoDigitsInNumber(secondDigitOfNumber){
        if(secondDigitOfNumber > 1){
            switch (secondDigitOfNumber) {
            case 2:
                return decimalS[0];
            case 3:
                return decimalS[1];
            case 4:
                return decimalS[2];
            case 5:
                return decimalS[3];
            case 6:
                return decimalS[4];
            case 7:
                return decimalS[5];
            case 8:
                return decimalS[6];
            case 9:
                return decimalS[7];
            }}
            else if (secondDigitOfNumber == 1){
                switch (lastDigitOfNumber) {
                    case 0:
                        return teenS[0];
                    case 1:
                        return teenS[1];
                    case 2:
                        return teenS[2];
                    case 3:
                        return teenS[3];
                    case 4:
                        return teenS[4];
                    case 5:
                        return teenS[5];
                    case 6:
                        return teenS[6];
                    case 7:
                        return teenS[7];
                    case 8:
                        return teenS[8];
                    case 9:
                        return teenS[9];
                }
            }
            else if (secondDigitOfNumber == 0){
                return '';
            }
    };
    function threeDigitsInNumber(hundredS){
        switch (hundredS){
        case 1:
            return (simpleDigits[1] + ' hundred');
        case 2:
            return (simpleDigits[2] + ' hundred');
        case 3:
            return (simpleDigits[3] + ' hundred');
        case 4:
            return (simpleDigits[4] + ' hundred');
        case 5:
            return (simpleDigits[5] + ' hundred');
        case 6:
            return (simpleDigits[6] + ' hundred');
        case 7:
            return (simpleDigits[7] + ' hundred');
        case 8: 
            return (simpleDigits[8] + ' hundred');
        case 9:
            return (simpleDigits[9] + ' hundred');
        }
    };
    if (stringNumber.length <= 0 || stringNumber.length > 3){return 'error'}
    else if (stringNumber.length == 1){
            sum = simpleDigitsFunction(lastDigitOfNumber);
    }
    else if (stringNumber.length == 2){
            if (secondDigitOfNumber == 1){sum = twoDigitsInNumber(secondDigitOfNumber);}
            else if (secondDigitOfNumber > 1){
                if (lastDigitOfNumber == 0){sum = twoDigitsInNumber(secondDigitOfNumber);}
            else {sum = twoDigitsInNumber(secondDigitOfNumber) + ' ' + simpleDigitsFunction(lastDigitOfNumber);}
            }
    }
    else if (stringNumber.length == 3){
            if (secondDigitOfNumber == 1){sum = threeDigitsInNumber(hundredS) + ' ' + twoDigitsInNumber(secondDigitOfNumber);}
            else if (lastDigitOfNumber == 0 && secondDigitOfNumber == 0){sum = threeDigitsInNumber(hundredS)}
            else if (secondDigitOfNumber == 0){sum = threeDigitsInNumber(hundredS) + ' ' + simpleDigitsFunction(lastDigitOfNumber);}
            else if (secondDigitOfNumber > 1){
            if (lastDigitOfNumber == 0 && secondDigitOfNumber == 0){sum = threeDigitsInNumber(hundredS)}
            else if (lastDigitOfNumber == 0){sum = threeDigitsInNumber(hundredS) + ' ' + twoDigitsInNumber(secondDigitOfNumber);}
            else {sum = threeDigitsInNumber(hundredS) + ' ' + twoDigitsInNumber(secondDigitOfNumber) + ' ' + simpleDigitsFunction(lastDigitOfNumber);}
            }
        }
    return sum;
};