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
        const title = document.createElement("h4");
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