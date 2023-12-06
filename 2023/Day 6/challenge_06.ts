function maxDistance(movements: string) {
    const pos = movements.split('>').length - 1
    const neg = movements.split('<').length - 1
    return Math.abs(pos - neg) + movements.length - pos - neg
}


const movements = '>>*<'
const result1 = maxDistance(movements)
console.log(result1) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

