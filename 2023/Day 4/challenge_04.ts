function decode(message: string) {
    let sol = ''
    const array = []
    for (let letter of message) {
        if (letter === '(') {
            array.push(sol)
            sol = ''
        } else if (letter === ')') {
            sol = array.pop() + sol.split('').reverse().join('')
        } else {
            sol += letter
        }
    }
    return sol
}


function decode2(message: string) {
    const firstIndex = message.lastIndexOf('(')
    if (firstIndex !== -1) {
        const lastIndex = message.indexOf(')', firstIndex)
        if (lastIndex !== -1) {
            const inside = message.substring(firstIndex + 1, lastIndex)
            const reversedInside = inside.split('').reverse().join('')
            const result = message.slice(0, firstIndex) + reversedInside + message.slice(lastIndex + 1)
            return decode(result)
        }
    }
    return message
}


const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const d = decode('((nta)(sa))')
console.log(d) // santa
// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus