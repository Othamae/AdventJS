function calculateTime(deliveries: string[]) {
    let totalTime = 7 * 3600
    for (let i = 0;i < deliveries.length;i++) {
        const delivery = deliveries[i]
        const [hours, minutes, seconds] = delivery.split(':')
        totalTime += - (Number(hours) * 3600) - (Number(minutes) * 60) - Number(seconds)
    }

    const isNeg = totalTime <= 0
    totalTime = Math.abs(totalTime)

    const seconds = totalTime % 60
    const minutes = Math.trunc(totalTime / 60) % 60
    const hours = (Math.trunc(totalTime / 60) - minutes) / 60

    const fHours = String(hours).padStart(2, '0')
    const fMinutes = String(minutes).padStart(2, '0')
    const fSeconds = String(seconds).padStart(2, '0')

    return (`${isNeg ? '' : '-'}${fHours}:${fMinutes}:${fSeconds}`)
}


console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
]))// '-05:29:00'