function organizeGifts(gifts: string) {
    const array = gifts.match(/[a-z]+|[^a-z]+/gi)
    let sol = ''
    for (let i = 0;i < array.length;i += 2) {
        const amount = Number(array[i])
        const gift = array[i + 1]
        const bag = amount >= 10 ? amount % 10 : amount
        let box = amount >= 10 ? Math.floor(amount / 10) : 0
        const pallet = amount / 10 >= 5 ? Math.floor((amount / 10) / 5) : 0
        pallet >= 1 && (box = box % 5)
        const finalBag = bag > 0 ? '(' + gift.repeat(bag) + ')' : ''
        sol += `[${gift}]`.repeat(pallet) + `{${gift}}`.repeat(box) +
            finalBag
    }
    return sol
}



console.log(organizeGifts(`76a11b`))
// '[a]{a}{a}(aaaaaa){b}(b)'
