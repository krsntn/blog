---
title: How React Uses Closures to Avoid Bugs
date: 2020-11-27T14:47:45.680Z
description: When the world moved from React class components and lifecycle
  methods to React function components and hooks, we left behind a bug that many
  of us didn't even know was plaguing our class-based codebases. This bug was
  sneaky, hard to identify and reproduce, and it would pop up in places due to
  seemingly harmless changes over time. To make matters worse, the situations
  where it pops up are not always bugs, sometimes it's an intended behavior. So
  you can't even lint against it.
url: https://epicreact.dev/how-react-uses-closures-to-avoid-bugs/
tags:
  - react
  - javascript
---
body