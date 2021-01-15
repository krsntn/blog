---
title: Difference Among "noreferrer", "noopener" and "nofollow"
date: 2020-03-14T16:00:00.000Z
description: Explain the difference between noreferrer, noopener, and nofollow
tags:
  - html
---
There are three fundamental values of the rel attribute of the anchor tag. <br />
They are noreferrer, noopener, and nofollow.

- **rel="noopener"** you use on all links opening in new tabs using the target _blank. There are security implications if you don’t use the noopener value on your links opening in new tabs. A malicious attacker can use the window.opener object to change the content and location of the originating page.

- **rel="noreferrer"** can serve a similar purpose as the noopener, especially in the older browsers. Hence, it makes sense to use them both. Additionally, noreferrer can affect your analytics and report traffic as direct instead of referral.

- **rel="nofollow"** will inform search engines not to pass the link juice to the linked page, and it will not pass PageRank. You can consider it as a value which is used when you want to link to some another page but without “endorsing” it. It is the only rel value on this list with a tangible effect on SEO efforts.

```html
<a href="https://google.com" target="_blank" rel="noopener noreferrer nofollow">Link</a>
```
