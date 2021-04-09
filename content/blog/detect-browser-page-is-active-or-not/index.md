---
title: Detect Browser Page is Active or not
date: 2021-04-09T01:34:48.498Z
description: The way to tell if a browser page or tab is active
tags:
  - javascript
---
### Window *onfocus* and *onblur* Events
While `onfocus` and `onblur` will tell you if the user switches windows, ***it doesn't necessarily mean it's hidden***.

```javascript
// Active
window.addEventListener('focus', function(){
  console.log('focus');
});

 // Inactive
window.addEventListener('blur', function(){
  console.log('blur');
});
```

### Page Visibility API
`document.visibilityState` is a read-only property returns the visibility of the document.

`visibilitychange` is an event that fired at the document when the contents of its tab have become visible or have been hidden.

```javascript
function handleVisibilityChange() {
  switch(document.visibilityState){
    case 'visible':
     console.log('visible');
    break;
    case 'hidden':
     console.log('hidden');
    break;
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
```

View [live example](http://daniemon.com/tech/webapps/page-visibility/) (video with sound).

