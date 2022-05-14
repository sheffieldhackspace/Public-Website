---
id: 1492
title: 'come and join us to build LinoRobot'
date: '2019-04-27T13:48:20+01:00'
author: 'Alex Kelly'
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=1492'
permalink: /come-and-join-us-to-build-linorobot/
categories:
    - 'Raspberry pi'
tags:
    - diy
    - Electronics
    - robot
    - 'Robot Operating System'
    - Robots
    - ros
---

Hello,

We’ve finished building the prototype of the LinoRobot and have an understanding of how all the software and hardware fit together.

![old robot](https://i.imgur.com/XJxEGdk.jpg)

There was a few issues along the way and ill summarize what we’ve learnt:

- ROS and the navigation software requires a faster machine than the current VM. Now we understand more we’re going to build ROS on the direct hardware.
- The Raspberry PI doesnt have SWAP memory enabled by default and ROS ran out of memory when first starting ROS. Enable SWAP for initial ROS startup and then disabled it.
- We cheated the first time by using [ubiquityrobotics](https://downloads.ubiquityrobotics.com/pi.html) ROS image the first time and we’ll probably cheat again, it makes setup a lot easier 🙂
- Don’t use very cheap cheap motors as they don’t give similar results and the robot goes around in circles. We bought some more expensive motors this time so hopefully they will move when we want them too.

The parts have arrived and we’re now getting started on the second robot.