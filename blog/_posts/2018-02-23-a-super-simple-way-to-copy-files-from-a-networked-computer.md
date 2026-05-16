---
id: 1472
title: 'A super simple way to copy files from a networked computer'
date: '2018-02-23T13:33:49+00:00'
author: 'James Muirhead'
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=1472'
permalink: /a-super-simple-way-to-copy-files-from-a-networked-computer/
categories:
    - 'Raspberry pi'
---

Ok, so you’re wanting to extract files from your Raspberry Pi (or other networked computer) and you can’t be bothered to go find a USB flash drive (don’t feel guilty, I’ve been there too). How about you set up a temporary HTTP file server of the information and access it from any web browser on another computer? Impossible you say? Not quite apparently.

I’ve just found this trick and it is possibly going to become one of my most used methods of file transfer from a [Raspberry Pi](http://www.raspberrypi.org).

1. Go to the folder you want to access from another machine in the command line of the Pi…
2. Now type in the following line…  
    ***python -m SimpleHTTPServer 8080***
3. That’s all you have to do, at least on the pi.
4. On another computer, go to the following address in any web browser… ***http://&lt;hostname or IP address of pi&gt;:8080***  
    For example… ***http://raspberrypi.local:8080*** or ***http://192.168.1.100:8080***
5. Once you’re done copying you’re files, go back to the Raspberry Pi and type…  
    ***Ctrl+C***
6. Your HTTP Server is now gone, like it wasn’t even there.

Wasn’t that simple? I foresee this as being a stupidly useful tool for copying files in future (particularly copying to an Android or iOS phone). Admittedly it isn’t bi-directional, but that is what SSHFTP is for!

FYI, I have tested this on a Raspberry Pi, Mint Linux desktop and on Windows 10 (with Python installed) and they all work. Windows 10 does require you give Python permission to act as a server (there will be a popup).

Happy making folks, hope the above helped in your projects. Ask a question in the comments below if you haven’t succeeded with this useful trick.

**UPDATE (2020-09-23):** As all things must change, as does this… Python 3 has changed the command to…

*****python -m http.server 8080*****

Probably a massive delay in my updating this, but I have only just had need to use this again.