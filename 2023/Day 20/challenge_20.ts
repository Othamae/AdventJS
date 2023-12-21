function distributeGifts(weights: number[][]) {
  const rows = weights.length
  const cols = weights[0].length
  let sol = Array(rows).fill(null).map(() => Array(cols).fill(0))
  for (let i = 0;i < rows;i++) {
    for (let j = 0;j < cols;j++) {
      const nums = [
        weights[i - 1]?.[j],
        weights[i][j - 1],
        weights[i][j + 1],
        weights[i + 1]?.[j],
        weights[i][j]
      ]
      let num = 0
      let counter = 0
      nums.forEach(n => {
        console.log({ n })
        if (n !== null && n !== undefined) {
          num += n
          counter++
        }
      })
      sol[i][j] = Math.round(num / counter)

    }
  }
  return sol
}



const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
]

console.log(distributeGifts(input))

/**
[
  [5, 3, 3],
  [6, 5, 3],
  [7, 6, 4]
]
 */