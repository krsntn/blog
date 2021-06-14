---
title: JavaScript Sending Notification
date: 2021-06-14T07:25:53.717Z
description: Sending notification in browser
tags:
  - javascript
---
```javascript
if (!('Notification' in window)){
  // browser does not support
  return;
}

if (Notification.permission === 'granted'){
  // Permission already granted
  new Notification('Hello there!');
} else {
  // We have to get permission first
  Notification.requestPermission()
    .then(status => {
      if (status === 'granted') {
        // Show notification now
      }
    })
}
```