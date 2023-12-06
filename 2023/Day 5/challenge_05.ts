function cyberReindeer(road: string, time: number) {
    const result = [road]
    let charToReplace = "."
    let santaIndex = road.indexOf('S')
    for (let i = 0;i < time - 1;i++) {
        let currentRoad = result[i]
        if (i == 4) currentRoad = currentRoad.replaceAll("|", "*")
        if (currentRoad[santaIndex + 1] != "|") {
            const newRoad = currentRoad.replace('S', charToReplace)
            charToReplace = currentRoad[santaIndex + 1]
            currentRoad = newRoad.substring(0, santaIndex + 1)
            currentRoad += 'S' + newRoad.substring(santaIndex + 2)
            santaIndex++
        }
        result.push(currentRoad)
    }
    return result
}



const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

console.log(result)
