---
id: 1030
title: 'The Hunt for J5'
date: '2015-12-15T14:33:55+00:00'
author: SHHAdmin
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=1030'
permalink: /the-hunt-for-j5/
categories:
    - 'Members'' Projects'
    - 'Raspberry pi'
tags:
    - Electronics
    - JTAG
    - 'Pi Zero'
    - 'Raspberry Pi'
    - 'Reverse Engineer'
---

<div class="wp-caption alignleft" id="attachment_1032" style="width: 310px">[![Pi Zero J5 Connections](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/12/PiZero-1450044502-300x225.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/12/PiZero-1450044502.png)Pi Zero J5 Connections

</div>J5 is alive, and is definitely not called johnny or a robot in a kids sci-fi film. J5 is the mystery connector footprint on the bottom of the Pi Zero. I have been puzzling over what it was intended for since getting my Pi Zero from [Pimoroni](https://shop.pimoroni.com/products/raspberry-pi-zero). Asking around amongst those who would know more than me about it (Not difficult to find) the hot favourite was a [JTAG](https://en.wikipedia.org/wiki/Joint_Test_Action_Group) port but no one was entirely sure and there was no pinout. An extensive google around was surprisingly information free.

Time then for some reverse engineering, first stop was a USB microscope and a look see for obvious pin functions, gotta tackle the low hanging fruit first. Taking pin 1 to be the pin nearest the J5 ID we can see the footprint is for an 8 pin connector and the body or screen is not connected. 1 is the Pi system reset or run pin as it is labeled, 4 and 7 are ground connections. OK that leaves 5 pins to go. I visually traced the connections and lost them in to the maze of CPU via’s. As other than the reset they did not go to the GPIO pins I could rule out an easy hit as to what they were. The up side is if they were [JTAG](https://en.wikipedia.org/wiki/Joint_Test_Action_Group), it would have to be dedicated pins, not GPIO pins, and therefore projects could be debugged even with a phat in place. Hmmm what were those other 5 pins for. Normally at this point I would start on in with a multi meter or a scope and see what I could find out next. But serendipity smiled upon me, in that way it never normally does.

<div class="wp-caption alignright" id="attachment_1031" style="width: 310px">[![B+ J5 Connections](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/12/BPlus-1450134795-300x225.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2015/12/BPlus-1450134795.png)B+ J5 Connections

</div>Putting some time into a side project (building a Graphite graphing server) I was working with a Raspberry Pi B+. Purely as I tend to mostly use Pi2’s now and was using up any older ones that were lying around. Embedding them irretrievably into other things. Fiddling with the board during one of many mental luls, I noticed the same mystery footprint on the board directly under the HDMI video connector. In fact it is so much the same it is also labelled J5. Cross referencing the ground pin outs that we know from the Pi Zero we get a match. What is more the 5 pins we had not identified are broken out to pogo pin pads bang next to the footprint. All along with nice labels. Combining the data we have then gives us the following table:-

J5 Pin Information
| **Pin No** | **Pi Zero Function** | **Pi B+ Function** | **Comment** |
|---|---|---|---|
| 1 | Pi System Reset | ? | Pull low to reset the Pi |
| 2 | ? | TRST\_N | TAP Reset pull low to reset the TAP |
| 3 | ? | TDI | Test Data In |
| 4 | Gnd | Gnd | Signal Gnd |
| 5 | ? | TDO | Test Data Out |
| 6 | ? | TMS | Test Mode Select |
| 7 | Gnd | Gnd | Signal Gnd |
| 8 | ? | TCK | Test Clock |

Some further technical info on [TAP &amp; JTAG can be found here ](http://www.xjtag.com/support-jtag/jtag-technical-guide.php)worth a look at to illustrate some of the concepts behind JTAG. OK, all well and good, what is left to do, identify what sort of connector J5 actually is and make up a JTAG lead for it then connect it up and see if we are right.