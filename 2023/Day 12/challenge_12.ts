function checkIsValidCopy(original: string, copy: string) {
    if (original.length !== copy.length) return false
    const symbols = "#+:. "
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = 'abcdefghijklmnopqrstuvwxyz'

    const options = (s: string) => {
        if (upper.includes(s)) return s + s.toLowerCase() + symbols
        if (lower.includes(s)) return s + symbols
        if (symbols.includes(s)) {
            return symbols.slice(symbols.indexOf(s))
        }
        return s
    }
    for (let i = 0;i < original.length;i++) {
        const combinations = options(original[i])
        if (!combinations.includes(copy[i])) return false
    }
    return true
}


console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'sa#ta cl#us is comin#'
))// true
console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'p#nt: cla#s #s c+min#'
)) // false (for the initial p)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (there is a # where it shouldn't be)