---
title: Timer
date: 2021-05-27T14:15:26.506Z
description: setInterval losing accuracy over time
tags:
  - javascript
  - npm
---
`setInterval` does drift because each iteration will be a few milliseconds late, and that gets passed on to future iterations, so if each iteration is 3ms late (which would be normal) by the 5th, you will be 15 milliseconds behind. I'm not sure 15ms should be noticeable even in a metronome, so you probably have something in your code causing a massive delay.

But even if setInterval's drift is acceptable after 5 iterations, it's not going to be fine after a few minutes, so you shouldn't use it.

## Quick Solution
You should use recursive setTimeout calls instead, and dynamically set the delay each iteration to a number you get from comparing time objects. So if one iteration is 3 milliseconds late, the next iteration is 3 milliseconds earlier.

Each iteration will still be a few milliseconds late, but the delay is tracked and the next iteration will compensate, eliminating drift.

## Exception
Different browsers may behave differently. Chrome browser's `setInterval` does correct the drift between each call.

## Demo
Try uses different browsers to open this link.
[https://codesandbox.io/s/timer-comparison-bce4y?file=/src/App.js](https://codesandbox.io/s/timer-comparison-bce4y?file=/src/App.js)

## NPM package - ez-timer
I published a simple timer package, which solved this kind of issue. 
[https://www.npmjs.com/package/ez-timer](https://www.npmjs.com/package/ez-timer)