---
title: Map
date: 2020-04-17T16:00:00.000Z
description: The JavaScript Map object
tags:
  - javascript
---
### Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:
- <code>new Map()</code> - creates the maps.
- <code>map.set(key, value)</code> – stores the value by the key.
- <code>map.get(key)</code> – returns the value by the key, undefined if key doesn’t exist in map.
- <code>map.has(key)</code> – returns true if the key exists, false otherwise.
- <code>map.delete(key)</code> – removes the value by the key.
- <code>map.clear()</code> – removes everything from the map.
- <code>map.size</code> – returns the current element count.
- <code>map.keys()</code> – returns an iterable for keys,
- <code>map.values()</code> – returns an iterable for values,
- <code>map.entries()</code> – returns an iterable for entries [key, value], it’s used by default in for..of.

```javascript
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

// iteration
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}
```
