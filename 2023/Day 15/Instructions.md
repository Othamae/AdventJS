# Challenge #15: ↔️ Autonomous robot
We are programming some <span style="color:yellow">**robots**</span>  called giftbot 🤖🎁 that autonomously navigate gift warehouses.

We are creating a function to which we pass: the warehouse 🏬 they must navigate and the movements ↔️ they can make.

The warehouse is represented as an  <span style="color:yellow">**array of text strings**</span>, where:

 -  <span style="color:yellow">**``.`` means there is a clear path.**</span>
 -  <span style="color:yellow">**``*``means there is an obstacle.**</span>
 -  <span style="color:yellow">**``!`` is the robot's initial position.**</span>

The *movements* are an <span style="color:yellow">**array of text strings**</span>, where:

 -  <span style="color:yellow">**``R`` moves the robot one position to the right.**</span>
 -  <span style="color:yellow">**``L`` moves the robot one position to the left.**</span>
 -  <span style="color:yellow">**``U`` moves the robot one position upwards.**</span>
 -  <span style="color:yellow">**``D`` moves the robot one position downwards.**</span>
  
It must be taken into account that <span style="color:yellow">**the robot cannot overcome obstacles or the warehouse boundaries.**</span>

Given a warehouse and the movements, we need to return the array with the robot's final position.

```JavaScript
const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

// The last movement is to the left, but it cannot move because there is an obstacle.
```


Keep in mind that the store is <span style="color:yellow">**an array that can have a number of rows ranging from 1 to 100**</span>, as we have warehouses of all sizes.

Also note that the robot <span style="color:yellow">**might end up in its initial position**</span> if it can't move or if it's going around in circles.