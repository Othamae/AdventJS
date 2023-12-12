# Challenge #9: 🚦 Switch the lights

They are turning on the <span style="color:yellow">**Christmas lights**</span> 🎄 in the city and, as every year, they have to be fixed!

The lights are of two colors: 🔴 and 🟢 . For the effect to be appropriate, <span style="color:yellow">**they must always alternate**</span>. That is, if the first light is red, the second must be green, the third red, the fourth green, etc.

We have been asked to write a function adjustLights that, given an array of strings with the color of each light, return the <span style="color:yellow">**minimum number**</span> of lights that need to be changed for the colors to alternate.
```JavaScript
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (you change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (they are already alternating)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (you change the second light to 🟢)
```