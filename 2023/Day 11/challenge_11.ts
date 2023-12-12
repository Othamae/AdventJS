function getIndexsForPalindrome(word: string) {
    const substring = word.slice(0, word.length / 2)
    const reversed = word.split('').reverse().join('').slice(0, word.length / 2)
    if (substring === reversed) return []
    for (let i = 0;i < word.length;i++) {
        if (word[i] === word[word.length - 1 - i]) continue
        for (let j = i + 1;j < word.length;j++) {
            const last = word.length - 1 - i
            if (word.substring(j).indexOf(word[i]) < 0) return null
            if (word.substring(j, word.length - 2).indexOf(word[last]) < 0) {
                const midd = Math.floor(word.length / 2)
                if (word.length % 2 !== 0 && word[i] === word[midd]) {
                    return [midd, last]
                }
                return null
            }
            if (word[j] === word[word.length - 1 - i]) return [i, j]
            continue
        }

    }
    return null
}


console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab'))// [0, 1]
console.log(getIndexsForPalindrome('abac'))// null
console.log(getIndexsForPalindrome('aaaaaaaa'))// []
console.log(getIndexsForPalindrome('aaababa'))// [1, 3]
console.log(getIndexsForPalindrome('caababa'))// null
console.log(getIndexsForPalindrome('rotaratov'))// [4, 8]



