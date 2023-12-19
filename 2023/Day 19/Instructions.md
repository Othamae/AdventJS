# Challenge #19: 💣 Face the sabotage

Alert at Santa's toy factory! The <span style="color:yellow">**Grinch**</span> 😈 has infiltrated the warehouse and sabotaged some of the toys 💣.

<span style="color:yellow">**The elves need help to find the sabotaged toys**</span> and remove them before Christmas comes. For this, we have the warehouse map 🗺️, which is a matrix.

The ``*`` represent the sabotaged toys, and empty cells with a blank space are safe places.

Your task is to write <span style="color:yellow">**a function that returns the same matrix but, at each position, shows us the number of sabotaged toys in the adjacent cells**</span>.

If a cell contains a sabotaged toy, it should remain the same. If a cell does not touch any sabotaged toy, it should contain a blank space .

```JavaScript
const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
```

Keep in mind that…

- <span style="color:yellow">**Diagonal cells are also considered adjacent.**</span>
- <span style="color:yellow">**The board will always have at least one empty cell and a sabotaged toy ``*``.**</span>
- <span style="color:yellow">**The board can be of any size.**</span>
- <span style="color:yellow">**The numbers are strings.**</span>