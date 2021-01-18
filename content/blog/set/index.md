---
title: Set
date: 2020-04-18T16:00:00.000Z
description: The JavaScript Set object
tags:
  - javascript
---
### Set
<code>Set</code> is a special type collection – “set of values” (without keys), where each value may occur only once.

Methods are:
- <code>new Set(iterable)</code> – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
- <code>set.add(value)</code> – adds a value, returns the set itself.
- <code>set.delete(value)</code> – removes the value, returns true if value existed at the moment of the call, otherwise false.
- <code>set.has(value)</code> – returns true if the value exists in the set, otherwise false.
- <code>set.clear()</code> – removes everything from the set.
- <code>set.size</code> – is the elements count.

```javascript
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}

// iteration
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```
