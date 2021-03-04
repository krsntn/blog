---
title: CSS Shorthand
date: 2020-03-04T16:00:00.000Z
description: Samples of CSS shorthands
tags:
  - css
---
### Font

```css
.shorthand {
  font: 1rem/1.5rem bold italic serif;
}

.normal {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  font-style: italic;
  font-family: serif;
}
```

### Background

```css
.shorthand {
  background: #fff url(image.jpg) no-repeat top left / cover;
}

.normal {
  background-color: #fff;
  background-image: url(image.jpg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
}
```

### Lists

```css
.shorthand {
  list-style: disc outside url(image.jpg);
}

.normal {
  list-style-type: disc;
  list-style-position: outside;
  list-style-image: url(image.jpg);
}
```

### Margin & Padding

```css
.shorthand {
  margin: 2px 1px 3px 4px; /* top right bottom left */
  margin: 2px 1px 3px; /* top left-right bottom */
  margin: 2px 1px; /* top-bottom left-right */
  margin: 2px; /* top-right-bottom-left */
}

.normal {
  margin-top: 2px;
  margin-right: 1px;
  margin-bottom: 3px;
  margin-left: 4px;
}
```

### Border

```css
.shorthand {
  border: 1px black solid;
}

.normal {
  border-width: 1px;
  border-color: black;
  border-style: solid;
}
```