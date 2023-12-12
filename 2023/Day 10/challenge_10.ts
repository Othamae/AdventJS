function createChristmasTree(ornaments: string, height: number) {
    let tree = ''
    let index = 0
    for (let i = 0;i < height;i++) {
        tree += ' '.repeat(height - i - 1)

        for (let j = 0;j <= i;j++) {
            tree += ornaments[index % ornaments.length]
            if (j !== i) tree += ' '
            index++
        }
        tree += '\n'

    }

    tree += ' '.repeat(height - 1) + '|'
    return tree
}

console.log(createChristmasTree('123', 4))
console.log(createChristmasTree('*@o', 3))
