---
title: "Month updates - March & April 2026"
date: '2026-05-06T00:00:00+00:00'
author: alifeee
layout: post
permalink: /month-updates-march-april-2026/
excerpt: 'What have members of Sheffield Hackspace been up to this two-months?<br> ![](/assets/blog/2026-05-06-month-updates-march-april-2026/robin_framing_1.webp)'
---
<style>
.gallery {
  line-height: 0;
  column-count: 2;
  column-gap: 0px;
}
.gallery > * {
  max-width: 100%;
  margin: 0;
}
p:has(img), .gallery {
  margin: 0;
}
.gallery img {
  width: 100% !important;
  height: auto !important;
  min-height: 2rem;
}
iframe, video {
  display: block;
  margin: 0.5rem;
  max-width: 100%;
  width: auto;
  height: auto;
}
p {
  margin-top: 1rem;
}
</style>

What have members of Sheffield Hackspace been up to this two-months?

Let's find out what else some members have been up to!

1. [2026 AGM](#2026-agm)
2. [second and third Repair Cafés !](#second-and-third-repair-cafés-)
3. [Adam](#adam)
   1. [hacking into bus signs](#hacking-into-bus-signs)
   2. [fixing a car leak](#fixing-a-car-leak)
   3. [organising wire scraps with 3D printing](#organising-wire-scraps-with-3d-printing)
4. [Robin](#robin)
   1. [frame-making workshop](#frame-making-workshop)
   2. [new PPE caddy](#new-ppe-caddy)
   3. [fixing adjustment wheel](#fixing-adjustment-wheel)
5. [Saphy](#saphy)
   1. [medieval belt](#medieval-belt)
   2. [helping fix a wristwatch at the repair café](#helping-fix-a-wristwatch-at-the-repair-café)
6. [Richard](#richard)
   1. [Adjustable TTP223 touch sensor using an improvised capacitor.](#adjustable-ttp223-touch-sensor-using-an-improvised-capacitor)
   2. [A large touch panel using cheap TTP223 and sensing wires.](#a-large-touch-panel-using-cheap-ttp223-and-sensing-wires)
7. [Tom](#tom)
   1. [making a bag with EMF fabric](#making-a-bag-with-emf-fabric)
   2. [making knives](#making-knives)
   3. [telescope](#telescope)
8. [Ellie - project: Bake a Cake](#ellie---project-bake-a-cake)
9. [alifeee](#alifeee)
   1. [fitting a new bike derailleur and shifter](#fitting-a-new-bike-derailleur-and-shifter)
   2. [trying out an embroidery machine](#trying-out-an-embroidery-machine)
   3. [hosting a talk at Front End Sheffield](#hosting-a-talk-at-front-end-sheffield)
   4. [replacing the sewing machine needle threader](#replacing-the-sewing-machine-needle-threader)
   5. [writing blog posts](#writing-blog-posts)
   6. [trying out the new overlocker](#trying-out-the-new-overlocker)
   7. [fixing a broken tent](#fixing-a-broken-tent)
   8. [making a trident prop](#making-a-trident-prop)
10. [Jon](#jon)
    1. [DIY wooden garden furniture](#diy-wooden-garden-furniture)
    2. [PID-controlled kiln](#pid-controlled-kiln)
11. [Dave - the Milo Mill goes on tour](#dave---the-milo-mill-goes-on-tour)

## 2026 AGM

In March, Sheffield Hackspace has its 12th AGM, with a cake to boot!

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/all_agm_1.webp)
</figure>

## second and third Repair Cafés !

Since [last time](/month-updates-january-february-2026/), two more repair cafés have run
at Sheffield Hackspace. You can find out more about the repair café on:
<https://www.harlandworks.co.uk/repair-cafe>

Here are some pictures from the 2nd and 3rd repair cafés, showing people repairing
kettles & chairs, sharpening knives, and the repair of a wishing well!

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/all_repaircafe_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/all_repaircafe_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/all_repaircafe_3.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/all_repaircafe_4.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/all_repaircafe_5.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/all_repaircafe_6.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/all_repaircafe_7.webp)
</figure>

## Adam

### hacking into bus signs

Adam has continued their [sign adventures](/month-updates-january-february-2026/#bus-signs), this time
adding more connectors, speeding up the refresh rate, and connecting the signs to music with MIDI !

> Bus signs status update: Well. That was fast. 
> 
> - Bus signs are now running on ESP32C3
> - I extracted the dot-widget library for use across several projects - feel free to use it as well
> - Bus signs are now running the same widget server as the train signs (with slightly different API given their nature)
> - Given the construction, they are way more readable at high speeds
> I have replaced the MicroMaTch connector plug with an IDC one
> 
> Todo:
> 
> - Improvements to the dot-widget library animations
> - Allow the driver to connect multiple lines into one display
> 
> I am now forwarding midi messages between displays.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_3.webp)
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v2_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v2.webm" type="video/webm">
</video>
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v4_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v4.webm" type="video/webm">
</video>
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v0_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v0.webm" type="video/webm">
</video>
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v3_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v3.webm" type="video/webm">
</video>
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v1_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v1.webm" type="video/webm">
</video>
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v5_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/adam_sign_v5.webm" type="video/webm">
</video>
</figure>

### fixing a car leak

Adam's been investigating the engineering excellency in their car:

> In today's episode of "Why is there a swimming pool in my car?":
> A gap between elements is making the water drip into the trunk.
> We dismantled the rear bumper plastic, cleaned up all the gunk,
> and are now waiting for it to dry before applying a sealant in that space.
> Last picture demonstrates the same place on the other side of the car, where there is no leak.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/adam_wetcar_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/adam_wetcar_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/adam_wetcar_3.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/adam_wetcar_4.webp)
</figure>

### organising wire scraps with 3D printing

> Started organising the 5 million wire scraps I have accumulated over the years

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/adam_wirescraps_1.webp)
</figure>

## Robin

### frame-making workshop

> Over the last few weeks I instructed a few intrepid souls on a picture frame workshop,
> during which I attempted to walk through some of the techniques I've picked up.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/robin_framing_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/robin_framing_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/robin_framing_4.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/robin_framing_5.webp)
</figure>

### new PPE caddy

> For a while now PPE has been stored in various places around the woodshop,
> sometimes a bit out of sight. I delved into the scrap bin and threw together
> a caddy for the hearing and eye protection to hopefully make them easier to find and use.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/robin_ppe_1.webp)
</figure>

### fixing adjustment wheel

> The table saw height adjustment wheel needed a replacement pin to hold it to the shaft.
> A bit of surgery on a nail proved to be an appropriately hack-y solution.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/robin_wheel_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/robin_wheel_1.webp)
</figure>

## Saphy

### medieval belt

> I cut and finished a leather strap, sewed in a buckle and then added
> decorative riveted metal bits

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/saphy_belt_1.webp)
</figure>

### helping fix a wristwatch at the repair café

> I'm gluing on the baguettes that mark the hours on the face but I didn't
> really do any other fixing for it, I just got summoned to manipulate the tweezers

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/saphy_watch_1.webp)
</figure>

## Richard

Richard has made two YouTube videos this month(s):

### Adjustable TTP223 touch sensor using an improvised capacitor.

<iframe width="1350" height="759" src="https://www.youtube.com/embed/sz4BQjFCjYE" title="Adjustable TTP223 touch sensor using an improvised capacitor." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### A large touch panel using cheap TTP223 and sensing wires.

> Touch-pad proof of concept. I had to make my own capacitors to reduce the sensitivity of
> the sensors as they were triggering each other, twinkling like a Christmas tree!
> 
> If anyone fancies implementing a touch surface on the LED table in room C, here is a starting
> point. I intend to experiment and develop the touch surface hardware a bit further before losing interest...

<iframe width="1350" height="759" src="https://www.youtube.com/embed/qQ2w5MnCcc4" title="A large touch panel using cheap TTP223 and sensing wires." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<figure class="gallery" markdown="1">
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/richard_touchpad_v1_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/richard_touchpad_v1.webm" type="video/webm">
</video>
</figure>

## Tom

### making a bag with EMF fabric

> When you remember you have EMF fabric, and it’s an [EMF](https://www.emfcamp.org/) year.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_emfbag_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_emfbag_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_emfbag_3.webp)
</figure>

### making knives

> It’s knife time of year again.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_3.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_4.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_5.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_6.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_7.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_8.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_9.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_10.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_11.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_12.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_13.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_14.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_15.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_knives_16.webp)
</figure>

### telescope

Tom's been taking exposures of the night sky, using astrophotography tricks and a
custom-made astrophotography telescope, specifically this one:

- <https://www.printables.com/model/1179616-dbs-114-v2-astrograph-3d-printable-astrophotograph/files>

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_telescope_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_telescope_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_telescope_3.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/tom_telescope_4.webp)
</figure>

## Ellie - project: Bake a Cake

Ellie had a go at baking and decorating :]

> Project: Bake a Cake is a resounding success I'd say 🥳

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/ellie_cake_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/ellie_cake_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/ellie_cake_3.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/ellie_cake_4.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/ellie_cake_5.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/ellie_cake_6.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/ellie_cake_7.webp)
</figure>

## alifeee

### fitting a new bike derailleur and shifter

After a few years of bumps and whatever-my-bike-goes-through, my back derailleur
had started not shifting gear properly. Looking at it, it seemed to be due to a
weak spring.

I took it to [Sheffield Community Bike Project](https://scbp.org.uk/) (SCBP) to see if they had
any spare parts, and to ask them advice about changing it.

I ended up buying a 2nd hand (new to me) 7-speed derailleur and shifter (the volunteers at
SCBP helped me pick one out of their 2nd hand drawers), and (again with much volunteers' help)
fitted them to my bike.

They're doing great! SCBP's "supported DIY" model is really nice.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_bike_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_bike_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_bike_3.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_bike_4.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_bike_5.webp)
</figure>

### trying out an embroidery machine

I recently got to try using a friends' embroidery machine, which was very cool. I did some test designs (fills, lines, etc), and finished it off by making the robot from [my favourite robot picture](https://alifeee.net/favourites/#images).

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_5.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_4.webp)
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_v2_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_v2.webm" type="video/webm">
</video>
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_v3_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_v3.webm" type="video/webm">
</video>
</figure>

I came back a couple of weeks later to make some patches for a [group hitchhiking trip](https://alifeee.net/blummit/) (we got one each).

I followed some guidance from the University of Geneva's Edutech wiki, on the pages '[Embroidery Patch](https://edutechwiki.unige.ch/en/Embroidery_patch)' and '[InkStitch - Embroidery Patch](https://edutechwiki.unige.ch/en/InkStitch_-_embroidery_patch)'.

In effect, I cut a circle of felt and stuck it to the backing with fabric glue, then used the embroidery machine to sew: a tacking stitch to stick the patch down; a satin stitch around the edge; a blobby bit; and the text. I didn't have fancy backing, so I just carefully cut it off with scissors. I fit a few patches in each frame. You can see some of those processes here:

<figure class="gallery" markdown="1">

![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_10.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_8.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_13.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_14.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_15.webp)
</figure>

I was very happy with the finished patches. I ended up (in the luck-of-the-draw) getting the
top left one, which is now sewn onto my backpack.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_6.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_7.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_16.webp)
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_v4_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_embroidery_v4.webm" type="video/webm">
</video>
</figure>

### hosting a talk at Front End Sheffield

I did a talk at Front End Sheffield (FES) in March, titled "Microhacking the Modern Web". The blurb was:

>  A series of short talks – to match our modern short attention spans – about modifying websites and web-technology to make them more usable and accessible by all. Topics will journey through local events websites, past Internet-of-Things-enabled weighing scales, via free company-bus schemes, around the Xbox game pass, by web-calendars, and end at $subject_to_change.
> 
> For each project, we will ask: what did the website fail to do? how did we make it better? how can other people make use of it in a non-technical way? and – what were the existing solutions? Talks will not be related through the technologies used, but through the hobby-based, DIY nature of them, and how small technologies affect the less-technical human experience. No AI has been, is, or will be, involved.

You can find the slides on my [talks and workshops page](https://alifeee.net/talks-and-workshops/#microhacking-the-modern-web).

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_festalk_1.webp)
</figure>

### replacing the sewing machine needle threader

I replaced the sewing machine "auto-threader", as ours was bent beyond repair.
Now it's very easy to thread the needle. Just press, and pull!

<figure class="gallery" markdown="1">
<video controls preload="none" loop crossorigin poster="/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_needlethreader_v1_PREVIEW.webp" style="max-height: 40rem;">
  <source src="/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_needlethreader_v1.webm" type="video/webm">
</video>
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_needlethreader_1.webp)
</figure>

### writing blog posts

I wrote two blog posts in April, both about similar things. The first, more technical and
hack-y about using your own location tracking. The second about this in action. You can read
them on

- <https://blog.alifeee.net/2026/04/owntracks/>
- <https://blog.alifeee.net/2026/04/blummit2grenoble/>

### trying out the new overlocker

Kindly, a hackspace member has lent their overlocker for use at the hackspace. We've been
giving people inductions – it looks quite complicated but if you've used a sewing machine
there are (believably) a lot of similarities. Just some complications getting all the
threads in the right places.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_overlocker_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_overlocker_1.webp)
</figure>

One of my test goes with the overlocker was edging a nice tea-towel that had frayed.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_overlocker_4.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_overlocker_3.webp)
</figure>

### fixing a broken tent

Probably the biggest thing I've had (or will ever have) under the sewing machine, I put
a new (maybe waterproof, maybe not) hat on a broken teepee.

The purple fabric was a patch of tent-material that my neighbour gave me after seeing
me in the street inspecting what the damage was.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_tent_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_tent_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_tent_3.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_tent_4.webp)
</figure>

### making a trident prop

For a costume party, I made a trident. I found two large, thick, cardboard tubes at
[Scrap Dragon](https://www.scrapdragonsheffield.com/) in Sheffield, and designed
and 3D printed an attachment. I cut the cardboard to size, glued it with hot glue,
and painted it black with acrylic paint. I was quite impressed how sturdy it was
in the end :]

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_trident_1.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_trident_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_trident_3.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_trident_4.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_trident_5.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/alifeee_trident_7.webp)
</figure>

## Jon

### DIY wooden garden furniture

> My latest projects - garden planter and bird table from reclaimed wood,
> just when the RSPB tell us not to feed the birds!
> 
> With a bit of good weather I got round to working on a couple of garden projects -
> both are made with reclaimed wood and materials from an old futon and some leftover decking.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/jon_garden-wood_2.webp)
![](/assets/blog/2026-05-06-month-updates-march-april-2026/jon_garden-wood_1.webp)
</figure>

### PID-controlled kiln

> Our old second-hand kiln had a kiln sitter which has little flexibility.
> With a cheap PID controller and SSR I created a controller that allows us to
> have several programmes with defined temperature ramps and soaks. After some initially
> tuning of the PID controller and tweaking some of the many potential settings the first
> couple of firings have worked well.

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/jon_pid_1.webp)
</figure>

## Dave - the Milo Mill goes on tour

Dave took our Milo mill for a little holiday to [SMMRF](https://www.sanjaymortimerfoundation.org/):

> The Millennium Machines and Desktop Machine Shop teams would like to thank Sheffield Hackspace
> for lending their Milo v1.5 to be displayed at SMRRF 2026. We ended up with a fantastic display
> showcasing all the currently available Milo versions from v1.5 to V2! As always it was a fantastic
> show and we would recommend it if you get a chance to go visit it next year!

<figure class="gallery" markdown="1">
![](/assets/blog/2026-05-06-month-updates-march-april-2026/dave_milo_1.webp)
</figure>

<!-- omit in toc -->
## That's all

That's all for this month! Remember, you can:

- come and visit the space! <https://www.sheffieldhackspace.org.uk/calendar/>
- learn more about on joining on the wiki: <https://wiki.sheffieldhackspace.org.uk/>
- add your own items to next month's month update: <https://github.com/sheffieldhackspace/month-updates>

Until next time :)
