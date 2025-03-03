---
title: "Month updates - January & February 2025"
date: '2025-03-03T00:00:00+00:00'
author: alifeee
layout: post
permalink: /month-updates-january-february-2025/
excerpt: "Month updates from January & February 2025 - what's been going on around Sheffield Hackspace?"
---
<style>
.gallery {
  line-height: 0;
  column-count: 2;
  column-gap: 0px;
}
.gallery > * {
  max-width: 100%;
  margin: 0;
}
p:has(img), .gallery {
  margin: 0;
}
.gallery img {
  width: 100% !important;
  height: auto !important;
}
iframe, video {
  display: block;
  margin: 0.5rem;
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>

What have members of Sheffield Hackspace been up to this month?

Let's find out!

1. [Workshops](#workshops)
2. [Louise - 3D printed tape holders](#louise---3d-printed-tape-holders)
3. [Dom \& alifeee - investigating a Sheffield bus sign](#dom--alifeee---investigating-a-sheffield-bus-sign)
4. [James - outdoor temperature sensor](#james---outdoor-temperature-sensor)
5. [Dave - CNC machining](#dave---cnc-machining)
6. [Louise - homemade coffee table](#louise---homemade-coffee-table)
7. [alifeee - playing with info beamer](#alifeee---playing-with-info-beamer)
8. [Alex M - making MQTT less burst-y](#alex-m---making-mqtt-less-burst-y)
9. [Adam - making and fixing fuzz pedals](#adam---making-and-fixing-fuzz-pedals)
10. [Richard - creating a waveform generator](#richard---creating-a-waveform-generator)
11. [alifeee - laser cut raspberry pi case](#alifeee---laser-cut-raspberry-pi-case)
12. [Tom - getting weather satellite data](#tom---getting-weather-satellite-data)

## Workshops

First of all, there have been a couple of workshops happen in 2025: an earring making workshop, and a Discord-Bot making mini-hackathon.

This week, there's a dice casting workshop, and this month, communal bike maintenance.

Look at the events on Discord to keep up to date!

## Louise - 3D printed tape holders

> Another member made and printed one of these for the hackspace a few years ago. Now I've finally got my own printer up and running again, I took the original models he made, modified them slightly for my 25mm conduit and to be able to hang from something, and printed my own version.
> 
> The original is here, at some point I may upload mine as a remix. <https://www.printables.com/model/294926-skadis-usns-tape-hanging-system>

![picture of lots of hung-up rolls of tape]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Louise - tape holders 1.webp)

## Dom &amp; alifeee - investigating a Sheffield bus sign

Dom and I had a little look at the electronics of a bus sign that they got given by Transport for South Yorkshire, in an attempt to control the sign. We had a lot of talk about SPI and I2C while looking at the oscilloscope. Hopefully, we can try again with a logic analyser, and try to control the sign with our own electronics.

Unfortunately, we forgot to take a picture of the front of the sign...

![picture of lots of electronics]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Dom - bus sign 1.webp)
![picture of oscilliscope showing two similar traces]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Dom - bus sign 2.webp)

## James - outdoor temperature sensor

> Progress on my new outdoor temperature sensor for HA... Wemos D1 mini, PCD8544 (Nokia 5110 screen), DS18B20 temperature sensor. LCD on hardware SPI.

![picture of LCD screen showing a temperature reading]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/James - outdoor temperature sensor.webp)

## Dave - CNC machining

Dave from [Desktop Machine Shop](https://www.desktopmachineshop.com/) has been trialling some new clamps for a fixated/future project kit for DMS.

<iframe width="477" height="848" src="https://www.youtube.com/embed/uCRxo-z6Fhk" title="Machining a toe clamp on a Milo v1.5 #cnc #milling #machining" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Louise - homemade coffee table

> I needed a smaller coffee table, so I picked up a nice 60 mm thick slab of beech from Albion Timber in Sheffield. It was just trimmed down with my track saw and hand planed flat then sanded to 240 grit and finished with Rubio mist.
>
> I bought the legs on Etsy as we don’t have the capability to make them at present, and they were so cheap for what they are.
>
> I also made some coasters to match out of a small ash board I had. Just simple squares with a 45 degree chamfer on the base done by hand on the belt sander and finished the same as the table.

<figure class="gallery" markdown="1">
![picture of coffee table with wooden top and metal legs]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Louise - coffee table 2.webp)
![picture of coffee table with wooden top and metal legs]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Louise - coffee table 1.webp)
![picture of coaster with mug on top]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Louise - coffee table 3.webp)
</figure>

## alifeee - playing with info beamer

I've been playing with <https://info-beamer.com/>, which is software you can flash onto a Raspberry Pi which makes creating displays super easy.

I saw it used first at [EMF Camp](https://www.emfcamp.org/), and then recently at [Chaos Computer Congress](https://events.ccc.de/congress/2024/). They showed things like the talk schedule, but also interesting bits like total internet usage, or submitted slides from other attendees advertising events.

I think it could be neat to have a similar "info beamer" in the hackspace, so I've been playing around and seeing how it works. You can display images, videos, streams, webpages, and all sorts! The plugins are written in Lua, which is sweet.

![picture of TV screen, showing some text]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/alifeee - infobeamer 1.webp)

<figure class="gallery" markdown="1">
![picture of TV screen, showing some pictures of posters]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/alifeee - infobeamer 2.webp)
![picture of TV screen, showing some camera feeds]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/alifeee - infobeamer 3.webp)
![picture of TV screen, showing a picture of someone using a lathe]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/alifeee - infobeamer 4.webp)
![picture of TV screen, showing a webpage]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/alifeee - infobeamer 5.webp)
</figure>

## Alex M - making MQTT less burst-y

Alex McLean was exploring controlling motors and lights with MQTT, for the [pattern club winter school](https://patternclub.org/2025/02/18/our-first-winter-school-is-done/).

Adding `set_tcp_nodelay` true to `mosquitto.conf` proved crucial for low-latency control.

<figure class="gallery" markdown="1">
  <video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Alex M - MQTT before.webp" style="max-height: 40rem;">
    <source src="{{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Alex M - MQTT before.webm" type="video/webm">
  </video>
  <video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Alex M - MQTT after.webp" style="max-height: 40rem;">
    <source src="{{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Alex M - MQTT after.webm" type="video/webm">
  </video>
</figure>

## Adam - making and fixing fuzz pedals

> I have been building and exploring a Fuzz Factory pedal (Linux of all fuzzes - most settings don't work and you get an instruction manual with the ones that do). I believe the original is UK made, 3 transistor (NPN Si + 2x PNP Ge) almost every resistor has been replaced with a potentiometer (with extra resistors added in series to ensure minimum values I guess).
>
> Made famous by Matt Bellamy from the band Muse, who apparently likes it so much, it even asked a guitar be made with the thing built in.
>
> I have rebuilt it to fit a hammond enclosure in a portrait mode with jacks on the top. The original (which you can see between the breadboard and the oscilloscope) has a horizontal layout, famous for changing the settings on the fly as you hit the footswitch with your foot.
>
> There is a portrait version available now, but it still has I/O on the sides and not on the top, which is like using tabs instead of spaces - wrong.

<figure class="gallery" markdown="1">
![picture of electronics workbench, with oscilloscope and assorted electronics]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Adam - guitar pedal 1.webp)
![diagram of electronic circuitboard schematic]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Adam - guitar pedal 2.webp)
![diagram of electronic circuitboard schematic]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Adam - guitar pedal 3.webp)
![picture of pink electronic guitar pedal with some knobs]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Adam - guitar pedal 4.webp)
![picture of pink electronic guitar pedal with some knobs]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Adam - guitar pedal 5.webp)
![picture of pink electronic guitar pedal, opened, showing interior electronics]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Adam - guitar pedal 6.webp)
</figure>

## Richard - creating a waveform generator

Richard made...

> A digitally synthesized waveform generator, with sine, square, and triangle waveforms. Sine wave up to 12MHz, 1MHz for the others.

![picture of oscilloscope showing trace from waveform generator]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Richard - waveform generator 1.webp)

## alifeee - laser cut raspberry pi case

I have a Raspberry Pi by my TV. In lieu of a "smart TV", a computer does pretty well at being versatile.

It was a bit exposed, so I figured someone would have designed a laser-cut case for a Pi. This was true, and I found one:

- <https://www.thingiverse.com/thing:3729316>

I made it out of scrap and screws from the space, and I think it looks pretty neat!

<figure class="gallery" markdown="1">
![picture of raspberry pi in plastic case]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/alifeee - raspberry pi case 1.webp)
![picture of raspberry pi in plastic case]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/alifeee - raspberry pi case 2.webp)
</figure>

## Tom - getting weather satellite data

Tom has been capturing images from overhead weather satellites!

![picture of colourful static]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Tom W - weather map 1.webp)

<figure class="gallery" markdown="1">
![a satellite image of the Earth, showing lots of clouds]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Tom W - weather map 2.webp)
![a satellite image of the Earth, showing lots of clouds]({{site.baseurl}}/assets/blog/2025-03-03-month-updates-january-february-2025/Tom W - weather map 3.webp)
</figure>

<!-- omit in toc -->
## That's all

That's all for this month! Remember, you can:

- come and visit the space! <https://www.sheffieldhackspace.org.uk/calendar/>
- add your own items to next month's month update: <https://github.com/sheffieldhackspace/month-updates>

Until next time :)
