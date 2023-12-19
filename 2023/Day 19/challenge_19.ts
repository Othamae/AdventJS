function revealSabotage(store: string[][]) {
  function countSabotage(store: string[][], row: number, col: number): string {
    const rowMaxV = Math.max(0, row - 1)
    const rowMinV = Math.min(store.length - 1, row + 1)
    const colMaxV = Math.max(0, col - 1)
    const colMinV = Math.min(store[0].length - 1, col + 1)

    let count = 0

    for (let r = rowMaxV;r <= rowMinV;r++) {
      for (let c = colMaxV;c <= colMinV;c++) {
        if (store[r][c] === '*') {
          count++
        }
      }
    }
    return count === 0 ? ' ' : count.toString()
  }

  return store.map((row, i) =>
    row.map((cell, j) => (cell === '*' ? '*' : countSabotage(store, i, j).toString()))
  )
}

const store1 = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store1))
/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/