---
id: 1520
title: 'A wi-fi and touch controlled NeoPixel ring using the Wemos D1 Mini ESP8266 module.'
date: '2018-12-30T15:18:57+00:00'
author: 'Richard Langner'
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=1520'
permalink: /a-wi-fi-and-touch-controlled-neopixel-ring-using-the-wemos-d1-mini-esp8266-module/
categories:
    - Arduino
    - 'Electronics Articles'
    - 'Members'' Projects'
tags:
    - ESP8266
    - Langner
    - neopixel
---

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2018/12/20181229_case-3a.jpg)</figure>This project describes an easy way to control a strip or ring of WS2812 LEDs via a web page. It was originally based on the Arduino FastLED library.

Although the FastLed library code gives us a great example of how to control NeoPixel rings and strips, it doesn’t provide for user interaction. So it was decided to add the ability to control the device by wi-fi, and also have a touch switch for local control.

**Materials required**  
A Wemos D1 Mini module was used as it consisted of a low-cost ESP8266 wifi chip and antenna, and it can be programmed by the familiar Arduino software. The Wemos module sits in a socket which is soldered to a matrix circuit board. This allows the module to be swapped out if needed, and also makes it easier to connect the touch-switch and neopixel wires.

A touch switch module was chosen rather than a discrete push-switch as it can be hidden behind the acrylic case and should also provide more reliable switching. The 100 x100 x 25mm square case was laser cut from 3mm acrylic, and was designed using the [makercase ](http://www.makercase.com/)on-line designer. This is the quickest software for making simple boxes. An extra 100mm square piece was cut for the front, with two circular cuts to accommodate the neopixel ring so it can lie flush with the front surface. Later, the touch-switch hole was cut so the sensor sits behind only *one* thickness of acrylic.

<div class="wp-block-image"><figure class="aligncenter">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2018/12/20181219_case-1.jpg)<figcaption>Laser cut acrylic case</figcaption></figure></div>The components fitted easily inside the box – it has plenty of room for a battery pack if you wanted to make it totally portable.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2018/12/20181228_neopixel2.jpg)<figcaption>The touch switch sits in a rectangular cut-out.</figcaption></figure><div class="wp-block-image"><figure class="aligncenter">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2018/12/20181219_case-2.jpg)<figcaption> Here is a view before the centre cover is glued on. </figcaption></figure></div>**Software overview.** The project uses websockets so that any web browsers connected can control (and be controlled) by the device. The touch-switch also controls the software and the settings are communicated to all connected browsers via websockets in real time.

User settings are stored in an object, derived from the ‘userDataClass’. This object stores settings for the brightness, colour, active pattern, demo pattern, provides functions for brightness gamma correction, etc.

The touch-switch code decides whether the switch received a tap or long press. A tap changes the pattern and a long press increases/decreases the brightness. Debouncing the switch was achieved by using a 32 bit integer and bit-shifting each switch reading into it. This method has both the advantage of being able to check for a steady switch state, and to discriminate between a short or long press. A future article will explain exactly how this is done.

Here’s a video of it working.

<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="329" loading="lazy" src="https://www.youtube.com/embed/JQu6h-Yck0k?feature=oembed" title="Neopixel ring: Wemos D1-mini uses websockets for multi-user control" width="584"></iframe></div></figure>