---
id: 1550
title: 'Compiling and uploading Arduino sketches from within Notepad++'
date: '2019-02-03T10:02:22+00:00'
author: 'Richard Langner'
layout: post
guid: 'http://www.sheffieldhardwarehackers.org.uk/wordpress/?p=1550'
permalink: /compiling-and-uploading-arduino-sketches-from-within-notepad/
categories:
    - 'Electronics Articles'
tags:
    - Arduino
    - notepadd++
---

Notepad++ is my favourite editor for Arduino sketches, but it lacks the facility to compile and upload sketches directly to the Arduino boards. The usual procedure would be to save the sketch in Notepad++, switch to the Arduino IDE then compile/upload.

However, there is a plug-in for Notepad++ which enables you to run external commands – this post describes how to set it up for the Arduino IDE.

## Install the plugin

First ensure you have the latest version of Notepad++ (currently version 7.6.6) and select the menu item under ‘Plugins Admin…’.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2019/02/001.png)</figure>Then select the ‘NppExec’ plugin and click install.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2019/02/02.png)</figure>## Set up the commands to execute

After it installs, you’ll be able to select ‘Execute…’ from the new sub-menu (or simply press ‘f6’), which will display the ‘Execute…’ dialog box.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2019/02/03.png)</figure>The empty ‘Execute…’ dialog box will display.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2019/02/03a.png)</figure>Enter the following text into the command(s) window, ensuring the path points to **your** ‘arduino\_debug.exe’.

```
<pre class="wp-block-preformatted">set arduino_path = "C:\Program Files (x86)\Arduino\arduino_debug"<br></br>npp_save<br></br>inputbox "Enter the COM port of your Arduino (e.g., COM1):"<br></br>cmd /c $(arduino_path) --port $(input) --upload $(full_current_path)
```

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2019/02/NPP-04.png)<figcaption> Commands are remembered in the Execute window </figcaption></figure>Pressing ‘OK’ will allow you to enter the COM port (this is shown in the Arduino IDE ‘Tools’ menu).

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2019/02/05.png)<figcaption>Select a COM port</figcaption></figure> Press ‘OK’ and the process of compiliation and uploading will begin.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wordpress/wp-content/uploads/2019/02/06.png)<figcaption>A pane opens in Notepad++ and displays the Arduino compilaition progress</figcaption></figure>To VERIFY without uploading, the commands in the Execute window will be simpler with only 3 lines –

```
<pre class="wp-block-preformatted">set arduino_path = "E:\Arduino\arduino-1.8.9-PORTABLE\arduino_debug.exe"<br></br> npp_save<br></br> cmd /c $(arduino_path)  --verify  $(full_current_path)  --verbose-build 
```

## STORING COMMANDS

You can store the commands in the Execute window by using the **Save…** button. I named my stored command scripts ‘Upload’ and ‘Verify’. Stored commands will then be available in the drop-down box.

<figure class="wp-block-image">![](https://www.sheffieldhackspace.org.uk/wp-content/uploads/2019/06/2019-06-10_Notepad-options2.png)<figcaption>Your stored command scripts are selected here</figcaption></figure>## SUMMARY OF HOW TO USE IT

- Press f6
- If you have stored commands, select one from the dropdown box
- Click OK

## TIPS

- Keep the Arduino IDE open with your sketch (not required, but helpful).
- Ensure the Board type, COM port, etc. are correctly set in the Arduino IDE.
- In Arduino IDE select external editor (File -&gt; Preferences -&gt; Settings Use External editor
- Ensure the serial port monitor is not open.