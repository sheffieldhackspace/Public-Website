---
id: 976
title: 'DigiStump DigiSpark Arduino and Debian 8 64bit'
date: '2015-10-12T14:47:37+01:00'
author: 'James Muirhead'
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=976'
permalink: /digistump-digispark-arduino-and-debian-8-64bit/
categories:
    - 'Hacking the space'
    - 'Members'' Projects'
tags:
    - 64-bit
    - Arduino
    - ATTiny
    - ATtiny85
    - debian
    - digispark
    - digistump
    - Electronics
    - linux
    - microcontroller
    - usb
---

**UPDATE 2016-02-02:** There is an updated version of the script below which also works with the DigiSpark Pro. See below.

In the space recently we’ve been playing with the super low cost [Digistump](http://digistump.com/) Digispark 16.5MHz boards and the Arduino 1.6.5 environment.

Unfortunately there are some issues with these working out of the box with 64-bit versions of Linux (we use Debian 8 64-bit) as one of the attached binaries is compiled for 32bit only. However, after some major head scratching, I have managed to get them to work reliably.

To get them to work. You need to install the Digispark hardware library as normal and then follow the steps below.

### Installing the DigiSpark library

Add the following line to the *Additional Boards Manager URLs* in *File –&gt; Preferences*. If you have previously added boards to this list, you will have to separate them with a ; or use the button to edit it in list form. If you need an in-depth guide, there’s one in the links at the bottom from everyone’s favourite Adafruit.  
`http://digistump.com/package_digistump_index.json`

### Fixing the missing bits

Once you’ve done that, you will need to download the following script (I’d of included it as a downloadable file, but someone disabled it on our server)…

`#!/bin/bash`

````

\# Adds necessary libraries and UDEV rule for using the Digistump DigiSpark boards in Arduino 1.6.5 on Debian 8 64-bit  
\# Written by James Muirhead. 2015-10-12

````

\# This works on the 16.5MHz original Digispark. Has not been tested on other varients.

````

\# Checks if you are root, as this is required.  
if \[ $(whoami) == “root” \]  
then  
\# Updates apt then installs 2 necessary libraries and their dependencies  
apt-get update  
apt-get -y install libusb-dev lib32stdc++6

````

\# Adds UDEV rule which adds the DigiSpark device to the dialout group, same as required by Arduino IDE.  
echo ‘SUBSYSTEM==”usb”, ATTR{idVendor}==”16d0″, ATTR{idProduct}==”0753″, MODE=”0660″, GROUP=”dialout”‘ &gt; /etc/udev/rules.d/99digispark.rules

````

\# Restarts UDEV to enable the above.  
service udev restart

`<br></br>`

`echo "DONE!!!"31<br></br>else<br></br>echo "You need to be root to run this script, use su / root to try again."<br></br>fi<br></br>`

Right, once you’ve got the above copied into a file called e.g. *digispark.sh* you will need to make it executable. To do this, you will need to log in as root (type *su* at the command line and type your root password). Then type the following to make the file executable.

`chmod a+x digispark.sh`

Ok, once the file is executable, stay root and run the following…  
`./digispark.sh`  
This may (or more likely will) take some time, so leave it till it’s done what needs to be done.

Once finished, close and re-open the Arduino IDE.

### DONE!!!

Once this is all done, you should be able to upload a sketch to your DigiSpark without problems.

### Links

- [Digispark GitHub page](http://github.com/digistump/DigistumpArduino)
- [Unofficial list of 3rd party boards support urls](http://github.com/arduino/Arduino/wiki/Unofficial-list-of-3rd-party-boards-support-urls)
- [Adafruit: How to add custom boards to Arduino IDE1.6.3+](http://learn.adafruit.com/add-boards-arduino-v164?view=all)

### Update 2016-02-02

I’ve written a new version of the script above which also works for the Digispark Pro. Follow the same instructions as above, but use the script below instead. It is longer, but does a few more things.

And, just because I’m feeling nice, I’ve put it on GitHub to make life easier.  
[DOWNLOAD NOW](https://github.com/sheffieldhardwarehackersandmakers/scripts/blob/master/digispark.sh)

`#!/bin/bash`

````

\# Digispark installer.  
\# Written by James Muirhead.  
\# 2015-10-12  
\# https://www.sheffieldhackspace.org.uk

````

\# CHANGE LOG  
\# 2015-10-16 – Only installs 32-bit extensions if 64 bit OS detected.  
\# 2015-11-04 – Now creates UDEV rule for DigiSpark &amp; DgiSpark Pro.

````

if \[ $(whoami) == “root” \]  
then  
apt-get update

````

\# Installs required library.  
apt-get -y install libusb-dev

````

\# Checks for 64-bit environment and installs required 64-bit extensions.  
uname -a | grep x86\_64  
if \[ $? == 0 \]  
then  
apt-get -y install lib32stdc++6  
fi

````

\# Creates UDEV rule for DigiSpark  
echo “# Rule to allow use of the basic DigiSpark (ATtiny85) board in the Arduino IDE 1.6.3+” &gt; /etc/udev/rules.d/99digispark.rules  
echo “# Written by James Muirhead (@PhantomFreak), 2015-10-12.” &gt;&gt; /etc/udev/rules.d/99digispark.rules  
echo “# https://www.sheffieldhackspace.org.uk” &gt;&gt; /etc/udev/rules.d/99digispark.rules  
echo “” &gt;&gt; /etc/udev/rules.d/99digispark.rules  
echo ‘SUBSYSTEM==”usb”, ATTR{idVendor}==”16d0″, ATTR{idProduct}==”0753″, MODE=”0660″, GROUP=”dialout”‘ &gt;&gt; /etc/udev/rules.d/99digispark.rules  
\# Creates UDEV rule for DigiSpark Pro.  
echo “# Rule to allow the use of DigiSpark Pro (ATtiny167) board in the Arduino IDE 1.6.3+” &gt; /etc/udev/rules.d/99digispark-pro.rules  
echo “# Written by James Muirhead (@PhantomFreak), 2015-11-04.” &gt;&gt; /etc/udev/rules.d/99digispark-pro.rules  
echo “# https://www.sheffieldhackspace.org.uk” &gt;&gt; /etc/udev/rules.d/99digispark-pro.rules  
echo “” &gt;&gt; /etc/udev/rules.d/99digispark.rules  
echo ‘SUBSYSTEM==”usb”, ATTR{idVendor}==”16d0″, ATTR{idProduct}==”0753″, MODE=”16d0″, GROUP=”dialout”‘ &gt;&gt; /etc/udev/rules.d/99digispark-pro.rules

````

\# Restarts UDEV  
service udev restart

`<br></br>`

`	echo "All done, please close all open Arduino IDE windows & reopen before attemptting to upload code."<br></br>exit 0<br></br>else<br></br>echo "You are not root, please use sudo or su to continue."<br></br>exit 1<br></br>fi<br></br>`