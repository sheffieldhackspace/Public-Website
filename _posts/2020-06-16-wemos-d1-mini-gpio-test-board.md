---
id: 2025
title: 'Wemos D1 mini GPIO test board'
date: '2020-06-16T22:52:59+01:00'
author: 'Richard Langner'
layout: post
guid: 'https://www.sheffieldhackspace.org.uk/?p=2025'
permalink: /wemos-d1-mini-gpio-test-board/
categories:
    - Arduino
    - 'Electronics Articles'
---

 **Visualise Active Ports**

Sometimes it’s useful to know the activity on the GPIO pins of your microcontroller. This little monitor board is designed specifically for the Wemos D1 mini and has a LED on each GPIO pin to help you visualise what is happening on inputs and outputs.

<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="329" loading="lazy" src="https://www.youtube.com/embed/1M6AZlkAoDQ?feature=oembed" title="Wemos D1 mini - visual GPIO port pin activity breakout board" width="584"></iframe></div></figure>This monitor is quite useful for checking DC levels and slower pulses such as when controlling servos, relays, etc. For faster pusles it’s best to use a ‘scope or logic analyser.

 Microcontroller boards other than the D1 mini can be accommodated by either re-designing the layout for the extra pins, or using extension leads to monitor those pins you are interested in.

LEDs can be disconnected by removing the jumper links, so as not to interfere with other functions. All LED series resistors deliberately have a high value to minimise loading the GPIO pins. The white LEDs drew less than 500 microamps each when used with a 1K series resistor, and they were still quite bright.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wp-content/uploads/2020/06/Wemos-Led-Board-6-1024x747.jpg)<figcaption>General view showing breakout header sockets, header pins, and jumpers.</figcaption></figure>The monitor can also act as a small breakout board, extending the Wemos header pins to 2 sockets and 2 pins per GPIO line. This can be handy when developing your project, as Dupont extension leads could be used to connect the monitor board to your PCB.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wp-content/uploads/2020/06/Wemos-Led-Board-3-1024x461.jpg)<figcaption>Wemos D1 mini and the breakout test board.</figcaption></figure>Construction is simple – besides the header pins and sockets, there are just a dozen SMD resistors and LEDs, mounted on a prototyping board. The underside of the board is where the connections were made, linking pins with single strands taken from a length of scrap multistrand wire.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wp-content/uploads/2020/06/Wemos-Led-Board-4-1024x490.jpg)<figcaption>Underside showng the link wires and SMD resistors.</figcaption></figure>The video shows the board with jumpers installed for all 9 GPIO ports (D0 to D8). Due to high value series resistors, the LEDs do not interfere with program uploading, and if you install the RX and TX jumpers you can watch the LEDs giving a satisfying twinkle with the upload activity.
<!--- path/to this posts images is ![]({{ site.baseurl }}/assets/blog/2020-06-16-wemos-d1-mini-gpio-test-board/ --->
<!--- This page could have YOUTUBE links add this code where needed ... {% include youtube.html code="gOCDyotifPo" %} --->