module.exports = function check(str, bracketsConfig) {
    let pairsOfBrackets = Object.fromEntries(bracketsConfig);
    let stachOfBrackets = [];
    let elements = str.split("");
    for (let element of elements) {
        if (stachOfBrackets[stachOfBrackets.length - 1] === element) {
            stachOfBrackets.pop();
        } else if (pairsOfBrackets[element]) {
            stachOfBrackets.push(pairsOfBrackets[element]);
        } else {
            return false;
        }
    }
    return stachOfBrackets.length === 0;
}
