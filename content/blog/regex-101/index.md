---
title: Regex 101
date: 2020-01-08T16:00:00.000Z
description: Regular expression cheat sheet
tags:
  - regex
  - javascript
---
## Regex Cheat Sheet

### Character

Class | Definition
--- | --- | ---
. | any character except newline
\w | any word character [A-Za-z0-9]
\W | **NOT** word character
\d | any digit character [0-9]
\D | **NOT** digit character
\s | any whitespace

### Quantifier

Class | Definition
--- | --- | ---
* | 0 or more
+ | 1 or more
? | 0 or 1
{1,} | between 1 or more
{1, 5} | between 1 and 5
{3} | exactly 3
a+? | match as few as possible
ab\|bc | match ab or bc

### Anchors

Class | Definition
--- | --- | ---
^ | beginning
$ | end
\b | word boundary
\B | **NOT* word boundary

### Character Classes

Class | Definition
--- | --- | ---
[abc] | any of a, b or c
[^abc] | *NOT** any of a, b or c
[a-g] | any character between a and g

### Group

Class | Definition
--- | --- | ---
(abc) | group

### Flags

Class | Definition
--- | --- | ---
g | global
i | case insensitive

<br />

## Regex in Javascript

### String: <code>.match()</code>

```javascript
const sentence = "This is a test sentence."

const output2 = sentence.match(reg);
console.log(output2); 
// expected output: ['This', 'is', 'a', 'test', 'sentence']
```

### Regex: <code>.test()</code>

```javascript
const sentence = "This is a test sentence."

const reg = /\w+/g;
const output1 = reg.test(sentence);
console.log(output1); 
// expected output: true
```

### Regex: <code>.exec()</code>

```javascript
const sentence = 
`David - 011-1111
Alex - 022-3333
Bryan - 044-5555`;

const reg = /([A-Z][a-z].+?)\s-\s(\d{3}-\d{4})/g;

let result;
while ((result = reg.exec(sentence))) {
  console.log(result[1], result[2]);
}
// expected output: 
//    David 011-1111
//    Alex 022-3333
//    Bryan 044-5555
```