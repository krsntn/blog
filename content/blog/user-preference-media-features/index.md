---
title: User Preference Media Features
date: 2021-05-20T02:11:02.215Z
description: Media Query Level 5
tags:
  - css
---
| Name                                                                                                                   | Summary                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)                 | Detect if the user prefers a light or dark color scheme                                                          |
| [`prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)                         | Detects if the user has requested the system increase or decrease the amount of contrast between adjacent colors |
| [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)             | The user prefers less motion on the page                                                                         |
| [`prefers-reduced-transparency`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) | The user prefers reduced transparency                                                                            |
| [`inverted-colors`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors)            | Is the user agent or underlying OS inverting colors?                                                             |

#### prefers-color-scheme [light, dark]
```css
@media (prefers-color-scheme: dark) {
  body { background: #1e1e1e; color: white; }
}
```

#### prefers-contrast [high, low, forced, no-preference]
```css
@media (prefers-contrast: high) {
  :root {
    --text-color: black;
  }
}
```

#### prefers-reduced-motion [reduce, no-preference]
```css
@media (prefers-reduced-motion) {
  * { transition-duration: 0.05s; }
}
```

#### prefers-reduced-transparency [reduce, no-preference]
```css
@media (prefers-reduced-transparency) {
  .floating-box { opacity: 1; }
}
```

#### inverted-colors [inverted, none]
```css
@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
  }
}
```
