function compile(code: string) {
  let rPoint = null
  let sum = 0
  let conditional = false
  for (let i = 0;i < code.length;i++) {
    code[i] === '?' && (conditional = false)
    if (conditional) continue
    code[i] === '+' && sum++
    code[i] === '-' && sum--
    code[i] === '*' && (sum *= 2)
    code[i] === '%' && (rPoint = i)
    if (rPoint && code[i] === '<') {
      i = rPoint
      rPoint = null
    }
    if (code[i] === '¿' && sum <= 0) {
      conditional = true
    }

  }
  return sum
}

console.log(compile('++*-')) // 3
// (1 + 1) * 2 - 1 = 3

console.log(compile('++%++<')) // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile('++<--')) // 0
// 1 + 1 - 1 - 1 = 0

console.log(compile('++¿+?')) // 3
// 1 + 1 + 1 = 3

console.log(compile('--¿+++?')) // -2
// - 1 - 1 = -2

console.log(compile('-+¿+?')) // 0
// - 1 + 1 = 0

console.log(compile('--¿+++?+++¿--?')) // -1
// - 2  + 1 + 1 + 1 -1 -1 = -1