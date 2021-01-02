---
title: Optional chaining (?.)
date: 2021-01-02T17:57:44.342Z
description: The optional chaining operator in JavaScript
tags:
  - javascript
---
The optional chaining operator provides a way to simplify accessing values through connected objects when it's possible that a reference or function may be <code>undefined</code> or <code>null</code>.

```javascript
// without optional chaining
const output = object.author && object.author.name
```

```javascript
// with optional chaining
const output = object.author?.name
```