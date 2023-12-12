# Challenge #10: 🎄 Create your own Christmas tree

What an idea Sam Elfman has had! He wants to offer a service that creates a <span style="color:yellow">**customized Christmas tree**</span> 🎄 in a matter of seconds.

To create it, we are given a <span style="color:yellow">**string to form the tree**</span> and a <span style="color:yellow">**number that indicates its height**</span>.

Each character of the string represents an ornament of the tree, and we use them <span style="color:yellow">**cyclically**</span> until we reach the indicated height. At <span style="color:yellow">**least, they will always pass us one**</span>.

We must return a multiline <span style="color:yellow">**string**</span> with the Christmas tree made with the ornaments, the indicated height <span style="color:yellow">**plus a final line with the trunk formed by the character |**</span>  in the center and, finally, a newline ``\n``.

For example, if we receive the string ``"123"`` and the number ``4`` as height, we would have to build this tree:
```JavaScript
   1
  2 3
 1 2 3
1 2 3 1
   |
```   
If we receive the string ``*@o`` and the number ``3``, the tree we should return is:

```JavaScript
  *
 @ o
* @ o
  |
```

Note:
- <span style="color:yellow">**The tree should always be centered, for that reason add blank spaces to the left of each line.**</span>
- <span style="color:yellow">**Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.**</span>
- <span style="color:yellow">**The ornaments have a white space between them for separation.**</span>