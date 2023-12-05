# Challenge #4: 😵‍💫 Turn the parentheses around

In 🎅 Santa's workshop, <span style="color:yellow">**some Christmas messages have been written in a peculiar way**</span>: the words within the brackets must be read backwards.

<span style="color:yellow">**Santa needs these messages to be correctly formatted**</span>
. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

```JavaScript
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
```
Notes:

* <span style="color:yellow">**The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.**</span>
* <span style="color:yellow">**There should not be any parentheses left in the final message.**</span>
* <span style="color:yellow">**The maximum nesting level is 2.**</span>
