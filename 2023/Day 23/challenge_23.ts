function organizeChristmasDinner(dishes: string[][]) {
  const map = new Map<string, string[]>()
  for (const dishList of dishes) {
    const dish = dishList[0]
    const ingredients = dishList.slice(1)
    for (const ingredient of ingredients) {
      !map.has(ingredient)
        ? map.set(ingredient, [dish])
        : map.get(ingredient)!.push(dish)
    }
  }
  const result = []
  map.forEach((value, key) => {
    value.length > 1 && result.push([key, ...value.sort()])
  })
  return result.sort((a, b) => a[0].localeCompare(b[0]))
}



const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner(dishes))

/*

"sauce" is in 2 dishes: "christmas turkey" and "pizza".
"sugar" is in 2 dishes: "cake" and "hot chocolate".
The rest of the ingredients only appear in one dish, so we do not show them.

We show "sauce" first because alphabetically it comes before "sugar".
And the dishes of each ingredient are also alphabetically ordered.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/