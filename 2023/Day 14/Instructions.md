# Challenge #14: 🚨 Avoid the alarm

With the rise of social media, Santa Claus <span style="color:yellow">**is terrified that children might wake up while he is delivering gifts in their homes**</span>, use their phone to record him and go viral on TikTok.

He wants to avoid this at all costs. Each house on that street has a number of prepared gifts. However, <span style="color:yellow">**the houses have a security system connected between adjacent houses**</span>, so <span style="color:yellow">**he can't leave gifts in two consecutive houses**</span>, or the alarm will be triggered and alert the children.

Given an <span style="color:yellow">**array of non-negative integers gifts**</span> that represents the number of gifts in each house, your task is to help Santa Claus determine the <span style="color:yellow">**maximum number of gifts he can deliver**</span> in one night without setting off any alarms.
 


```JavaScript
maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
```