---
title: Calculate Total Money Spent on Shopee
date: 2021-10-07T09:03:21.399Z
description: Calculate the total money you spent in Shopee website
tags:
  - javascript
---
1. Login into your Shopee account
2. Open Console Panel
3. Paste the following code and run

```javascript
var total=0,order=0;function calculate(t){
fetch("https://shopee.com.my/api/v4/order/get_order_list?list_type=3&offset="+t,
{method:"GET",headers:{}}).then(function(t){return t.json()})
.then(function(t){let e=t.data.next_offset;if(e>=0){
for(let e of t.data.details_list){
let t=e.info_card.final_total;total+=t,order++;
const{ctime:o,description:a}=e.shipping.tracking_info,l=new Date(1e3*o);
console.log(`${order}: RM ${t/1e5} - ${e.info_card.order_list_cards[0].items[0].name}\n${l.getFullYear()+"/"+(l.getMonth()+1)+"/"+l.getDate()} - ${a}`)}calculate(e)}
else console.log("GRAND TOTAL: RM "+total/1e5)})}
calculate(0);
```