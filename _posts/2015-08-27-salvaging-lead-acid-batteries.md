---
id: 947
title: 'Salvaging Lead Acid Batteries'
date: '2015-08-27T15:55:09+01:00'
author: SHHAdmin
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=947'
permalink: /salvaging-lead-acid-batteries/
categories:
    - 'Members'' Projects'
tags:
    - Electronics
    - Tinkering
---

Working on a previous project to make a prototype Pi UPS I pulled a number of salvaged lead acid batteries out of the scrap bin.

<div class="wp-caption alignleft" id="attachment_948" style="width: 253px">[![Battery Resuscitation through Desulfation](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/Desulphate-243x300.jpg)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/Desulphate.jpg)Battery Resuscitation through Desulfation

</div>It quickly became apparent that the batteries were all flat and as each had a terminal voltage of around 0.5V they appeared to be beyond life ever again. Not surprising considering the number of years they had lived in the scrap bin without ever having a charge.

Initial attempts to put a charge into them and get them going again were without success. Even over voltage-ing them a little to get them started failed miserably. The best of them was taking around 10 micro amps. After leaving them on charge for 5 days or so the situation had not improved. So what were we looking at ? Maybe they had dried out, maybe the plates had fallen apart and were now mush or maybe being overly discharged the plates were caked irretrievably in insoluble hard lead sulphate crystals.

There are plenty of miracle cures for dead lead acid batteries and desulfation. Frankly I am rather sceptical of most of them. But for some reason I thought although slightly implausible desulfation was a fun hack to try. Chemical means to reverse the crystal build up were out as the batteries are sealed units. So it was time to rummage through the internet for ideas and then hit the scrap bins again for parts. The circuit I settled on is here [Pulse Desulfator Doc](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/08/Pulse3_web_layout_.pdf). This formed the basis and the prototype as shown in the photo was a derivation of this.

Having nothing to loose other than a bit of time constructing and debugging it I set too to build it. The inductor was a hand wound approximation, the logic inverter shown in the schematic was replaced with a simple transistor based inverter using a 2N2222 NPN transistor and the mark space ratio of the 555 astabel circuit needed adjusting. Probably because the inductor value was a touch lower than it should have been. But in the end it appeared to be working.

Now the acid test (see what I did there….). From the picture you can just see the ammeter on the bench PSU showing the battery taking a charge of 200 milli amps. So success. It took 2 days of float charge plus the desulfator pulsing away to get this recovery. Over this period the input current could be seen steadily increasing, whereas before with a stable DC supply it had just sat there and done nothing. The open circuit voltage of the battery at the time of writing now shows 4.5 volts so there is a way to go yet. It could be a couple of weeks or so before the battery is as recovered as it ever will be. In reality I can’t see them ever being “as new” however a trick worth knowing about and trying when salvaging neglected lead acid batteries.

Not to self if trying this with an old car battery check the electrolyte levels first and be prepared to except that the plates could just be mush and the battery beyond recovery.