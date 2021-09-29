---
title: Scrollbar Styling
date: 2021-09-29T06:44:57.648Z
description: CSS styling for browser scrollbar
url: ""
tags:
  - css
---
```css
::-webkit-scrollbar {
  width: 2em; // this for vertical scrollbar
  height: 2em; // this for horizontal scrollbar
}

::-webkit-scrollbar-track {
  background: hsl(120, 75% 90% / 1);
  border-radius: 100vw;
  margin-block: 0.5em;
}

::-webkit-scrollbar-thumb {
  background: hsl(120 100% 85% / 1);
  border: 0.25em solid hsl(120 75% 50% / 1);
  border-radius: 100vw;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(120 100% 10% / 1);
}


```