---
id: 1009
title: 'Inertial Logger Prototype'
date: '2015-12-08T12:51:39+00:00'
author: SHHAdmin
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=1009'
permalink: /inertial-logger-prototype-2/
categories:
    - 'Members'' Projects'
tags:
    - 10DOF
    - Arduino
    - Electronics
    - Inertial
    - Navigation
    - sensor
    - Teensy
---

<div class="wp-caption alignleft" id="attachment_1010" style="width: 310px">[![Prototype Inertial Logger](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/12/InLog-300x188.jpg)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/12/InLog.jpg)Prototype Inertial Logger

</div>The prototype hardware for my inertial logging project is built. Lovely you say, looks nice, fits in a small tin, and just like everyone else, you immediately follow it with “What does it do ??”.

This project follows on from a bunch of discussions in the SHHMakers mailing list. Basically the idea is that you can record or log a track that the tin has followed using only sensing of the movement of the tin. The movement of the tin is the inertia bit. Everything has inertia and sensors that can measure that can also infer how much and by how far something has moved. Inertial guidance works on the same principles and is used for quad-copter pilot electronics etc. This is the point at which, like everyone else, you interject “I just use my phones GPS”. But what about those instances where there is no GPS signal. Try Caving, UrbEx, SCUBA Diving, or just simply finding your car in a multi-story, when you have forgotten where you parked it. Maybe you want to know where the tube system really is under the map of a city rather than the schematic map most underground systems give you. These examples are where inertial navigation and logging have a part to play.

“OK” you say “I understand now. how do you do it ?”. If you put on a blindfold and someone manoeuvres you along a track you can, if you concentrate remember it, this is the logging bit. Each time you are turned this way or that you can feel being turned, this is what a gyroscope measures, rate of turning. If you are moved quickly or slowly you can feel that too, this is what an accelerometer measures, rate of acceleration. If you are in a lift as well as feeling the acceleration, you can feel the pressure on your eardrums change as you go up or down, this is what a pressure sensor measures. You can feel if you are outside or inside by temperature changes, this is what a thermometer measures. People who are blind are more sensitive to these things than the sighted, purely as they use these clues to navigate in a world they cannot see. They also count steps. I don’t think this project will be sensitive enough to count steps but maybe it will. It certainly can measure the passage of time against acceleration/rotation and therefore infer distance.

<div class="wp-caption alignright" id="attachment_1011" style="width: 310px">[![Zoom in to see the contents of the tin](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/12/InLogTin-300x198.jpg)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/12/InLogTin.jpg)Zoom in to see the contents of the tin

</div>“So what’s in the tin?”. You are bored with explanations now and want to know about the techy bit. If we zoom in to the tin, we can see a 10 DOF inertial navigation board (GY-87) top left. Under that on the left is a micro SD card. In the middle is a Teensy 3.1 micro-controller. At the right top there is an Adafruit Power Boost 5oo Charger. To the bottom right is the coin cell battery backup for the Teensy’s RTC (real time clock). Underneath the board is a 2.5Ah LiPo. The power boost, LiPo and teensy were bought in from our local supplier Pimoroni. The 10 DOF (degrees of freedom, or number of things it measures) board came directly from china via AliExpress. The power supplying arrangements are a compromise that niggles somewhat. Whilst the LiPo has plenty of power, all the other components actually run at 3v3. the conversion from 5v to 3v3 is done locally on the boards using linear regulators so we are wasting nearly as much power again as they draw. Unfortunately linear regulators dump the surplus energy as heat, far from ideal in a closed tin. Particularly where we want to be able to measure the temperature as part of your logging. Altogether though an adequate first pass for prototyping and testing purposes. There is a bit of a learning curve to be climbed and this is a reliable way to do it. The 10 DOF board has 3 axes of Magnetometer, Accelerometer and Gyroscope on-board as well as an air pressure sensor for us as an altimeter, giving the 10 things or DOF it can measure.

“If you were doing this again what would you do different ?” you ask. Well bearing in mind that I acquired the parts for this a bit back and they have been gathering dust the purchasing decisions would be different. I would be replacing the hand wired SD card holder and Teensy with a Pi Zero. But have to add an RTC. Also I would get rid of the linear regulator on the 10 DOF board and power it form the Zero’s 3v3. Just to move the self heating away from the air pressure sensor which relies on an internal temperature measurement for air density compensation. I would probably add a press button on the outside of the case so that way-points or events could be marked in the track log. Useful for overcoming cumulative errors. One last thing, inertial navigation chips and managers are a field of rapidly advancing technology, many of our smart phones already have them inside. The inertial sensor chips themselves are becoming ever more integrated placing it all on one chip together along with local processing to make them ever more accurate. So something to watch out for and periodically check the current state of play.

The firmware for this prototype is available from my git hub repository <https://github.com/AndyKirby/Firmware/tree/master/InertialLogger> please note it is a work in progress rather than a finished item.