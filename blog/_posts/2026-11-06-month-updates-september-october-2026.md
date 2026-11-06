---
title: "Month updates - September & October 2026"
date: "2026-11-06T00:00:00+00:00"
author: alifeee
layout: post
permalink: /month-updates-september-october-2026/
excerpt: "What have members of Sheffield Hackspace been up to this two-months?<br> ![](/assets/blog/2026-11-06-month-updates-september-october-2026/alan_su3a_1.webp)"
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
p {
  margin-top: 1rem;
}
</style>

What have members of Sheffield Hackspace been up to this two-months?

Let's find out what some members have been up to!

1. [Alan - CAD course for SU3A members](#alan---cad-course-for-su3a-members)
2. [Tom - LED panels](#tom---led-panels)
3. [alifeee - tidying and lighting up the electronics workbench](#alifeee---tidying-and-lighting-up-the-electronics-workbench)
4. [Robin - craft room table](#robin---craft-room-table)
5. [Adam - retrofitting an old radio](#adam---retrofitting-an-old-radio)
6. [alifeee - drawer inserts for effective storing of thread](#alifeee---drawer-inserts-for-effective-storing-of-thread)
7. [Primm - custom twinkly LED board](#primm---custom-twinkly-led-board)
8. [Ellie - making a creepy animatronic doll](#ellie---making-a-creepy-animatronic-doll)
9. [alifeee - more environment sensing](#alifeee---more-environment-sensing)
10. [Tom - telescope pictures](#tom---telescope-pictures)
11. [Toby and Dexter - building a portal gun](#toby-and-dexter---building-a-portal-gun)
12. [alifeee and Adam - trying out LED signs](#alifeee-and-adam---trying-out-led-signs)
13. [Rob - making a pulley with the CNC mill](#rob---making-a-pulley-with-the-cnc-mill)
14. [Robin - improving bench vice](#robin---improving-bench-vice)
15. [Alan - leather belt holster](#alan---leather-belt-holster)
16. [alifeee - collaging pictures](#alifeee---collaging-pictures)
17. [alifeee - talking PS/2 with an ESP](#alifeee---talking-ps2-with-an-esp)

## Alan - CAD course for SU3A members

The beginners CAD for Sheffield University of the third age (SU3A) completed the short course of talks and was a successful series events.

![picture of several people sat around a table after a presentation](/assets/blog/2026-11-06-month-updates-september-october-2026/alan_su3a_1.webp)

## Tom - LED panels

> Tripped over a bunch of LED panels I bought ages ago, have a demonstration to give this weekend. Built an LED wall.
>
> Featuring the degrading state of my workbench as I panic build during the day.

<figure class="gallery" markdown="1">
![picture of the back of a large set of LED panels](/assets/blog/2026-11-06-month-updates-september-october-2026/tom_leds_1.webp)
![picture of the front of a large set of LED panels](/assets/blog/2026-11-06-month-updates-september-october-2026/tom_leds_2.webp)
![zoomed picture of the front of a large set of LED panels](/assets/blog/2026-11-06-month-updates-september-october-2026/tom_leds_3.webp)
![picture of the back of a large set of LED panels, with lots of electronics attached](/assets/blog/2026-11-06-month-updates-september-october-2026/tom_leds_4.webp)
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-11-06-month-updates-september-october-2026/tom_leds_v1_PREVIEW.webp" style="max-height: 40rem;"><source src="/assets/blog/2026-11-06-month-updates-september-october-2026/tom_leds_v1.webm" type="video/webm"></video>
</figure>

## alifeee - tidying and lighting up the electronics workbench

Dark. Light. Tidy! The wonder that LED strips can affect.

<figure class="gallery" markdown="1">
![picture of electronics workbench, dark](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_electronics_1.webp)
![picture of electronics workbench, lit up by LEDs](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_electronics_2.webp)
![picture of electronics workbench, tidy](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_electronics_3.webp)
</figure>

## Robin - craft room table

> I have finally gotten around to finishing the table for the textiles room. As per usual, there are lots of instances of "measure once, cut twice", which I will slowly correct over the coming weeks.
> 
> For now, it's fine to use and should hopefully be a bit better than the previous table.

<figure class="gallery" markdown="1">
![picture of a table being assembled](/assets/blog/2026-11-06-month-updates-september-october-2026/robin_table_1.webp)
![picture of a large wooden table](/assets/blog/2026-11-06-month-updates-september-october-2026/robin_table_2.webp)
</figure>

## Adam - retrofitting an old radio

> Today I learned how to measure the capacitance of the tuning capacitor used in the old radios for... well... tuning. Given the stability of the readings, I cannot use it for switching between radio stations. There are sometimes a 130+ stations being detected by the DAB shield, and maybe ~25 stable discrete values of the tuner knob.
> 
> I will therefore use the tuner knob to switch between ensembles (groups of radios in DAB systems) - there are usually around 5-6 detected. I will use an extra rotary encoder where a "fine tuning" knob was before, to switch between the stations in the ensemble. And finally I will use a standard analog pot for volume.
> 
> Next steps:
> - Need to adjust the code to work with the above design choices
> - Get a rotary encoder and a potentiometer with longer shafts
> - Get breakout boards for the above
> - Install the controls in the chassis

> I designed and 3D printed a mount for the new aerial.

> Nice breakout board you have there. It would be a real shame if someone would try to actually use it in a project. 
> 
> It's really great that we want to have shiny and symmetrical designs for general purpose breakout boards, but it is not desirable all the time. 
> 
> Last problem with the radio has now been solved ❤️

> By a weirdest coincidence the 2 mount points inside the case that were exactly where I needed them fit arduino uno like a glove.

> 4 momentary switches for favourite stations, 1 latching switch for on/off. I think I have sorted out everything I needed hardware-wise. Now just some extra coding and we should be done.

> Radio conversion full update:
> - the original electronics have been gutted, leaving only the tuning capacitor mechanism intact
> - the original speaker has been rewired and reused with the new circuit
> - DAB aerial has been installed using designed 3d printed mount
> - Adafruit USB-C PD breakout board is used for for charging, installed using designed 3d printed mount
> - Ferrite core is installed between the breakout and Arduino, to reduce interference from USB-C chargers being garbage
> - Arduino Uno R4 WiFi has been installed in place by drilling into the inside chassis and melting in M3 inserts
> - DAB Shield has been used for the radio functionality
> - Adafruit Rotary Encoder breakout boards have been cut down or otherwise modified to fit the space and provide volume and station control
> - Long press (> 3s) of the station encoder will trigger station scan
> - Press of the volume encoder will toggle mute
> - Adafruit Quad Rotary Encoder breakout board has been used to provide indicator lights and buttons
> - 4 momentary switches have been used as favourite buttons and have been wired to the quad rotary encoder board where encoder buttons would normally be
> - Short press on the favourite switch will recall saved radio station
> - Long press on the favourite switch will save current station to the pressed button
> - A latching switch has been wired to the PD board to provide On/Off button
> - Buttons have been installed using designed 3d printed mount in the original location
> 
> Improvement ideas:
> - add a display
> - add a battery
> - make indicator light animations based on the state changes
> - reuse the tuning capacitor for tuning
> - add a headphone out
> - add a programming port in the back
> - connect to homeassistant?

<figure class="gallery" markdown="1">
![picture of old radio internals](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_1.webp)
![picture of old radio internals](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_2.webp)
![picture of old radio internals and electronics](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_3.webp)
![picture of old radio internals and electronics](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_4.webp)
![picture of computer screen displaying volume command](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_5.webp)
![picture of old radio](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_6.webp)
![picture of old radio internals and electronics](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_7.webp)
![picture of computer screen showing frequency and capacitance measurements](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_8.webp)
![picture of old radio with antenna and 3d printed part](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_9.webp)
![picture of old radio with antenna and 3d printed part](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_10.webp)
![picture of potentiometer on a couple of PCBs](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_11.webp)
![picture of potentiometer on a couple of PCBs](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_12.webp)
![picture of potentiometer on a couple of PCBs, inside a radio](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_13.webp)
![picture of old radio internals and electronics](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_14.webp)
![picture of old radio](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_15.webp)
![picture of buttons connected to wires](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_16.webp)
![picture of old radio internals and electronics](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_17.webp)
![picture of old radio](/assets/blog/2026-11-06-month-updates-september-october-2026/adam_radio_18.webp)
</figure>

## alifeee - drawer inserts for effective storing of thread

We have a lot of thread, mainly from the embroidery machine. I laser cut these drawer inserts (custom sized, made with <https://boxes.hackerspace-bamberg.de/>).
It's very satisfying, in the end.

<figure class="gallery" markdown="1">
![picture of a set of wooden drawers](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_threads_1.webp)
![picture of a laser cutter cutting drawer separators](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_threads_2.webp)
![picture of drawer separators being assembled into a grid](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_threads_3.webp)
![picture of drawer separators assembled into a grid](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_threads_4.webp)
![picture of a drawer with drawer separators, each filled with some thread](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_threads_5.webp)
![picture of a drawer unit with drawers and drawer separators, each drawer filled with some thread](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_threads_6.webp)
![picture of a drawer unit, closed, with coloured labels for each drawer](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_threads_7.webp)
</figure>

## Primm - custom twinkly LED board

> I know I've been quite busy, but I finally finished a project! It's mostly some PCB art, but it doubles as a fidget toy with twinkly LEDs and clicky buttons. It was an anniversary present.
>
> Write-up and photos here: <https://primmr.dev/projects/radial-pcb/>

<figure class="gallery" markdown="1">
![picture of an artistic PCB](/assets/blog/2026-11-06-month-updates-september-october-2026/primm_leds_1.webp)
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-11-06-month-updates-september-october-2026/primm_leds_v1_PREVIEW.webp" style="max-height: 40rem;"><source src="/assets/blog/2026-11-06-month-updates-september-october-2026/primm_leds_v1.webm" type="video/webm"></video>
</figure>

## Ellie - making a creepy animatronic doll

> For those of you who haven't seen by now, I spent the majority of September hacking a doll into an animatronic imitation of the girl from The Exorcist, for a play called The Turning at Bly Manor! 
> 
> It was an amazing experience and it's taught me a lot. I'm also really proud of the result! Thank you to everyone who helped me out on this, and everyone who gave up their time and resources to help me get it done in time. ❤️
> 
> Resources used: 
> - 1 x creepy doll
> - 2 x ESP32-S3 modules
> - 2 x 2.4GHz rod antennae
> - 1 x momentary pushbutton
> - 1 x stepper motor + driver board
> - 2 x custom 3D printed cases
> - Pretty much all of my brain cells

<figure class="gallery" markdown="1">
![picture of a doll](/assets/blog/2026-11-06-month-updates-september-october-2026/ellie_doll_1.webp)
![picture of a computer screen with firmware](/assets/blog/2026-11-06-month-updates-september-october-2026/ellie_doll_2.webp)
![picture of electronics connections](/assets/blog/2026-11-06-month-updates-september-october-2026/ellie_doll_3.webp)
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-11-06-month-updates-september-october-2026/ellie_doll_v1_PREVIEW.webp" style="max-height: 40rem;"><source src="/assets/blog/2026-11-06-month-updates-september-october-2026/ellie_doll_v1.webm" type="video/webm"></video>
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-11-06-month-updates-september-october-2026/ellie_doll_v2_PREVIEW.webp" style="max-height: 40rem;"><source src="/assets/blog/2026-11-06-month-updates-september-october-2026/ellie_doll_v2.webm" type="video/webm"></video>
</figure>

## alifeee - more environment sensing

assembled a board for some more environment sensing, as well as making labels for all the existing sensors in the space.

<figure class="gallery" markdown="1">
![picture of a breadboard with jumper cables](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_scd40_1.webp)
![picture of a breadboard with jumper cables and an SCD40 module](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_scd40_2.webp)
![picture of a breadboard with jumper cables and an SCD40 module and an ESP8266 D1 mini](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_scd40_3.webp)
![picture of several environmental sensors, each labelled with what it is](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_sensors_1.webp)
</figure>

## Tom - telescope pictures

> Got a decent result out of the 3d printed telescope last night. Western Veil, 5 hours of data.

![picture of a galaxy or other astronomical thing](/assets/blog/2026-11-06-month-updates-september-october-2026/tom_telescope_1.webp)

## Toby and Dexter - building a portal gun
 
> When it comes to Halloween outfits, my son Dexter has always been happy to use whatever we have around the house to make his. Until this year, when he announced that he wanted to look like a player character in the video game series Portal, complete with a full-sized replica of the iconic portal gun.
> 
> A couple of slight problems here:
> 1. The portal gun would need to be 3D printed, but I’d never touched 3D printing before in my life
> 2. It was already mid-October
> 
> Fortunately, I had just joined Sheffield Hackspace!
> 
> I am now thoroughly indebted to the longstanding Hackspace members who not only showed us how to get started with the 3D printers, but also helped out by printing some of the parts themselves so we could get them done in time.
> 
> The assembly was not without its challenges, and almost all of it was new territory to me. And then there was the outfit. The orange boiler suit was easy enough to get, but putting the Aperture Labs logos on it nearly had me pulling my hair out. The iron-on transfer printer paper was surprisingly fiddly to get right.
> 
> It was tight, but somehow or other (and with more than a bit of shouting and swearing from me), by 6pm on Halloween we were good to go! You can see the results in the pictures (Dexter has given his consent for these to be published).
> 
> Of course this isn’t the end of the project. Due to the tight timescales, we only did the physical assembly of the gun, and even then we cut a few corners. Phase Two will involve taking it all apart again and adding in the electronics. But not until I’ve recovered from Phase One…
> 
> For reference, here’s the project page we used for the portal gun build: <https://www.thingiverse.com/thing:6191828>

<figure class="gallery" markdown="1">
![picture of a segment of a portal gun](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_1.webp)
![picture of a segment of a portal gun](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_2.webp)
![picture of a segment of a portal gun](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_3.webp)
![picture of a segment of a portal gun](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_4.webp)
![picture of several segments of a portal gun](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_5.webp)
![picture of several segments of a portal gun](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_6.webp)
![picture of a person holding a portal gun and dressed in orange](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_7.webp)
![picture of a person holding a portal gun and dressed in orange](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_8.webp)
![picture of a person holding a portal gun and dressed in orange](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_9.webp)
![picture of a person holding a portal gun and dressed in orange](/assets/blog/2026-11-06-month-updates-september-october-2026/tobyndexter_portalgun_10.webp)
</figure>

## alifeee and Adam - trying out LED signs

Seeing what it would look like if we had a sign in the door. It looks better in person…

<figure class="gallery" markdown="1">
![picture of a door with an orange LED sign showing through the top window of it](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_door_1.webp)
![picture of a door with an orange LED sign showing through the top window of it](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_door_2.webp)
</figure>

## Rob - making a pulley with the CNC mill

> Thought I'd throw these up here to show what our Milo CNC can do. This is a HTD 5M pulley, machined out of a billet of 6082 aluminium. This little machine keeps surprising me!

<figure class="gallery" markdown="1">
![picture of a milled metal gear](/assets/blog/2026-11-06-month-updates-september-october-2026/rob_pulley_1.webp)
![picture of a milled metal gear](/assets/blog/2026-11-06-month-updates-september-october-2026/rob_pulley_2.webp)
![picture of a milled metal gear](/assets/blog/2026-11-06-month-updates-september-october-2026/rob_pulley_3.webp)
![picture of a milled metal gear and a corresponding belt](/assets/blog/2026-11-06-month-updates-september-october-2026/rob_pulley_4.webp)
</figure>

## Robin - improving bench vice

> I have made some alterations to one of the bench vices in the wood shop - the clamping surfaces have been flattened, and a leather surface applied to give better clamping consistency and hopefully less tipping!
> 
> Also, I have added two bench dogs to allow for easier clamping of thin pieces 🪚

<figure class="gallery" markdown="1">
![picture of a vice](/assets/blog/2026-11-06-month-updates-september-october-2026/robin_vice_1.webp)
![picture of a vice, close up](/assets/blog/2026-11-06-month-updates-september-october-2026/robin_vice_2.webp)
![picture of a vice, close up](/assets/blog/2026-11-06-month-updates-september-october-2026/robin_vice_3.webp)
![picture of a vice with wood in it](/assets/blog/2026-11-06-month-updates-september-october-2026/robin_vice_4.webp)
![picture of a vice with wood in it](/assets/blog/2026-11-06-month-updates-september-october-2026/robin_vice_5.webp)
</figure>

## Alan - leather belt holster

> I [previously made a leather holder](https://www.sheffieldhackspace.org.uk/month-updates-may-june-2026/#alan---calliper-holder) for my calipers. This time I made a soft leather belt holster.
> 
> Images: cardboard template; fabric proof of concept; finished holster; various images of holsters in use.

<figure class="gallery" markdown="1">
![picture of leather calliper holder attached to belt with leather holster](/assets/blog/2026-11-06-month-updates-september-october-2026/alan_callipers_1.webp)
![picture of leather holster](/assets/blog/2026-11-06-month-updates-september-october-2026/alan_callipers_2.webp)
![picture of fabric holster](/assets/blog/2026-11-06-month-updates-september-october-2026/alan_callipers_3.webp)
![picture of cardboard holster template](/assets/blog/2026-11-06-month-updates-september-october-2026/alan_callipers_4.webp)
![picture of leather calliper holder](/assets/blog/2026-11-06-month-updates-september-october-2026/alan_callipers_5.webp)
![picture of leather calliper holder next to fabric test holster](/assets/blog/2026-11-06-month-updates-september-october-2026/alan_callipers_6.webp)
![picture of leather calliper holder inside test fabric belt holster](/assets/blog/2026-11-06-month-updates-september-october-2026/alan_callipers_7.webp)
</figure>

## alifeee - collaging pictures

For some reason, I took a few pictures (9) and then digitally edited them together, to create a "broken" effect. It's ok.

<figure class="gallery" markdown="1">
![picture of a bridge but 9 segments of the picture are slightly out of alignment with each other](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_collage_1.webp)
![picture of a building but 9 segments of the picture are slightly out of alignment with each other](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_collage_2.webp)
![picture of a building but 9 segments of the picture are slightly out of alignment with each other](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_collage_3.webp)
</figure>

## alifeee - talking PS/2 with an ESP

I've been trying to use a keyboard with a microcontroller. It turns out that the PS/2 protocol is quite simple to understand, so people
have written many libraries for microcontrollers to read it. Now, I can plug a keyboard into an ESP8266! Hopefully, I plug a display into it,
and have a custom typing thingie… watch this space

<figure class="gallery" markdown="1">
![picture of PS/2 keyboard socket](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_ps2_1.webp)
![picture of PS/2 keyboard](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_ps2_2.webp)
![picture of PS/2 keyboard socket with electronics attached](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_ps2_3.webp)
![picture of oscilloscope showing some communication protocol](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_ps2_4.webp)
![picture of oscilloscope showing some communication protocol](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_ps2_5.webp)
![picture of PS/2 keyboard plugged into a laptop](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_ps2_6.webp)
![picture of PS/2 keyboard, electronics, and a large dot matrix LED display](/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_ps2_7.webp)
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_ps2_v1_PREVIEW.webp" style="max-height: 40rem;"><source src="/assets/blog/2026-11-06-month-updates-september-october-2026/alifeee_ps2_v1.webm" type="video/webm"></video>
</figure>

<!-- omit in toc -->
## That's all

That's all for this month! Remember, you can:

- come and visit the space! <https://www.sheffieldhackspace.org.uk/>
- learn more about on joining on the wiki: <https://wiki.sheffieldhackspace.org.uk/>
- add your own items to next month's month update: <https://github.com/sheffieldhackspace/month-updates>

Until next time :)
