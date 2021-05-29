---
title: min(), max(), and clamp()
date: 2021-05-29T06:25:19.540Z
description: Guide to the min(), max(), and clamp() CSS functions
tags:
  - css
---

* min(): Lets you set the smallest (most negative) value from a list of comma-separated expressions as the value of a CSS property value
* max(): Lets you set the largest (most positive) value from a list of comma-separated expressions as the value of a CSS property value
* clamp(): Clamps a value between an upper and lower bound. clamp() enables selecting a middle value within a range of values between a defined minimum and maximum. It takes three parameters: a minimum value, a preferred value (dynamic), and a maximum allowed value

## min()
```css
width: min(500px, 70%);

/* equivalent to */
width: 70%;
max-width: 500px;
```

## max()
```css
width: max(200px, 40%);

/* equivalent to */
width: 40%;
max-width: 200px;
```

## clamp()
```css
width: clamp(300px, 50%, 800px);

/* equivalent to */
min-width: 300px;
width: 50%;
max-width: 800px;
```