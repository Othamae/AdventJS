# Challenge #22: 🚂 Programming language

In Santa's toy factory, <span style="color:yellow">**the elves are developing a programming language called Santa.js**</span> 👨‍💻👩‍💻 based on symbols to control their toy machines 🚂.

They have created a simple instruction system and need your help to build a <span style="color:yellow">**compiler that interprets these symbols.**</span>

The compiler works with a counter that initially has a value of 0. <span style="color:yellow">**The instructions will modify the value of this counter.**</span>

Elves' language instructions based on symbols:

- <span style="color:yellow">**``+``: Increments the counter value by 1.**</span>
- <span style="color:yellow">**``*``: Multiplies the counter value by 2.**</span>
- <span style="color:yellow">**``-``: Subtracts 1 from the counter value.**</span>
- <span style="color:yellow">**``%``: Mark a return point. Does not modify the counter.**</span>
- <span style="color:yellow">**``<``: Go back once to the last instruction with the % symbol it has seen. If - there is no previous %, it does nothing.**</span>
- <span style="color:yellow">**``¿``: Starts a conditional block that executes if the counter is greater than 0.**</span>
- <span style="color:yellow">**``?``: Ends a conditional block.**</span>

Create a ``compile`` function that receives a string with the language instructions and returns the result of executing them. Here are some examples:

```JavaScript
compile('++*-') // 3
// (1 + 1) * 2 - 1 = 3

compile('++%++<') // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

compile('++<--') // 0
// 1 + 1 - 1 - 1 = 0

compile('++¿+?') // 3
// 1 + 1 + 1 = 3

compile('--¿+++?') // -2
// - 1 - 1 = -2
```
