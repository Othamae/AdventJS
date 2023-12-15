function autonomousDrive(store: string[], movements: string[]) {
    let startR = 0
    let startC = 0

    store.forEach((row, rIndex) => {
        const cIndex = row.indexOf('!')
        if (cIndex !== -1) {
            startR = rIndex
            startC = cIndex
        }
    })
    for (let i = 0;i < movements.length;i++) {
        let newCol = startC
        let newRow = startR
        if (movements[i] === 'R') {
            newCol++
        }
        if (movements[i] === 'L') {
            newCol--
        }
        if (movements[i] === 'D') {
            newRow++
        }
        if (movements[i] === 'U') {
            newRow--
        }

        if (newRow >= 0 && newRow < store.length &&
            newCol >= 0 && newCol < store[0].length &&
            store[newRow][newCol] !== '*') {
            store[startR] = store[startR].substring(0, startC)
                + '.' + store[startR].substring(startC + 1)
            store[newRow] = store[newRow].substring(0, newCol) + '!'
                + store[newRow].substring(newCol + 1)
            startR = newRow
            startC = newCol

        }

    }
    return store

}

const store = ['..!....', '...*.*.']

const mov = ['R', 'R', 'D', 'L']
const res = autonomousDrive(store, mov)
console.log(res)