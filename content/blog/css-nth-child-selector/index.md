---
title: CSS :nth-child() Selector
date: 2020-01-13T09:34:59.438Z
description: The :nth-child(n) selector matches every element that is the nth
  child, regardless of type, of its parent.
url: ""
tags:
  - css
---
### Selecting with a Formula
We could also select elements using a formula, <code>an + b</code>.
- a is the cycle size
- n is the counter which starts from 0
- b is the offset value

```css
.box:nth-child(3n+5) {
  font-size: 65px;
}
```

(3x0)+5=5 <5th element>  
(3x1)+5=8 <8th element>  
(3x2)+5=11 <11th element>  