---
id: 1498
title: 'Sheffield Hackspace install Lorawan gateway'
date: '2018-09-10T20:00:19+01:00'
author: 'Alex Kelly'
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=1498'
permalink: /sheffield-hackspace-install-lorawan-gateway/
categories:
    - LoRaWAN
    - 'Raspberry pi'
tags:
    - diy
    - Electronics
    - lorawan
    - 'Raspberry Pi'
---

Sheffield Hackspace has setup and installed a LoraWAN (The Things Network) gateway. LoraWAN is a new technology that enables small amounts of data to travel large distances with low power and the best bit of it is….its free!! This is being used by universities, corporations and hobbyist a like to transmit data such as air quality, traffic, temperature, gps informational ect. from battery (or wire) powered devices that last up to 10 years and more.

![lorawan gateway](https://i.imgur.com/iVFyg4D.jpg)

Come to the Sheffield Hackspace to learn about this new technology and make use of the gateway to prototype your idea. If you want to make your own gateway and add to the things networks, come and learn how to do that. See if your area has a gateway installed by clicking the link [here.](https://ttnmapper.org/)

For our gateway, we used a Raspberry Pi and RAK 831 to receive multiple frequencies at the same time. For some unknown reason the RAK 831 use to switch off occasionally so we’ve added a on/off relay (as can be seen in the photo) to power recycle it automatically/remotely when when it stops responding to the Raspberry PI. Hopefully we’ll find the root cause.
<!--- path/to this posts images is ![]({{ site.baseurl }}/assets/blog/2018-09-10-sheffield-hackspace-install-lorawan-gateway/ --->