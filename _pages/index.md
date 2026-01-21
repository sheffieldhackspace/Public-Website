---
layout: page
title: Sheffield Hackspace
permalink: /
image: /assets/images/woodturning-header.webp
image_alt: "picture of person using a wood lathe"
---
Simply put, we're a [maker-space](https://en.wikipedia.org/wiki/Hackerspace). Together we're helping the people of Sheffield get involved in using tools for hobby projects in fields such as electronics, wood-working, textiles, machining and anything else you're interested in.

We’re always keen for people with a wide range of interests and skill levels to join, swap ideas, learn from each other, and build new things. Read more about what our some of our members get up to on the [blog](/blog) or find the answers to some commonly asked questions on our [wiki](https://wiki.sheffieldhackspace.org.uk/).

We have several open evenings every week to give folks who may be interested in what we do - and what facilities we can provide - a chance to come and have a look round and meet some of our members. All are welcome to all nights. If you have ever wondered what a "hackspace" is, or if you like to create, make or craft things, come and pay us a visit! Current open evenings are:

### Open nights

* Monday 6 - 9 pm
* Thursday 6 - 9 pm
* Saturday 2 - 6 pm

### Themed nights

<details class="themed-night" markdown=1><summary><span markdown=1>*Craft Night*</span>: Every 1st and 3rd Wednesday of the month, 6 - 9 pm</summary>

Alex H and Alfie will be opening up to do crafts, from sewing, clothes alterations, and upholstery, through origami, pom-pom making, felting, and more. Basically anything that doesn't involve a laptop!

Feel free to come to the space to do whatever you'd normally do, or join us in exploring craft and physical things! We are by no means experts but we can offer our knowledge and experience.

There are lots of needles, thread, and offcut material, so without bringing anything you could make a cushion, a clothes alteration, play with origami or pom-poms, or attempt a little leatherworking. Or, bring your own materials and give something crafty a go that you've been meaning to for a while!

Every 1st and 3rd Wednesday of the month from 6pm-9pm.

</details>

<!-- This will not show without js -->
<div id="next-days"></div>

After visiting, membership starts from £10 a month.

Key holders can let themselves in whenever they want for 24/7 access.

-----

<br>
<br>
<br>

{% include full-width-image.html content="/assets/images/soldering-header.webp" alt="picture of person using soldering iron" %}

<h2 id="page-title" class="intro-title" id="joining">Joining</h2>

If you’re interested in what we do, get in touch below or just come along and join in!

Drop in anytime to one of our open evenings to get a feel of the Hackspace and see how things work.

After visiting, membership is available at:

<!-- information from _config.yml -->
<!-- HTML as if markdown, it gets wrapped in <p> -->
<ul>
    {% for plan in site.membership_plans %}
    <li>
        {{plan.currency_symbol}}{{plan.value}} {{plan.billing_interval}} to {{plan.description}} ({{plan.name}})
    </li>
    {% endfor %}
</ul>

If you have any questions before you come along you can email us at [trustees@sheffieldhackspace.org.uk](mailto:trustees@sheffieldhackspace.org.uk).

We are located [here](https://goo.gl/maps/EcVTWfknJ8XSRYax9) in Portland Works. Find the green door at the top of Randall Street S2 4SJ, and press the call button.

![picture of building showing green door labelled as main entrance](/assets/images/pw-entrance.webp)

We are located very close to the Sheffield United ground and occasionally Saturday sessions clash with match days. This can make access more difficult. You can check the home fixtures list [here](https://fixtur.es/en/team/sheffield-united-fc/home).

<!-- Open Street Map map -->

<div class="responsive-iframe-container">
	<iframe width="800" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-1.477366089820862%2C53.36852420235157%2C-1.4702850580215456%2C53.37144960099323&amp;layer=mapnik&amp;marker={{ site.latitude }}%2C{{ site.longitude }}" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat={{ site.latitude }}&amp;mlon={{ site.longitude }}#map=18/{{ site.latitude }}/{{ site.longitude }}&amp;layers=N">View Larger Map</a></small>
</div>

-----

<br>
<br>
<br>

{% include full-width-image.html content="/assets/images/steel-cutting-header.webp" alt="picture of person cutting metal with chop saw" class="chopsaw" %}

<h2 id="page-title" class="intro-title" id="the-space">The Space</h2>

Sheffield Hackspace moved to larger premises in mid-2025. You can see some pictures of the space in the [new space blog post](new-space/), and here is a layout plan which is up to date to September 2025:

<img alt="SVG layout plans showing many rooms" src="/assets/images/layout_approximate_v3_2025-09-15.svg" style="max-width:100vw;">

If you want to see more… why not visit!

<script src="https://cdn.jsdelivr.net/npm/date-fns@4.1.0/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rrule@2.8.1/dist/es5/rrule.min.js"></script>
<script>
    const dateFormat = "EEEE, do 'of' MMMM";
    // calculate future days
    const lookahead = "for 2";
    const dayTimes = { 
        1: "6 - 9 pm", // monday
        2: "", // tuesday
        3: "6 - 9 pm", // wednesday
        4: "6 - 9 pm", // thursday
        5: "", // friday
        6: "2 - 6 pm", // saturday
        0: "" // sunday
    };
    const futureOpenDays = [ // natural language representation of what we want
        `Every Monday ${lookahead}`,
        `Every Thursday ${lookahead}`,
        `Every month on the 1st Wednesday and 3rd Wednesday ${lookahead}`,
        `Every Saturday ${lookahead}`,
    ];
    const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" }); // how we convert back to a string
    const msIn24h = 1000 * 60 * 60 * 24; // ms in a day
    // all future sessions and picks the 5 closest ones
    const allSessions = futureOpenDays.map(v =>
        rrule.RRule.fromText(v).all()
    ).flat().sort((a, b) => a - b).slice(0, 5);
    // makes a title element with desired text
    const makeTitle = (text) => {
        const title = document.createElement("h3");
        title.style.margin = 0
        title.style.padding = 0
        title.textContent = text;
        return title;
    }
    // makes span with desired text
    const makeSpan = (text) => {
        const span = document.createElement("span");
        span.textContent = text;
        return span;
    }
    // this is the "(in 2 days)   Monday, 25th of August @ 6 - 9 pm" element.
    const makeListItem = (date) => {
        const elapsed = Math.ceil((date - Date.now()) / msIn24h);
        const text = elapsed == 0 ? "Today" : rtf1.format(elapsed, "day"); 
        const dayTime = dayTimes[date.getDay()]; // the date.getDay() function returns 0-6, with sunday being the start of the week.
        const li = document.createElement("li");
        li.appendChild(makeSpan(`(${text})`));
        li.appendChild(makeSpan(`${dateFns.format(date, dateFormat)} @ ${dayTime}`));
        return li;
    }
    // makes the complete list with all the next 5 sessions
    const makeList = (allSessions) => {
        const list = document.createElement("ul");
        allSessions.forEach(date => list.appendChild(makeListItem(date)));
        return list;
    }
    const nextDays = document.getElementById("next-days");
    nextDays.appendChild(makeTitle("Next few nights"));
    nextDays.appendChild(makeList(allSessions));
</script>
<style>
#next-days {
    margin-top: 1em;
    margin-bottom: 1em;
}
#next-days h4 {
    margin: 0; 
    padding: 0;
}
#next-days li :nth-child(1) {
    color: rgba(0, 0, 0, 0.62); 
    width: 10ch; 
    display: inline-block;
}
</style>
