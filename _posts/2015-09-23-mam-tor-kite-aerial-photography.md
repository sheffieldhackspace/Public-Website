---
id: 956
title: 'Mam Tor Kite Aerial Photography'
date: '2015-09-23T21:57:58+01:00'
author: 'James Muirhead'
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=956'
permalink: /mam-tor-kite-aerial-photography/
categories:
    - 'Members'' Projects'
    - 'Raspberry pi'
tags:
    - Camera
    - Kite
    - Photography
    - 'Raspberry Pi'
---

Several members of the group attended **Geeks in the Peeks** recently (4th-6th September 2015). As part of this on the Saturday, we decided to take my Kite Aerial Photography rig to the top of Mam Tor to see if we could take some photos. I brought along my Raspberry Pi based system (A model A with a camera module, air pressure sensor, USB wifi card (for the web UI preview and start/stop/shutdown buttons) and LiPo battery) which takes images every 7 seconds, on average while airborne.

The wind was nice and smooth and resulted in the Kite flying very stably. This helped produce some very clear and well focused images with little smearing effect (common in gustier winds). See below for some examples…

![]({{ site.baseurl }}/assets/blog/2015-09-23-mam-tor-kite-aerial-photography/008-300x225.jpg)

![]({{ site.baseurl }}/assets/blog/2015-09-23-mam-tor-kite-aerial-photography/022-300x225.jpg)

![]({{ site.baseurl }}/assets/blog/2015-09-23-mam-tor-kite-aerial-photography/051-300x225.jpg)

![]({{ site.baseurl }}/assets/blog/2015-09-23-mam-tor-kite-aerial-photography/066-300x225.jpg)

![]({{ site.baseurl }}/assets/blog/2015-09-23-mam-tor-kite-aerial-photography/067-300x225.jpg)

![]({{ site.baseurl }}/assets/blog/2015-09-23-mam-tor-kite-aerial-photography/altitude-graph-300x190.jpg)

Relative Altitude data for period of use.

NB: In the graph above, you can see that towards the end of the flight, the camera appears to be below the starting altitude. This is caused by the kite camera taking the initial reading on altitude (based on air pressure) while it is already some way up above it’s ground level starting point (it takes a little while for the Raspberry Pi to actually boot up to the point it can run the code to control the camera). However, as you can see the highest image was taken at 40m above the start altitude. From the spreadsheet the Pi makes, I can tell you it was image 29.

![]({{ site.baseurl }}/assets/blog/2015-09-23-mam-tor-kite-aerial-photography/029-300x225.jpg)

highest in the series.

![]({{ site.baseurl }}/assets/blog/2015-09-23-mam-tor-kite-aerial-photography/kite_flying-200x300.jpg)

Kite and camera in flight above Mam Tor

From the above you can see the Kite clearly in the sky as well as a brown spec hanging from it, this is the Raspberry Pi kite camera hanging from a Picavet device (this allows the camera platform to always be level while in flight suspended below the kite’s string).

![]({{ site.baseurl }}/assets/blog/2015-09-23-mam-tor-kite-aerial-photography/AJ-Andy-300x200.jpg)

Comedy moments… Andy restrains AJ to prevent him being pulled away by kite.

For more information of Kite Aerial Photography, start with [Wikipedia](https://en.wikipedia.org/wiki/Kite_aerial_photography) and see how you get on. However, if you have any questions or a desire to see a full &amp; in-depth article on KAP, please leave a message below and I’ll be sure to start work on it. There is also a great YouTube video from the folks at Make Magazine [here](https://www.youtube.com/watch?v=swqFA9Mvq5M), this was in fact the original inspiration for me to get into Kite Aerial Photography after I left University.

For more information on Geeks In The Peaks, please see their [Twitter](https://twitter.com/geeksinthepeaks) &amp; [attending.io](http://attending.io/events/geeks-in-the-peaks-2015) pages.