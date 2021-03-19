---
title: Show/Hide Password
date: 2021-03-19T05:36:47.840Z
description: Toggle the visibility of the password field using javascript
tags:
  - html
  - javascript
---
Toggle the visibility of the password field using `javascript`

```html
<input type='password' id='password-input' />
<button id='toggle-password'>Toggle PW</button>
```

```javascript
const passwordInput = document.querySelector('#password-input');
const button = document.querySelector('#toggle-password');

button.addEventListener('click', () => {
  passwordInput.type =
    passwordInput.type === 'password'
      ? 'text'
      : 'password';
})
```