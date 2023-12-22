function findBalancedSegment(message: number[]) {
  let x = -1
  let y = 0
  for (let i = 0;i < message.length - 1;i++) {
    let z = 0
    let o = 0
    for (let j = i;j < message.length;j++) {
      message[j] === 0 ? z++ : o++
      if ((z === o) && ((j - i) > y)) {
        y = j - i
        x = i
      }
    }
  }
  return x < 0 ? [] : [x, x + y]
}


console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))
//                                     |________|
// position of segment:                  [2, 5]
// longest balanced
// of 0s and 1s

console.log(findBalancedSegment([1, 1, 0]))
//                                  |__|
//                                 [1, 2]

console.log(findBalancedSegment([1, 1, 1]))
// no balanced segments: []

console.log(findBalancedSegment([1, 0, 1]))
//                               |__|
// position of segment:         [ 0, 1]
