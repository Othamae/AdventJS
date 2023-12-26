function travelDistance(map: string) {
  const array = map.split('\n')
  const pos = []
  let santa = []
  for (let i = 0;i < array.length;i++) {
    const line = array[i].split('')
    for (let j = 0;j < array[i].length;j++) {
      if (array[i][j] === 'S') {
        santa = [i, j]
        continue
      }
      line[j] !== '.' && pos.push([line[j], [i, j]])
    }
  }
  let dist = 0
  pos.sort((a, b) => a[0] - b[0]).forEach((n) => {
    dist += Math.abs(santa[0] - n[1][0]) + Math.abs(santa[1] - n[1][1])
    santa = n[1]
  })
  return dist
}


const map = `.....1....
..S.......
..........
....3.....
......2...`

console.log(travelDistance(map)) // -> 12 km
/*
From S to kid 1: 4 moves
From kid 1 to 2: 5 moves
From kid 2 to 3: 3 moves
Total: 12 moves
*/

//console.log(travelDistance(`..S.1...`)) // -> 2