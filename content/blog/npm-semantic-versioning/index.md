---
title: NPM Semantic Versioning
date: 2021-05-19T13:58:24.044Z
description: About semantic versioning of packages
tags:
  - npm
---
### Using semantic versioning to specify update types your package can accept

* Patch releases: `1.0` or `1.0.x` or `~1.0.4`
* Minor releases: `1` or `1.x` or `^1.0.4`
* Major releases: `*` or `x`

| Value          | Description                    |
| -------------- | ------------------------------ |
| ~3.9.2         | 3.9.*                          |
| ^3.9.2         | 3.\*.\*                        |
| \>3.9.2        | greater than 3.9.2             |
| \>=3.9.2       | greater than or equal to 3.9.2 |
| <3.9.2         | less than 3.9.2                |
| <=3.9.2        | less than or equal to 3.9.2    |
| \=3.9.2        | exactly 3.9.2                  |
| 3.9.2 - 3.10.1 | range between 3.9.2 and 3.10.1 |

### Example

```json
"dependencies": {
  "my_dep": "^1.0.0",
  "another_dep": "~2.2.0"
},
```

For more information on semantic versioning syntax, see the [npm semver calculator](https://semver.npmjs.com/).

<img src="https://bytearcher.com/goodies/semantic-versioning-cheatsheet/wheelbarrel-with-tilde-caret-white-bg-w1000.jpg" width="100%" />