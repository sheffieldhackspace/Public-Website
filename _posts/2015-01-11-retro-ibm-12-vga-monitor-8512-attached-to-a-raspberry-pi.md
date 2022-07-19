---
id: 548
title: 'Retro IBM 12&#8243; VGA monitor (8512) attached to a Raspberry Pi!'
date: '2015-01-11T17:27:58+00:00'
author: Bugs
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=548'
permalink: /retro-ibm-12-vga-monitor-8512-attached-to-a-raspberry-pi/
categories:
    - 'Members'' Projects'
    - 'Raspberry pi'
---

[![Retro IBM monitor with raspeberry pi](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/01/20150107_222920.jpg)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/01/20150107_222920.jpg)  
One of our members, [James Muirhead](http://www.twitter.com/phantomfreak), managed to get a classic IBM monitor working with his Raspberr pi! He says:

### Reasons for doing this…

I’ve had this monitor knocking about in the attic (used for years in the 90s) for years and I’ve wanted to do something like this. It’s taken me a while to get an HDMI to VGA adapter which actually supports 640×480 @ 60Hz.

I was partly doing this for estetic reason (it’s awesomely retro) and partly because it’s an old device I wanted to breath new life into. I always try to reuse before recycling.

### Required config.txt changes

> hdmi\_group=2  
> hdmi\_mode=4  
> hdmi\_drive=2 (if audio supported by VGA adapter).

When it first started I saw nothing but green snow. I thought it wasn’t working so I tried all the different relevent settings. It however turned out that I needed to restart the Pi somehow, whether by bridging the reset pins (this requirtes a Revision 2 Raspberry Pi), or by using **sudo reboot** from SSH command line (via network).

### Future expansion

If I were to make this a perfamant build (I don’t have the desk space or the spare Pi right now).

- I will likely wire a Solid State Relay to control power to the monitor from a pin on the GPIO (this monitor is way too early for automatic power control).
- I would also probably create some from of circuit to reset the Raspberry Pi automatically (to avoid green snow). Either using a 555N in monostable mode or a suitably programmed ATtiny45/85.
<!--- path/to this posts images is ![]({{ site.baseurl }}/assets/blog/2015-01-11-retro-ibm-12-vga-monitor-8512-attached-to-a-raspberry-pi/ --->