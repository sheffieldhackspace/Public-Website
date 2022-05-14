---
id: 1328
title: 'Using the Boards Manager of the Adruino IDE'
date: '2016-10-03T19:27:12+01:00'
author: 'Richard Langner'
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=1328'
permalink: /using-the-boards-manager-of-the-adruino-ide/
categories:
    - 'Electronics Articles'
---

By Richard M Langner

In order to program an Arduino device (a board or a stand-alone chip), it needs to be listed in the Arduino IDE. If it isn’t listed, this article should help you list it using the Boards Manager. The basic procedure is –

1. Locate the Boards Manager URL for your device (search the web).
2. Add it to the ‘Additional Boards Manager URLs’ list (under File → Preferences).
3. Install the device in the ‘Boards Manager’ (under Tools).

I am using the Arduino IDE v1.6.7 and the device I want to list is the ATtiny85 stand-alone 8 pin chip. Boards/devices are listed in alphabetical order and you can see below that no ATtinys are listed.  
*(Click to enlarge the images)*

[![not-on-the-board-list](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Not-on-the-board-list-239x300.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Not-on-the-board-list.png)

First, we need to find a board manager for our device. A search for ‘ATtiny85 board manager’ brings up a couple of candidates.

[![search-results](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Search-results-300x167.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Search-results.png)

Click on the top result and copy the ‘Boards Manager URL’ to the clipboard.

[![copy-json-link](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Copy-json-link-300x225.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Copy-json-link.png)

This URL needs to be added to the ‘Additional Boards Manager URLs’ which you will find under File → Preferences.

[![file-preferences](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/File-preferences-232x300.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/File-preferences.png)

In Preferences, click on the button to see a list of board managers that are already installed.

[![preferences](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Preferences-300x266.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Preferences.png)

In my case there are only two managers installed

[![already-installed-managers](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/already-installed-managers-300x139.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/already-installed-managers.png)

Paste the URL (you previously copied) into the list on a new line and click OK. Then close these boxes and return to the IDE main screen.

[![paste-the-url](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/paste-the-URL-300x136.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/paste-the-URL.png)

You have just told the boards manager where to look for the information.

Now you can begin to install the manager for the ATtiny85. Find your way to the Boards Manager –

[![board-manager-1](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-manager-1-300x227.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-manager-1.png)

and type ‘ATtiny’ into the search-box. You should get something like this –

[![board-manager-2](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-manager-2-300x178.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-manager-2.png)

Click on the appropriate manager item and an Install button appears.

[![board-manager-3](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-manager-3-300x105.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-manager-3.png)

Click on the Install button and after a moment you will see confirmation the manager has been installed.

[![board-manager-4](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-manager-4-300x96.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-manager-4.png)

The ATtiny devices will now show up in the list of boards/devices.

[![board-list](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-list-245x300.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Board-list.png)

Finally, select the ATtiny85 device and ensure that all the other settings are correct.

[![chip-settings](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Chip-settings-300x261.png)](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2016/10/Chip-settings.png)

You are now ready to program the ATtiny85.

The same procedure may be used to install other boards/devices into the Arduino IDE.

*Note: Your screens and menu options may be slightly different to mine, but the general method of listing your device should be the same.*