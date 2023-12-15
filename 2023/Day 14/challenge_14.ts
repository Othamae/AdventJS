function maxGifts(houses: number[]) {
    let incl = houses[0]
    let excl = 0
    let excl_new = 0

    for (let i = 1;i < houses.length;i++) {
        excl_new = (incl > excl) ? incl : excl
        incl = excl + houses[i]
        excl = excl_new
    }
    return ((incl > excl) ? incl : excl)
}


console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100]))// 103 (3 + 100)