---
id: 468
title: 'Trialling Capacitive Sensing'
date: '2014-12-08T13:59:22+00:00'
author: Bugs
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=468'
permalink: /trialling-capacitive-sensing/
categories:
    - 'Members'' Projects'
---

![]({{ site.baseurl }}/assets/blog/2014-12-08-trialling-capacitive-sensing/unnamed.jpg)

A little bit of spare time was found to experiment with capacitive sensing using the library and demo sketch from the Arduino Playground:

<http://playground.arduino.cc/Main/CapacitiveSensor?from=Main.CapSense>  
<http://playground.arduino.cc/Code/CapacitiveSensor>

Quite surprisingly this all works purely on software and the way that the Atmega pins are implemented. There is an explanation as to how it all works in the second link.

I made up three sensor plates as per the photograph with a slit in the card to take a flap of the foil through to the back where I wrapped a wire into it and taped that down securely. These are the wires that feed back to the breadboard in the picture. The front of the sensor plates is selotaped to the card and completely covered so there is no electrical connection that can be made. the plates are completely insulated.

I picked Red, Blue and Green card as this is probably going to end up as a demo project with the colour of an RGB LED set by the position of a persons hand in the sensor cube. A bit like the gesture sensor Gee was demoing at a recent meeting.

For now I was interested in running the sketch as written from the Arduino playground with no modification and seeing how well it worked. I used 10M resistors for the send connections as the pads are about 6 inches across.

All in all I was quite impressed as to how sensitive it was. the lower sensor plate could even pick up my hand approaching it from beneath the desk. Everything worked well straight away. To re-purpose this into a usable device I could probably do to make the sensor pads unidirectional by placing a ground plane behind the card and play around with the code and resistor values some more. As well as eliminate the breadboard capacitance. But over all I was very impressed for an hours work with card, cooking foil, selotape and scissors.

Time for more experimentation.

–Kirbs
<!--- path/to this posts images is ![]({{ site.baseurl }}/assets/blog/2014-12-08-trialling-capacitive-sensing/ --->