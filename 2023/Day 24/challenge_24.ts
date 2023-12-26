function getStaircasePaths(steps: number, maxJump: number): number[][] {
  if (maxJump === 1) return [Array(steps).fill(1)]
  const result: number[][] = []
  const calculatePaths = (steps: number, maxJump: number, path: number[]) => {
    if (steps === 0) {
      result.push(path)
      return
    }
    for (let i = 1;i <= maxJump && i <= steps;i++) {
      calculatePaths(steps - i, maxJump, [...path, i])
    }
  }
  calculatePaths(steps, maxJump, [])
  return result

}


console.log(getStaircasePaths(2, 1)) // [[1, 1]]
console.log(getStaircasePaths(3, 3))// [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)) // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2))
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/