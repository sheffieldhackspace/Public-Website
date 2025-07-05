---
title: "Month updates - May & June 2025"
date: '2025-07-02T00:00:00+00:00'
author: alifeee
layout: post
permalink: /month-updates-may-june-2025/
excerpt: "Month updates from May & June 2025 - what's been going on around Sheffield Hackspace?"
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
  min-height: 2rem;
}
iframe, video {
  display: block;
  margin: 0.5rem;
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>

What have members of Sheffield Hackspace been up to this two-months?

Let's find out!

1. [Workshops](#workshops)
2. [Tom](#tom)
   1. [Playing with a cubesat simulator kit](#playing-with-a-cubesat-simulator-kit)
   2. [Making a portable weaving kit](#making-a-portable-weaving-kit)
3. [Rich](#rich)
   1. [Creating a custom 3D Printer Head](#creating-a-custom-3d-printer-head)
4. [Adam](#adam)
   1. [making a 3 band parametric equation prototype](#making-a-3-band-parametric-equation-prototype)
5. [Dave](#dave)
   1. [Making a custom bay-window cabinet-bench](#making-a-custom-bay-window-cabinet-bench)
   2. [Making a DIY door archetrave](#making-a-diy-door-archetrave)
   3. [Custom milled carriage](#custom-milled-carriage)
6. [Nathen](#nathen)
   1. [Making some upgrades to retro games consoles](#making-some-upgrades-to-retro-games-consoles)
7. [Jon](#jon)
   1. [Making a wooden nutcracker](#making-a-wooden-nutcracker)
8. [Nik](#nik)
   1. [Creating a Gaussian Splat of the hackspace](#creating-a-gaussian-splat-of-the-hackspace)
   2. [Messing with Houdini](#messing-with-houdini)
   3. [Controlling servo motors using OSC messages from software](#controlling-servo-motors-using-osc-messages-from-software)
9. [alifeee](#alifeee)
   1. [Attempting logic-level conversion](#attempting-logic-level-conversion)
   2. [A big red button](#a-big-red-button)
   3. [Fixing my hand-fan](#fixing-my-hand-fan)
   4. [Re-connecting a split-flap display](#re-connecting-a-split-flap-display)

## Workshops

This month, I ran a mini MicroPython hackathon, where a bunch of us tried out programming ESP8266 microcontrollers with MicroPython.

I enjoyed the ideas everyone had about what they wanted to use their microcontrollers for, and it made me want to carry on trying to use MicroPython (even though I'm still stuck to C and C++… ;).

<figure class="gallery" markdown="1">
![picture of poster advertising "Micropython Hackathon"]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/workshops_micropython.webp)
</figure>

## Tom

### Playing with a cubesat simulator kit

> I have been sent a cubesat simulator kit.
> 
> I know some bits about the radio side, but nothing really about what it’s capable of
> 
> And now that APRS ends up in MQTT via an SDR
>
>     cubesatsim-aprs-parser-1  | Published to cubesatsim/data: {'callsign': '2E0JJI-11', 'latitude': '53.41777777777777', 'longitude': '-1.5502777777777779', 'battery_voltage': 4.46, 'battery_current': -283.3, 'bme_temperature': 36.69, 'bme_pressure': 992.52, 'bme_altitude': 174.01, 'bme_humidity': 13.8, 'mpu_accel_x': 5.73, 'mpu_accel_y': -1.66, 'mpu_accel_z': 0.3, 'mpu_gyro_x': 0.04, 'mpu_gyro_y': 0.0, 'mpu_gyro_z': 1.04, 'gps_latitude': 0.0, 'gps_longitude': 0.0, 'gps_altitude': 0.0, 'mcu_temperature': 37.5, 'raw_aprs': '2E0JJI-11>APCSS:=5325.04N\\00133.01WShi hi BAT 4.46 -283.3 OK BME280 36.69 992.52 174.01 13.80 MPU6050 5.73 -1.66 0.30 0.04 0.00 1.04 GPS 0.0000 0.0000 0.00 TMP 37.50'}

<figure class="gallery" markdown="1">
![picture of cubesat simulator in box]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/tom_cubesat-sim_1.webp)
![screenshot of messages received from cubesat]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/tom_cubesat-sim_3.webp)
![picture of cubesat simulator next to computer connected to it]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/tom_cubesat-sim_2.webp)
</figure>

### Making a portable weaving kit

> Travelling to London for work, assembled a portable weaving kit.

<figure class="gallery" markdown="1">
![picture of a bag of wool and a weaving frame]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/tom_portable-weaving-kit_1.webp)
</figure>

## Rich

### Creating a custom 3D Printer Head

> Almost a year ago I bought a second hand open source printer called a Voron 2.4.
> 
> I quickly realised it needed some upgrades so I eventually took the plunge and upgraded the tool head to a Stealth Burner (pictured).
> 
> Breaking it down, it comprises a new extruder at the back, hot end mount at the bottom, and face plate that holds the fans.
> 
> It's mostly 3d printed in ABS by myself, other members of the hackspace and a commercial printing company (Xometry).
> 
> And it has three new blinky lights, which is the most important thing.

<figure class="gallery" markdown="1">
![picture of disassembled 3D printer extrusion head]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/richard_printer-head_1.webp)
![picture of custom 3D printer extrusion head]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/richard_printer-head_2.webp)
![picture of assembled custom 3D printer extrusion head]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/richard_printer-head_3.webp)
</figure>

## Adam

…or [dredzik](https://typedef.io/)

### Making a 3 band parametric equation prototype

> My neighbour asked for a parametric eq.
>
> Step 1: setup Rigol as a spectrum analyser  
> Step 2: program DaisyDSP as a waveform generator  
> Step 3: build a simple 3 band graphic EQ from an example to understand the concepts and tweak the params before starting something more advanced  
> Step 3a: find an error in the example schematic and be proud of yourself that you managed to see that something isn't right from the start  

<figure class="gallery" markdown="1">
<video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/adam_parametric-eqs_v1_PREVIEW.webp" style="max-height: 40rem;">
  <source src="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/adam_parametric-eqs_v1.webm" type="video/webm">
</video>
![picture of breadboard with several potentiometers]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/adam_parametric-eqs_1.webp)
![picture of several dials on an enclosure]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/adam_parametric-eqs_2.webp)
![picture of a printed circuit board]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/adam_parametric-eqs_3.webp)
![picture of a printed circuit board inside an enclosure]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/adam_parametric-eqs_4.webp)
![picture of electronic device connected to ribbon cable]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/adam_parametric-eqs_5.webp)
![picture of electronics workbench with various items]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/adam_parametric-eqs_6.webp)
</figure>

## Dave

### Making a custom bay-window cabinet-bench

> My turn at playing with cabinet making of sorts...
>
> no wall parallel.to any other  
> no wall anywhere near true  
> floor not level  
> window almost level  
> walls and floor both curved  
>
> …But despite all that I got there hah
>
> The fixed portion has all been primed (will be painted along with the walls the same colour).
>
> Added in drawers today. These need some fluted MDF front panels added on and then primed & painted.
>
> Now to work out where I get a big cushion for not insane money

<figure class="gallery" markdown="1">
![picture of window bay]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/dave_cabinets_1.webp)
![picture of window bay, with assembled cupboards]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/dave_cabinets_2.webp)
![picture of window bay, with assembled cupboards]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/dave_cabinets_3.webp)
![picture of window bay, with assembled cupboards]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/dave_cabinets_5.webp)
![picture of window bay, with assembled cupboards]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/dave_cabinets_6.webp)
</figure>

### Making a DIY door archetrave

> My DIY enforced dip into woodwork continues with my first door architrave
> 
> Not a fun one as one wall was like 12mm over plastered thicker than the top or other side. So had to trim out plaster, pin 12mm thick pine all round then architrave on top  
> Will fill the gap left with foam, cut back and then fill with filler hah  
> But thankfully that side is against the right hand wall so will never be seen  

<figure class="gallery" markdown="1">
![picture of door archetrave]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/dave_door-archetrave_1.webp)
</figure>

### Custom milled carriage

> Milled a customer x carriage for the next VCore4 build

<figure class="gallery" markdown="1">
<video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/dave_milled-carriage_v1_PREVIEW.webp" style="max-height: 40rem;">
  <source src="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/dave_milled-carriage_v1.webm" type="video/webm">
</video>
![picture of a metal milled item]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/dave_milled-carriage_1.webp)
</figure>

## Nathen

### Making some upgrades to retro games consoles

> here are a few of the things I've been working on:
>
> - New 5v dc psu for a commodore 64, fits inside the original brick and retains the 9v ac transformer.
> - Replacing the 68000 cpu in my Amiga 500 with a raspberry pi 3a, giving the Amiga a 40mhz 68040 CPU, 128mb fast ram and a 256gb HDD
>
> More to come, but the amiga now also has hdmi output, and a floppy drive emulator

<figure class="gallery" markdown="1">
![picture of electronic circuitboard with two large capacitors]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nathen_various-things_1.webp)
![picture of Commodore 64, disassembled]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nathen_various-things_2.webp)
![picture of computer screen, showing some text output]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nathen_various-things_3.webp)
</figure>

## Jon

### Making a wooden nutcracker

> Just made a nutcracker using my new threading kit. Small split in the female thread, so needs more work to replace the body, but a fun project.

<figure class="gallery" markdown="1">
![picture of a wooden nutcracker shaped like a mushroom]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/jon_nutcracker.webp)
</figure>

## Nik

…or [@nnenov@mastodon.social](https://mastodon.social/@nnenov) / [nnnenov.bsky.social](https://bsky.app/profile/nnnenov.bsky.social)

### Creating a Gaussian Splat of the hackspace

> I had a quick go at scanning the hackspace for generating a gaussian splat file, it's not the best quality but still turned out pretty cool, def will be giving it another go

<figure class="gallery" markdown="1">
![picture of Gaussian splat of Sheffield Hackspace]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_gaussian-splat_1.webp)
![picture of Gaussian splat of Sheffield Hackspace]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_gaussian-splat_2.webp)
![picture of Gaussian splat of Sheffield Hackspace]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_gaussian-splat_3.webp)
![picture of Gaussian splat of Sheffield Hackspace]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_gaussian-splat_4.webp)
![picture of Gaussian splat of Sheffield Hackspace]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_gaussian-splat_5.webp)
![picture of Gaussian splat of Sheffield Hackspace, zoomed out]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_gaussian-splat_6.webp)
</figure>

### Messing with Houdini

> I'm messing with grids, procedural layouts using cellular automata and exploring isosurfaces and mesh analysis for making pretty patterns

<figure class="gallery" markdown="1">
![picture of abstract text and colours]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_1.webp)
![picture of abstract shapes and colours]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_2.webp)
![picture of 3D abstract shapes and colours]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_3.webp)
![picture of 3D abstract shapes and colours]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_4.webp)
![picture of abstract shapes and colours on flat plane]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_5.webp)
![picture of abstract text and colours, projected flat]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_9.webp)
<video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_11_PREVIEW.webp" style="max-height: 40rem;">
  <source src="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_11.webm" type="video/webm">
</video>
<video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_8_PREVIEW.webp" style="max-height: 40rem;">
  <source src="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_8.webm" type="video/webm">
</video>
<video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_7_PREVIEW.webp" style="max-height: 40rem;">
  <source src="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_7.webm" type="video/webm">
</video>
<video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_6_PREVIEW.webp" style="max-height: 40rem;">
  <source src="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_houdini-patterns_6.webm" type="video/webm">
</video>
</figure>

### Controlling servo motors using OSC messages from software

> It's my first time trying/learning mqtt and pi pico, I wanted to try and control servo motors using OSC messages which are coming from softwares im more comfortable with like vcv rack / max msp / tooll3
> 
> controlling pi pico W with OSC over wifi with MQTT (vcv rack sends OSC, node-red gets the osc and forwards it as mqtt message, pico W gets the mqtt over wifi and sets motor position)

<video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_vcv-rack-to-physical_1_PREVIEW.webp" style="max-height: 40rem;">
  <source src="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/nik_vcv-rack-to-physical_1.webm" type="video/webm">
</video>

## alifeee

### Attempting logic-level conversion

I spent a while this week trying to "do something I'd already done" by controlling a large transport sign using an ESP8266 D1 Mini instead of an Arduino Uno R3 (because the D1 has WiFi and the Uno does not).

The sign needs 5V logic input, which the Uno happily (and by default) outputs. Unfortunately (for me), the D1 Mini only outputs 3.3V logic, so I needed to shift it up.

I ended up learning about different methods of logic level shifting, and attempting to use several boards. I think I set them up correctly (all grounded/all sanity checked/etc), but my oscilloscope probing only showed the levels being shifted to around 4V, which was corroborated by the sign *responding* to the instructions (as opposed to not responding at all for 3.3V logic), but responding to them as if they were noise.

Some time soon, I'll try and figure out properly how to more robustly convert my SPI signals. Maybe.

<figure class="gallery" markdown="1">
<video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_bus-sign-voltage_13_PREVIEW.webp" style="max-height: 40rem;">
  <source src="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_bus-sign-voltage_13.webm" type="video/webm">
</video>
![picture of small electronic component]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_bus-sign-voltage_2.webp)
![diagram of breadboard with labelled wires and components]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_bus-sign-voltage_1.webp)
![picture of breadboard with wires and components]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_bus-sign-voltage_4.webp)
![picture of breadboard with wires and components]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_bus-sign-voltage_7.webp)
![picture of oscilloscope showing two traces]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_bus-sign-voltage_8.webp)
![picture of oscilloscope showing two traces]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_bus-sign-voltage_9.webp)
</figure>

### A big red button

I got given a big red button by someone who said "I found this and I knew that you would like it".

They were right.

I hope to soon put a microcontroller inside and connect the button pushes to "something".

<figure class="gallery" markdown="1">
![picture of large red button]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_dusty-button_1.webp)
![picture of large red button, taken apart]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_dusty-button_2.webp)
</figure>

### Fixing my hand-fan

In this heat, I find my hand-fan a very versatile tool. My favourite part about it is that it doesn't need batteries.

Due to its… constant use… bits break. This month, a holding rod attaching all the fan-bits together snapped, so I replaced it with a nut-and-bolt from the hackspace spare parts drawer. I glued the bolt with superglue to stop it coming off.

It's been going great since! It's very cooling.

<figure class="gallery" markdown="1">
![picture of hand-fan, showing metal attachment bolt]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_hand-fan_1.webp)
![picture of hand-fan, showing metal attachment nut]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_hand-fan_2.webp)
![picture of hand-fan, spread out]({{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_hand-fan_3.webp)
</figure>

### Re-connecting a split-flap display

A local café to me has had a split-flap display mounted on their wall since I started going there.

Also since I started going, it has been broken.

I convinced them this week to let me have a look if I could fix it. I *was* hoping it would just have a Raspberry Pi or otherwise inside that I could log into and customise, but… in the end it wasn't actually broken in any way, it was just disconnected from the company's API who made it, which was easy enough to reconnect using a login to the café's social medias.

Here it is in action! I love split-flap displays.

<video controls="" preload="none" loop="" crossorigin="anonymous" poster="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_split-flap-display_1_PREVIEW.webp" style="max-height: 40rem;">
  <source src="{{site.baseurl}}/assets/blog/2025-07-02-month-updates-may-june-2025/alifeee_split-flap-display_1.webm" type="video/webm">
</video>

<!-- omit in toc -->
## That's all

That's all for this month! Remember, you can:

- come and visit the space! <https://www.sheffieldhackspace.org.uk/calendar/>
- learn more about on joining on the wiki: <https://wiki.sheffieldhackspace.org.uk/>
- add your own items to next month's month update: <https://github.com/sheffieldhackspace/month-updates>

Until next time :)
