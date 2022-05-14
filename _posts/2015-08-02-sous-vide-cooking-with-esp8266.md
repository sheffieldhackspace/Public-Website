---
id: 915
title: 'Sous Vide cooking with ESP8266'
date: '2015-08-02T18:49:29+01:00'
author: Bugs
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=915'
permalink: /sous-vide-cooking-with-esp8266/
categories:
    - 'Members'' Projects'
tags:
    - ESP8266
    - food-hacking
    - MQTT
    - sous-vide
    - WiFi
---

[![sousvide controller breadboard](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/sousvide-controller-breadboard-1024x904.jpg)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/sousvide-controller-breadboard.jpg)

We have a couple of members interested in the geeky side of cookery, and our [experimental foods day](https://www.sheffieldhackspace.org.uk/wordpress/2015/05/experimental-foods-day/) a little while ago was a great success.

Along these lines, I wanted to try [sous vide cooking](https://en.wikipedia.org/wiki/Sous-vide), a style of cooking in which foods are held at an accurately regulated temperature in order to favour some cooking reactions over others. It’s most commonly used when cooking meats, resulting in amazingly tender, juicy meat even from the toughest cuts. People with an interest in food chemistry — as a biologist by training, I’m definitely one of them — can also have a fascinating time experimenting with the cooking of, for example, [the humble egg](http://www.seriouseats.com/2013/10/sous-vide-101-all-about-eggs.html).

This project was to turn my slow cooker into a sous vide water bath. Along with several other SHH&amp;M members, I’ve been playing with the ESP8266 microcontroller: a great little chip with easy WiFi connectivity, a decent number of GPIO pins and, fairly recently, support in the Arduino IDE, making it very easily accessible to anyone with some passing familiarity with using Arduino. As part of our [hackspace renovation project](https://www.sheffieldhackspace.org.uk/wordpress/category/hacking-the-space/) we’re setting up a system of sensors and effectors that communicate using the excellent MQTT messaging protocol; there’s a great [Arduino libraries for MQTT](http://knolleary.net/arduino-client-for-mqtt/), so getting my sous vide controller to report its heating activity and my food’s temperature over WiFi was simple.

On the breadboard, you can see a ESP8266-12E with a silvery enclosure and the etched WiFi antenna. It takes input from a waterproof DS18B20 temperature probe using the standard Arduino library, which works perfectly with the ESP despite some warnings thrown up by the compiler. The ESP gets its power from a switch-mode (“bucky”) voltage regulator set to 3.3v; a second voltage regulator next to it provides 5v to the 240v AC relay. Both are fed from a 12v, 1A wall wart, not shown here. The relay, isolated from touch and moisture in its lunchbox housing, controls the power running through a short extension lead and happily accepts the 3.3v control signal from one of the ESP’s GPIO pins. The cluster of unused wires in the top right of the breadboard are in place to connect with my USB-&gt;serial board, in case I need to reflash firmware or debug over serial.

In use, the slow cooker is turned to “high” and plugged into the modified extension lead. The ESP8266 monitors the temperature in the slow cooker via the waterproof temperature probe and, by switching the relay, controls the heating. The logic is managed by a popular [Arduino PID library](http://playground.arduino.cc/Code/PIDLibrary), based heavily on their example code for relay-controlled systems.

<div class="wp-caption alignleft" id="attachment_918" style="width: 310px">[![Temperature data from about 20 hours of sous vide cooking](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/sousvide-20h-temp-cropped-300x154.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/sousvide-20h-temp-cropped.png)Temperature data from about 20 hours of sous vide cooking

</div><div class="wp-caption alignright" id="attachment_917" style="width: 310px">[![PID algorithm output -- in each 10 second chunk of time, for how many seconds the heating element was receiving power, over about 20 hours of sous vide cooking](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/sousvide-20h-output-cropped-300x154.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/sousvide-20h-output-cropped.png)PID algorithm output — in each 10 second chunk of time, for how many seconds the heating element was receiving power, over about 20 hours of sous vide cooking

</div>Data from the sous vide controller is reported over WiFi via MQTT, meaning that I could keep an eye on the two critical parameters (current temperature and how hard it was working to increase the temperature) using my laptop, phone, or, in principle, other ESP or Arduino devices connected to my flat’s WiFi. The excellent [MQTT Spy](http://kamilfb.github.io/mqtt-spy/) even generates handy graphs from your incoming data in real time, bringing the food geekery to new heights. In future, also sending the data to something like [data.sparkfun](https://data.sparkfun.com/), to easily monitor and graph data when I’m out of the flat, should be straightforward.

The most important part of the post: **The resulting food is amazing!** So far I’ve only used it for meat, although there are plenty of interesting things like eggs and custards that I’m keen to try. Traditionally tough cuts of meat — shoulder of lamb, beef brisket — come out rare, tender, and juicy, with their distinctive flavours intact. More tender cuts, like sirloin steak, are done to perfection every time and, really, have to be tried to be believed. This was a quick and hacky project, but the results are fantastic. Definitely a success, and well worth making yourself.

The PID algorithm needs tweaking to improve temperature regulation to within a degree or two (easy but time consuming, and in the current warm weather I’m trying to avoid having a bath of hot water sitting in my well-insulated flat for hours on end), it needs to go in a case, and it needs a better control mechanism than re-flashing the firmware to change the target temperature. Getting the ESP to host a simple web page displaying controls — or even to just accept commands over MQTT — should be simple enough.

If you’re interested in learning to make this sort of project — or already know how, and want to meet up or work with others who do — come along to SHH&amp;M! [Get in touch with us here](https://www.sheffieldhackspace.org.uk/wordpress/contact-us/), or look at our [calendar](https://www.sheffieldhackspace.org.uk/wordpress/calendar/) and just turn up to one of our scheduled meetings and introduce yourself.