function optimizeIntervals(intervals: number[][]) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = [intervals.shift() as [number, number]]
  for (let interval of intervals) {
    const [min, max] = interval
    const [minResult, maxResult] = result.at(-1) as [number, number]
    if (minResult <= min && min <= maxResult) {
      result[result.length - 1] = [minResult, Math.max(max, maxResult)]
    } else {
      result.push([min, max])
    }
  }

  return result
}

console.log(optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
])) // [[2, 8]]

console.log(optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
])) // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
])) // [[1, 2], [3, 4], [5, 6]]