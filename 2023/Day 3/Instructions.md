# Challenge #3: 😏 The naughty elf

In Santa's workshop, <span style="color:yellow">**a mischievous elf**</span> has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to <span style="color:yellow">**write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain**</span>. If there is no difference between the sequences, return an empty string.

```JavaScript
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''

```
Please, keep in mind:

- <span style="color:yellow">**There will always be one different step or none.**</span>
- <span style="color:yellow">**The modification can occur anywhere in the string.**</span>
- <span style="color:yellow">**The original steps could be empty**</span>

