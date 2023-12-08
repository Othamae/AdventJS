function drawGift(size: number, symbol: string) {
    if (size === 1) return '#\n'
    let line1 = ' '.repeat(size - 1) + '#'.repeat(size) + '\n'
    let line2 = ''
    for (let i = 1;i < size - 1;i++) {
        line1 += ' '.repeat(size - 1 - i) + '#' + symbol.repeat(size - 2) + '#' + symbol.repeat(i - 1) + '#\n'
        line2 += '#' + symbol.repeat(size - 2) + '#' + symbol.repeat(size - i - 2) + '#\n'
    }
    line2 += '#'.repeat(size) + '\n'
    return line1 + '#'.repeat(size) + symbol.repeat(size - 2) + '#\n' + line2

}

console.log(drawGift(4, '+'))
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/
