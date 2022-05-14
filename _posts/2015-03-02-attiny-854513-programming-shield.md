---
id: 648
title: 'ATtiny 85/45/13 Programming Shield'
date: '2015-03-02T13:07:31+00:00'
author: Bugs
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=648'
permalink: /attiny-854513-programming-shield/
categories:
    - 'Members'' Projects'
tags:
    - Arduino
    - ATTiny
    - Electronics
    - Programmer
---

#### Author: [James Muirhead](http://www.twitter.com/phantomfreak)

[![ATTiny Programmer photo](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/03/Photo-edited.jpg)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/03/Photo-edited.jpg)

This is a modified version of the programmer described on the [High Low Tech Group’s](http://highlowtech.org/?p=1706) page. I have however added a few customisations…

- Reset buttons for both the ATtiny and the host Arduino,
- Headers in paralel with the IC,
- Rails for 5V, 3.3V &amp; ground,
- A mini breadboard.

This shield simplifies the development of ATtiny (13/25/45/85) projects giving you direct access to the ATtiny as if it were an Arduino Uno with the added convenience of an attached Breadboad with rails.

For the techincally minded, you will find I’ve included a circuit diagram &amp; a photo of the finished product. NB: The Arduino’s crystal is not attached as this is for reference only and the host Arduino will have one.

[![ATTiny Programming Shield v2_schem (fixed cap) edited](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/03/ATTiny-Programming-Shield-v2_schem-fixed-cap-edited.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/03/ATTiny-Programming-Shield-v2_schem-fixed-cap-edited.png)

### Further expansion

- I would be interested in designing a custom PCB (printed circuit board) for any future builds. This would reduce the amount of manual wiring of components. Preferably with a nice screen printed front with pin numbers.
- It would also be really nice to have a ZIF (Zero Insertion Force) connector for the ATtiny, but they don’t make them in an 8 pin varient.

### Links

- [arduino-tiny](http://code.google.com/p/arduino-tiny/) – Arduino Hardware Libraries for ATtiny 85/45/25/84/44/24/2313/4313. Available for both Arduino IDE 1.0 and 1.5 beta.
- [High-Low Tech Group](http://highlowtech.org/?p=1706) – Great for background reading, but most info now obsolete. High Low Tech’s Hardware files for the IDE do not work on Arduino IDE 1.5 beta.
- [Arduino libs on ATtiny13](http://accrochages.drone.ws/en/node/38) – A Library for using the ATtiny13.
- [Shrinkify your Arduino Projects](http://www.youtube.com/watch?v=30rPt802n1k) – YouTube video guide by [Matt Richardson](http://twitter.com/mattrichardson) at [Make Magazine](http://makezine.com/).