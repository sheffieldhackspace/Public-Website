---
layout: page
title: Joining
permalink: /joining/
image: /assets/images/soldering-header.jpg
---
If you’re interested in what we do, get in touch below or just come along and join in!

Drop in anytime to one of our open evenings to get a feel of the Hackspace and see how things work:

{% include calendar.md %}

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

We are located [here](https://goo.gl/maps/EcVTWfknJ8XSRYax9) in Portland Works. Find the green door at the top of Randall Street S2 4SJ, and press the call button. We are in the courtyard on the ground floor.

<!-- Open Street Map map -->

<div class="responsive-iframe-container">
	<iframe width="800" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-1.477366089820862%2C53.36852420235157%2C-1.4702850580215456%2C53.37144960099323&amp;layer=mapnik&amp;marker={{ site.latitude }}%2C{{ site.longitude }}" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat={{ site.latitude }}&amp;mlon={{ site.longitude }}#map=18/{{ site.latitude }}/{{ site.longitude }}&amp;layers=N">View Larger Map</a></small>
</div>
