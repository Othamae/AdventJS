# Challenge #6: 🦌 The reindeer on trial

The elves are cataloging Santa's reindeer 🦌 based on the distance they can travel.

For this, they have a text string movements where each character represents the direction of the reindeer's movement:

- <span style="color:yellow">**> = Moves to the right**</span>
- <span style="color:yellow">**< = Moves to the left**</span>
- <span style="color:yellow"> * **= Can move forward or backward**</span>
  
 
 For example, if the movement is ``>>*<``, it goes to the right twice, then it can go either left or right (whichever maximizes the final traveled distance) and then left.

The elves want to know what the maximum distance the reindeer travels is  <span style="color:yellow">**after completing all movements**</span>.

<span style="color:yellow">**In the previous example, the maximum distance the reindeer travels is ``2``**</span>. It goes to the right twice ``+2``, then with the ``*`` it can go to the right again to maximize the distance ``+1`` and then it goes to the left ``-1``.

Create a maxDistance function that takes the text string movements and returns <span style="color:yellow">**the maximum distance**</span> that the reindeer can travel <span style="color:yellow">**in any direction**</span>:

```JavaScript
const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
```

Keep in mind that it doesn't matter whether it is to the left or right, the distance is <span style="color:yellow">**the absolute value of the maximum distance traveled at the end of the movements**</span>.