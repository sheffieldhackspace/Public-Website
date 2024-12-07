---
title: "Learning how to build guitar effect pedals #1"
date: '2024-12-07T00:00:00+01:00'
author: dredzik
layout: post
permalink: /learning-how-to-build-guitar-effect-pedals/
excerpt: "I have been playing guitar since I was 15, but I never could make it a routine. This changed in
2020 when the plague hit and I discovered Yousician. The gamification of the experience gave my
ADHD the dopamine hits I was craving. I was hooked."
---
## Background

I have been playing guitar since I was 15, but I never could make it a routine. This changed in
2020 when the plague hit and I discovered Yousician. The gamification of the experience gave my
ADHD the dopamine hits I was craving. I was hooked.

Since then I have been reading a lot about all kinds of guitar equipment. I have experimented with
different types of guitar pickups; analog and digital effects; tube, solid state, and amp modellers.
After two years of swapping gear, I have settled on the rig I want.

It is simple. I don't have a great ear and I just wanted a simple setup, that would still be capable of
generating "nice".

## Short Circuit

In May of 2024, JHS Pedals published a video on their channel called "How To Breadboard An
Electro Harmonix LPB-1 Boost Pedal" (<https://www.youtube.com/watch?v=zQIXh0ncphc>). I
watched it on premiere and saved it for later. "Later" arrived in November of 2024.

I have ordered the kit used in the video, alongside of the special breadboard designed for
developing guitar effects. I assembled it using the manual, and it worked! It was fun.

![picture of electronics breadboard with lots of components attached, namely resistors, capacitors, and other things. several audio jacks are connected.]({{site.baseurl}}/assets/blog/2024-12-07-learning-how-to-build-guitar-effect-pedals/1.jpeg)

## But wait, there is more

That was not enough for me. I really wanted to understand what each element and each section
of the circuit does. I watched the video again, and started experimenting with different values of
the components.

I also gotten myself an oscilloscope, which turned out to be a great decision, as it allowed me to
observe the transformation of the audio signal in every part of the circuit. I cannot overstate the
usefulness of this tool during learning and development.

![picture of oscilloscope, showing an audio signal]({{site.baseurl}}/assets/blog/2024-12-07-learning-how-to-build-guitar-effect-pedals/2.jpeg)

## Make it permanent

Next step was to learn how to transform the breadboard into an actual permanent circuit. I
discovered Adafruit permanent protoboards and decided to start with them, as they have the
same layout as a breadboard but you're to solder them.

Before soldering I have tweaked the circuit on the breadboard to make it as tight as possible. I
have soldered a few versions, each time discovering a new obstacle to overcome and learn from.

Version 3 had all of the inputs / outputs / controls moved out of the board using wiring.

![picture of electronics board, with several components soldered to it. the name "adafruit" is visible.]({{site.baseurl}}/assets/blog/2024-12-07-learning-how-to-build-guitar-effect-pedals/3.jpeg)
![picture of two electronic boards connected together with jumper cables]({{site.baseurl}}/assets/blog/2024-12-07-learning-how-to-build-guitar-effect-pedals/4.jpeg)

## Next steps

I wanted to assemble the same circuit again in a guitar pedal form, however I decided against it. Instead I will build and analyse a new circuit, and hopefully build a pedal out of it.
