/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    const numberArr = s.split("").map(letter => romanMap[letter])
    const numberSequences = []
    numberArr.forEach((num) => {
        if (numberSequences.length === 0)
            numberSequences.push(num)
        else {
            if (numberSequences[numberSequences.length - 1] <= num) {
                numberSequences[numberSequences.length - 1] = numberSequences[numberSequences.length - 1] >= num ? num + numberSequences[numberSequences.length - 1] : num - numberSequences[numberSequences.length - 1]
            } else {
                numberSequences.push(num)
            }
        }
    })

    return numberSequences.reduce((acc, cur) => {
        return acc + cur
    }, 0)
};
