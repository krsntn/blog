---
title: Display JSON in HTML
date: 2021-06-13T07:07:31.207Z
description: Quick way to display JSON data in HTML
tags:
  - json
  - html
---
```js
JSON.stringify(value, replacer, space)
```

```jsx
const jsonData = {
  "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Angie",
      "last": "Robertson"
    },
    "location": {
      "street": {
        "number": 69,
        "name": "Park Road"
      },
      "city": "Wolverhampton",
      "state": "Merseyside",
      "country": "United Kingdom",
      "postcode": "JY8N 7JD",
      "coordinates": {
        "latitude": "14.8709",
        "longitude": "144.9791"
      },
      "timezone": {
        "offset": "+6:00",
        "description": "Almaty, Dhaka, Colombo"
      }
    },
}

const render = <pre>{JSON.stringify(jsonData, undefined, 2)}</pre>;
```