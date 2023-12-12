function adjustLights(lights: string[]) {
    if (lights.length <= 1) return 0
    const colors = ['🟢', '🔴']
    let counts = [0, 0, 0, 0]
    for (let i = 0;i < lights.length;i++) {
        counts[i % 2 * 2 + (lights[i] === colors[0] ? 0 : 1)]++
    }
    return Math.min(counts[0] + counts[3], counts[1] + counts[2])
}


console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (you change the fourth light to 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (you change the second light to 🟢 and the third to 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (they are already alternating)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (you change the second light to 🟢)

console.log(adjustLights(['🟢', '🔴', '🔴', '🟢', '🔴'])) // 2
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])) // 1