---
title: DNS & VPN
date: 2021-04-22T03:53:25.144Z
description: Simple overview of how DNS & VPN works
tags:
  - networking
  - vpn
  - dns
---
### DNS
<img src="https://i.imgur.com/qHntky3.jpg" style="max-width:100%" />

### VPN
<img src="https://i.imgur.com/ORzIY8P.jpg" style="max-width:100%" />

### DNS Leak
When you connect to a VPN, all your online traffic is supposed to be routed through the VPN network. That includes the DNS queries. They should go through the encrypted tunnel straight to your VPN provider’s DNS servers.

But that’s not always the case. A DNS leak is a security flaw that allows your queries to travel to the default DNS servers, which belong to your internet service provider (ISP).

### DNS Leak Test
Go to the [DNS leak test website](https://www.dnsleaktest.com/) perform a DNS leak test. If at least one of the servers does not belong to your VPN service provider, it’s probably leaking your DNS.
