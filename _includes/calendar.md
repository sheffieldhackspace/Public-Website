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
<div id="next-days" style="margin-top: 1em; margin-bottom: 1em;"></div>

<script src="https://cdn.jsdelivr.net/npm/date-fns@4.1.0/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rrule@2.8.1/dist/es5/rrule.min.js"></script>
<script>
    const dateFormat = "EEEE, do 'of' MMMM";
    // calculate future days
    const lookahead = "for 3";
    const pairs = {
        "Monday": `Every Monday ${lookahead}`,
        "Thursday": `Every Thursday ${lookahead}`,
        "Wednesday": `Every month on the 1st Wednesday and 3rd Wednesday ${lookahead}`,
        "Saturday": `Every Saturday ${lookahead}`,
    };
    const allSessions = Object.values(pairs).map(v => 
        rrule.RRule.fromText(v).all()
    ).flat().sort((a, b) => a - b).slice(0, 5);
    console.log(allSessions);
    // display future days
    const nextDays = document.getElementById("next-days");
    const title = document.createElement("h4");
    title.textContent = "Next 5 Open Nights";
    title.style = "margin: 0; padding: 0;";
    nextDays.appendChild(title);
    const list = document.createElement("ul");
    allSessions.forEach(date => {
        const li = document.createElement("li");
        li.textContent = dateFns.format(date, dateFormat);
        list.appendChild(li);
    });
    nextDays.appendChild(list);

</script>