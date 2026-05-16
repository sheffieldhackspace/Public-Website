---
id: 1477
title: 'DreamPi and the Dreamcast'
date: '2018-06-18T19:07:18+01:00'
author: 'Matthew Langner'
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=1477'
permalink: /dreampi-and-the-dreamcast/
categories:
    - 'Raspberry pi'
tags:
    - 'Game consoles'
    - Games
---


Getting a Dreamcast games console in 2018 is great but there are something that you can do as Sega has stopped supporting it for may a years now. This means that you can’t play some of the great games online. The following article will help you get the Dreamcast back online and playing the awesome games this short lived system has to offer.

# Equipment you will need

- You will need a working Dreamcast with a working 56k modem
- Raspberry Pi ( A B+ or more is advisable )
- An SD card with the DreamPi software image – [Link](https://mega.nz/#!MIlXXZDI!kYZKdeiPh0ju4FLWeEh-NH0HETahQxUlyWv0P8ekONw)
- A Lunix compatible USB dail-up voice 56k modem
- Telephone cable RJ11
- Ethernet cable RJ45 – to go to your router
- Dreamcast browser software like the Dreamkey 3.0

# Equipment for the line inducer

- 0.47uf capacitor
- 389 Ohm resistor
- UK – two 9V battery (18V) : US 9V battery

or

- A step up power booster module connected via a 5V USB (to the Pi)

# Set up the image file

You will need to set up the image file of the DreamPi in order to get things going. I have linked to a guide to install the DreamPi image, you will need to change the file name listed in the link to the DreamPi image file name.

[https://www.raspberrypi.org/documentation/installation/installing-images/linux.md](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md)

There is an alternative install that you can do via NOOBS. Link below,

[https://www.dreamcast-talk.com/forum/viewtopic.php?f=3&amp;t=10851](https://www.dreamcast-talk.com/forum/viewtopic.php?f=3&amp;t=10851
)
# Setting up the Pi

Once you have successfully flashed the image onto the SD card insert the card into the Pi and connect the Ethernet cable and USB modem ready for the line inducer in the next section. Connecting a monitor is option for normal game play but for initial setup it is good to see it working. You will be able to see if the modem is detected, say with *lshw* in the terminal. The login information is *pi* as the user name and *raspberry* as the password.

# Making the line inducer

You will need to cut the phone line wire and solder them on to a PCB board leaving enough room to add in the capacitor and the resistor as displayed in the diagram below figure 1. Make sure that you get the capacitor the right way round in relation to the resistor.

<div class="wp-caption alignnone" id="attachment_1480" style="width: 310px">[![Boost converter for phone line](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2018/06/line-300x213.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2018/06/line.png)Boost converter

</div>Figure 1

I used the step up power booster for mine instead of the battery option but I did find that I had to boost the power up more than I expected; approximately 26V in my case to get a stable connection. Have a play around to see if yours will work at a lower voltage. Now in this example I used a USB from the booster converter to the Pi in order to get the power to the phone line, see figure 2 for the pin out when wiring it up to the boost converter.Just make sure that the pins and the wires at the other end match up to what you are expecting so you don’t get any cross wires and fry something; use a multimeter for this.

![]({{ site.baseurl }}/assets/blog/2018-06-18-dreampi-and-the-dreamcast/ouU5Pa-300x195.png)
Figure 2

Here is my *very excellent* and *well* soldered PCB board of the schematic above, figure 3 – 5 shows it made.

![]({{ site.baseurl }}/assets/blog/2018-06-18-dreampi-and-the-dreamcast/1-300x225.jpg)
figure 3

![]({{ site.baseurl }}/assets/blog/2018-06-18-dreampi-and-the-dreamcast/2-300x225.jpg)
figure 4

![]({{ site.baseurl }}/assets/blog/2018-06-18-dreampi-and-the-dreamcast/3-300x225.jpg)
figure 5

Now in figure 5 you will see that I have used hot glue to help secure the phone line wires as you will find that they are easily broken.

Now connect this to the Pi and the Dreamcast.

## Side note

Now that you my find on some older Pi’s the boost converter makes the Pi unstable. In that case you my have to have an external power source, say a 12v /9v power supply but you will need to adjust the boot converter to make sure that you don’t over load anything.

# Turning it all on

As the title says, turn the Pi on. Wait for it all to load and settle down. Your USB modem will most likely have two sets of lights, wait for them both to come on. If they don’t come on after a few minutes this may indicate that you have a problem. This could be an issue with the voltage not been high enough or the inducer on the PCB has a short or bad connection. Test with a multimeter.

Turn the Dreamcast on and follow the next section.

# Dreamkey 3 setup

Setting up the Dreamkey is quite easy. In the setup section of the Dreamkey when it asks you for the ISP phone number, set it to 555. The username and password can be what every you want. Pick something easy my is \*\*\*\* and \*\*\*\* (What, you are not suppose to tell anyone your username and password). Everything else is either blank or as default. Make sure you save when prompted so you can get online later. During the connection process you may see one of the lights go off on the modem, if like mine it has two, but it should come on again shortly. If successful you should see a web page load, slowly. If not make sure that you have everything connected and you have an internet connection. Check that there is not breaks in the any of the wires and that the DreamPi software is running and working properly.

# Playing an online game

Now here is the fun or more fun part, playing the games. For games like ChuChu rocket it was simple the case of getting the DreamPi turned on and waiting for the green lights. But for some games like Phantasy star online you will need a patch disc to get you going. This is really easy you need to had over to <https://sylverant.net/> and download the appropriate version for your game. You only need to use it once (as far as I’m aware) and you should be ready to play.

# Trouble shooting

- Game fails to connect or disconnects nearly staight away. 
    - Your line voltage is not high enough
- Fails to connect at all 
    - Your modem is faulty and needs replacing
    - You have forgotten to connect one or more wires
    - There is a break / short circuit in one or more of the wires.
- The TV is blank 
    - Have you turned your TV on?

## Sources of information

Here are the links that I used to get the Dreamcast back online.

Instruction on setting up and making the DreamPi

[http://blog.kazade.co.uk/p/dreampi.html](http://blog.kazade.co.uk/p/dreampi.html)
Making the line inducer

[http://dreamcast.onlineconsoles.com/phpBB2/guides\_pcdcwin98.php#10](http://dreamcast.onlineconsoles.com/phpBB2/guides_pcdcwin98.php#10) from about step 10 but step 9 could be useful.

Dreamkey 3.0

[https://www.emuparadise.me/Sega\_Dreamcast\_ISOs/Dreamkey\_3\_(PAL)/51593](https://www.emuparadise.me/Sega_Dreamcast_ISOs/Dreamkey_3_(PAL)/51593)

Edit: Emuparadise.me is no longer with us, so here is alternate link but I have not checked the quality of it. Please virus check it before use.

[https://romsmode.com/roms/dreamcast/dreamkey-version-3-0-421318](https://romsmode.com/roms/dreamcast/dreamkey-version-3-0-421318)

Sylverant Phantasy star online

[https://sylverant.net/](https://sylverant.net/)