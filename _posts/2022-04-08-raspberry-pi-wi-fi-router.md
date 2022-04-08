---
layout: post
title: Raspberry Pi - Wi-Fi Router
excerpt: Transforming a Raspberry Pi 4 into a WAP for my college dorm.
image: /assets/images/pi-fi-cover-post.jpg
date: 2022-04-08T21:11:09.804Z
tags:
  - raspberry-pi
  - projects
---
# The Idea

The idea was thought up from my college dorm, where I spend numerous hours working on both college and personal projects. A valuable experience to have when programming, especially with web dev, is a quick and reliable internet connection.

This unfortunately was not the case for me at the time. I was achieving speeds below 10Mbps, of which the connection was continuously interrupted. Fortunately, my on-campus accommodation provides me with not one but **two** gigabit ethernet ports. A quick test with my laptop shows me that I in fact have a 1000Mbps connection via ethernet to my room - cool!

Once I had established the wired connection was reliable (which it was), I began to do research in my spare time for a low cost solution to convert the wired connection to a Wireless Access Point.

# Research

Although I had gained some basic networking knowledge from a module on my Computer Science course, I was still throwing myself in the deep-end a little bit.

My first thought was to price cheap Wi-Fi routers online. Turns out they're not cheap, so that was a dead-end.

I eventually stumbled upon an article by **[Network Chuck](https://networkchuck.com/)**, where he showed a working demo of a Raspberry Pi hosting a Wi-Fi network, which was connected via the Pi's ethernet port to the *"internet"*. The demonstration used **[OpenWRT](https://openwrt.org/)**, which in essence is an embedded system built on linux that allows us to route network traffic. It is designed primarily to run on low powered IoT devices, such as the Raspberry Pi. 

Okay - we have a starting point. Where to next?

# The Build

(i'm still working on this - sorry). If you're seeing this message it's because you found my website at eoinparkinson.ie before it's actually ready. Congrats I guess?