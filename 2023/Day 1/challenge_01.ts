function findFirstRepeated(gifts: number[]) {
    const map = {}
    for (let gift of gifts) {
        if (map[gift]) return gift
        map[gift] = 1
    }
    return -1
}
