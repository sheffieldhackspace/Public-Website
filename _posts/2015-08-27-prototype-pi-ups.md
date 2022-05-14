---
id: 942
title: 'Prototype Pi UPS'
date: '2015-08-27T14:54:27+01:00'
author: SHHAdmin
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=942'
permalink: /prototype-pi-ups/
categories:
    - 'Hacking the space'
    - 'Members'' Projects'
    - 'Raspberry pi'
tags:
    - backup
    - battery
    - infrastructure
    - 'Pi UPS'
    - 'Raspberry Pi'
---

After advocating for a while that it is worth running up services on Pi Servers one at a time as needed. It occurred to me that we have no UPS to keep them going when the mains electricity drops out. We also have no way to prompt services to shut down in an orderly manor under the same circumstances. This gets to be more critical when we are running infrastructure services like RfID door access and a space automation MQTT broker.

<div class="wp-caption alignleft" id="attachment_943" style="width: 310px">[![An uninterruptible power supply for the Raspberry Pi](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/PiUPS-300x166.jpg)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/PiUPS.jpg)An uninterruptible power supply for the Raspberry Pi

</div>Being as I am also running similar services at home I needed a similar solution for home. Sounds like a call to hack then, first stop was the junk and scrap bins, then a quick rummage through the spare bits left over from Chinese AliExpress shopping trips.

I found an ex UPS maintenance free lead acid battery that had sat in the scrap bin for too many years and a couple of these tiny 3A SMPSU DC-DC switcher modules that are incredibly cheap. The SMPSU modules can cope with up to 28V input and the output voltage is set by a small potentiometer. I also found a scrap laptop PSU that had a decent current delivery at under 24V. All in all the most expensive bits were the screw terminals that you can see from the picture I used to make conections to the board.

Lead Acid batteries have the useful property of being low maintenance and they will take a float charge providing you supply them with a constant voltage at the maunfacturers reccomended value. They will sit there on this float charge for as long as the battery will live. So after a quick rummage on the internet the first switch module was adjusted to provide a constant voltage at the manufacturers reccomended float value of 6.85V for the battery shown. The battery and input to the second switch module were conencted in parralel across the output of the first switcher. The ouput votlage of the second switcher was set to the 5.1V that is best to feed Pi’s with.

That then was the prototype UPS finished. When the supply to the UPS fails the battery takes over and supplys the Pi. When the mains supply comes back on the battery goes straight onto float charge and the Pi is running from the mains. Providing that the battery float voltage is less than the supply voltage and the Pi voltage is less than the battery voltage it all works. At 6V these thresholds are all a little close together and the UPS could do with a 12V battery and then adjusting to charge at that voltage instead. But this does work and the concept is proved.

The next task is to scale this up to run a whole shelf of Pi’s, with a mains high current SMPSU to drive the float voltage and supply the Pi’s, a salvaged car battery for the uninteruptible bit and one of these cheap tiny DC-DC SMPSU’s per Pi. But that is another article for another day.