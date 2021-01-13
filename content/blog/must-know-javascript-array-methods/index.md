---
title: Must Know JavaScript Array Methods
date: 2020-06-22T14:04:25.171Z
description: Some of the must know JavaScript array methods
tags:
  - javascript
---
### .toString()

Return a string representing the specified object.

```javascript
const arr = [1, 2, 'a', 'b'];

console.log(arr.toString());
// Output: "1,2,a,b"
```

### .join()

Return a new string by concatenating all of the elements in an array.

```javascript
const arr = ['Fire', 'Air', 'Water'];

console.log(arr.join());
// Output: "Fire,Air,Water"

console.log(arr.join('-'));
// Output: "Fire-Air-Water"
```

### .push()

Adds more or more elements to the end of an array.

```javascript
const arr = ['a', 'b'];

arr.push('c');
console.log(arr);
// Output: ['a', 'b', 'c']

console.log(arr.push('d'));
// Output: 4
```

### .pop()

Adds more or more elements to the end of an array.

```javascript
const arr = ['a', 'b', 'c'];

arr.pop();
console.log(arr);
// Output: ['a', 'b']

console.log(arr.pop());
// Output: "b"
```

### .shift()

Removes the first element from an array and returns that removed element.

```javascript
const arr = ['a', 'b', 'c'];

const firstElement = arr.shift();

console.log(arr);
// Output: ['b', 'c']

console.log(firstElement);
// Output: "a"
```

### .unshift()

Adds one or more elements to the beginning of an array.

```javascript
const arr = ['a', 'b', 'c'];

console.log(arr.unshift('d', 'e'));
// Output: 5

console.log(arr);
// Output: ['a', 'b', 'c', 'd', 'e']
```

### .sort()

Sorts the elements of an array in place and returns the sorted array.

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();

console.log(months);
// Output: ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();

console.log(array1);
// Output: [1, 100000, 21, 30, 4]
```

### .reverse()

Reserves the order of the elements in an array.

```javascript
const arr = [1, 2, 3];

arr.reverse();
console.log(arr);
// Output: [3, 2, 1]
```

### .reduce()

Reserves the order of the elements in an array.

```javascript
const arr = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// Output: 10
```

### .map()

Creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const arr = [1, 2, 3, 4];
const map1 = array1.map(x => x * 2);

console.log(map1)
// Output: [2, 4, 6, 8]
```

### .indexOf()

Search the array for an element and returns its position.

```javascript
const arr = ['x', 'y', 'z'];

console.log(arr.indexOf('y'));
// Output: 1

console.log(arr.indexOf('w'));
// Output: -1
```

### .lastIndexOf()

Search the array for an element and returns the last index of the element can be found in the array.

```javascript
const arr = ['z', 'x', 'y', 'z'];

console.log(arr.lastIndexOf('z'));
// Output: 3
```

### .find()

Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.

```javascript
const arr = ['x', 'y', 'z'];

console.log(arr.find(x => x === 'y'));
// Output: y

console.log(arr.find(x => x === 'w'));
// Output: undefined
```

### .slice()

Returns a shallow copy of a portion of an array into a new array object.

```javascript
const arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(arr.slice(2));
// Output: ["camel", "duck", "elephant"]

console.log(arr.slice(2, 4));
// Output: ["camel", "duck"]
```

### .flat()

Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Output: [0, 1, 2, [3, 4]]
```

### .every()

Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```javascript
const arr = [1, 30, 39, 29, 10, 13];

console.log(arr.every(x => x < 40));
// Output: true
```

### .some()

Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.every(x => x % 2 === 0));
// Output: true
```

### .includes()

Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.includes(2));
// Output: true
```

### .from()

Creates a new, shallow-copied Array instance from an array-like or iterable object.

```javascript
console.log(Array.from('foo'));
// Output: ["f", "o", "o"]
```