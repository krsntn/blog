---
title: The this Keyword in Functions
date: 2020-03-02T03:23:09.680Z
description: Regular functions vs arrow functions
tags:
  - javascript
---
#### <code>this</code> keyword

```javascript
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function() {
    console.log(this); // "this" is jonas object, because jonas object called calcAge()
    console.log(2037 - this.year);

    function isMillenail(){
      console.log(this); // "this" refer to the global scope or undefined in strict mode
    }
    isMillenail();
  },
  greet: () => {
    console.log(this); // "this" refer to the global scope
    console.log(`Hey ${this.firstName}`); // so firstName is undefined
  }
}

jonas.calcAge();
jonas.greet();

function test() {
  console.log(this); // "this" refer to the global scope or undefined in strict mode
}
test();
```

##### Regular Functions
- has the <code>this</code> keyword set to <code>this</code> on the global scope or undefined in 'strict mode'
- inside a regular function, the value of <code>this</code> depends on how the function is called.

##### Arrow Functions
- uses the <code>this</code> keyword from its parent scope

```javascript
function add(a, b) {
  console.log(...arguments);
}
add(1, 2); // 1, 2
add(1, 2, 3, 4); // 1, 2, 3, 4

const addArrow = (a, b) => console.log(...arguments);
addArrow(1, 2, 3); // arguments is not defined
```

#### <code>arguments</code> keyword
<code>arguments</code> keyword only exists in regular functions