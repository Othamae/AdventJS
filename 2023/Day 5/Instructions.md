# Challenge #5: 🛷 Santa's CyberTruck

Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

- <span style="color:yellow">**. = Road**</span>
- <span style="color:yellow">**S = Santa's Sled**</span>
- <span style="color:yellow"> * **= Open barrier**</span>
- <span style="color:yellow">**| = Closed barrier**</span>
  
Example of a road: ``S...|....|.....``

Each unit of time,  <span style="color:yellow">**the sled moves one position to the right**</span>. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

<span style="color:yellow">**All barriers start closed**</span>, but after 5 units of time, they all open <span style="color:yellow">**forever**</span>.

<span style="color:yellow">**Create a function that simulates the sled's movement**</span> for a given time and <span style="color:yellow">**returns an array**</span> of strings representing the state of the road at each unit of time:
```JavaScript
const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/
```

The result is an <span style="color:yellow">**array where each element shows the road at each unit of time**</span>.

Take into account that <span style="color:yellow">**if the sled is in the same position as a barrier**</span>, then it takes its place in the array.

The elves were <span style="color:yellow">**inspired by this Code Wars challenge**</span>.