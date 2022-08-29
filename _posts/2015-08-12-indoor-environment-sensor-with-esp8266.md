---
id: 931
title: 'Indoor environment sensor with ESP8266'
date: '2015-08-12T18:29:33+01:00'
author: Bugs
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=931'
permalink: /indoor-environment-sensor-with-esp8266/
categories:
    - 'Hacking the space'
    - 'Members Projects'
tags:
    - Electronics
    - ESP8266
    - MQTT
    - 'network of things'
    - NOT
    - sensor
---

![]({{ site.baseurl }}/assets/blog/2015-08-12-indoor-environment-sensor-with-esp8266/Burnell-Bot-Breadboard.jpg)

As part of our hacking the space project, we’re building a network of sensors and effectors in our space. Communicating over WiFi using the MQTT protocol, the idea is to make lots of data about the hackspace easily available for members to use in their projects, and to make it easy for members to add their own data streams to the space’s network of things.

One of these is the [Burnell Bot](https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell), responsible for monitoring motion and light intensity, plus temperature and humidity. These data will end up being used to automate the hackspace’s lights and heating, as well as forming part of our security system. In the meantime, they’re flying over the WiFi in our hackspace ready for members to monitor and use however they want.

At its heart is an ESP8266-12E, sitting on a handy breakout board; you can see its silver enclosure covering most of the board, plus the etched WiFi antenna. This takes input from a [BH1750 light sensor](http://www.instructables.com/id/BH1750-Digital-Light-Sensor/) over I2C, a passive infra-red motion sensor that sends a digital HIGH signal in response to movement, and the DHT22 temperature and humidity sensor. Thanks to the support for ESP8266 in the latest Arduino IDE, the BH1750 and DHT22 are used via their existing Arduino libraries. A couple of warning messages pop up when compiling, but the code runs without issue. The motion sensor, of course, is monitored by simply checking the status of a GPIO pin set to input. Data from each sensor are transmitted over MQTT in their appropriate topics, subject to dampening (e.g. change in light level must exceed a certain threshold before being reported) and throttling of message rates.

Now that our planning permission has gone through (the downside of being hosted in such a great, historic building is dealing with its listed status) and we’ve refurbished our ceilings ready for the wiring grids to be installed, expect to see a few of these appearing in the space and start thinking of things to do with the data!

Personally, I want to add sensors for carbon dioxide, carbon monoxide, nitrous oxide and particulates, to keep an eye on our air quality and to try to get a sense of whether the reported effects of high CO2 / low O2 in classrooms (impaired concentration, amongst other things) affects our hacking.
