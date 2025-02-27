module.exports = function toReadable(number) {
    let units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',

    };
    if (units.hasOwnProperty(number)) {
        return units[number]
    } else {
        let numberToString = String(number)
        if (numberToString.length === 3) {
            if (units.hasOwnProperty(numberToString.substr(1, 2))) {
                return `${units[numberToString[0] * 100]} ${units[Number(numberToString.substr(1, 2))]}`
            } else {
                if (Number(numberToString[1])===0){
                    return `${units[numberToString[0] * 100]} ${units[numberToString[2] * 1]}`
                }
                return `${units[numberToString[0] * 100]} ${units[numberToString[1] * 10]} ${units[numberToString[2] * 1]}`
            }
        }
        return `${units[numberToString[0] * 10]} ${units[numberToString[1] * 1]}`
    }
}
