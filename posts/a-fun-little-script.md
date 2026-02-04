---
title: "A Fun Little Script"
date: "2026-02-04"
---

**Sometimes, things line up really nicely.**

This blog post is about a script I wrote over the weekend. It's not a very big script, nor is it very complex, but it is cool and it is fun.

As you may deduce from looking around this site, I consider myself a fitness enthusiast. At one point, I was very serious about strength training (I even competed in a few strongman and weightlifting competitions). I'm less so these days, but still train with weights and run 6+ days a week. The link to my old training log on blogspot might as well be dead, as I haven't updated that place in years, though I've continued to train during that time. Thus, it's been a to-do item of mine for awhile now to transition my training log to actually be on *this* site as well. 

It's a more long-term goal, mostly because I'm not sure how long I can keep adding static Markdown files here. I can't think of any technical limitations to it, but just because I'm not aware of any doesn't mean there aren't any, if that makes sense.

In any case, my thought process to moving my training log here is to just do something similar to what I already do with this blog: process Markdown files through a static Next.js build. The problem with that is that there's no way in hell I'm going to sit down at my laptop and write a full Markdown file *every single time I workout*. I do some type of training almost every day of the week, and it would just be impossible to keep up with.

Well, as luck would have it, the team responsible for [MacroFactor](https://macrofactorapp.com/), the food logging app I use (it is, without a doubt, the best food logger out there), recently came out with a Workouts app that brings a lot of the insight and UX that I loved about MacroFactor into a lifting app.

I'm not a big app guy in the gym, generally speaking. Even when I updated my blogspot training log regularly, I would just copy my paper workout logs into the website. In this case though, I really trust the team behind MacroFactor to make an exceptional product, so when a friend asked me if I had any app recommendations, I sent him there. His review of it was so glowing, I had to take a look. His review was accurate. MacroFactor Workouts is awesome, and I immediately knew it was perfect for this phase of my training career where I really just want to not think too hard about things and stay in decent shape, at least until I decide I want to take things seriously in the gym again.

Now, for the crux of this post: *the app lets me export my workout data*.

Fantastic. Perfect. Exactly what I needed, and the gears started turning. I can convert this export to a .CSV, then write a script to process the data into separate Markdown files for each workout. 

Here's the GitHub Repository for the script that does just that: [mf2md](https://github.com/lwcreel/mf2md)

It was a lot of fun, and in the future I'll do a technical write-up on the different iterations. I wrote it in Rust, which I've been learning and loving, and it does exactly what I want it to do, breaking out a .CSV export into multiple separate Markdown files for each workout. There's some kinks, mostly with the formatting of supersets, but I can work those out in the future if I want.

Ultimately, whether or not I end up putting my training log as a separate tab on this site is a separate question. If I do, I know exactly how I'll get the Markdown files without having to write them manually.
