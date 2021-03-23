---
title: Picture Tag
date: 2021-03-25T15:39:02.672Z
description: Multiple images fitting into different widths
tags:
  - html
---
Using the `<picture>` tag which allows you to add multiple images fitting different widths instead of having a single one scale up & down

```html
<picture>
  <source media="(min-width:768px)" srcset="medium.png" />
  <source media="(min-width:495px)" srcset="small.png" />
  <img src="tiny.png" alt="flag" />
</picture>
```
