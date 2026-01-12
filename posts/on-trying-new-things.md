---
title: "On Trying New Things"
date: "2026-01-12"
---

**Sometimes things don't work out.**

Like, for instance, spending two entire weeks completely refactoring a website only to make it worse in just about every way. That was my experience recently with Svelte. 

To be clear, the fault is *entirely* my own. I actually really liked Svelte. It was fun to work with, and much more intuitive than React. However, the actual technical side of the framework that I hadn't considered was the deployment aspect. For background, my personal website is static. What this means in layman's terms is that all of the markup that tells the browser how to display this website is rendered ahead of time. There's no server, just static HTML and JS rendered on the client.

There's a few reasons for that. My website and blog are personal and for personal use, so spinning up a backend and doing a server deployment would be overkill in the extreme for hosting a couple dozen blogposts. It would also require I spend more time on this website, which isn't something I'm keen to do. I'm a lot more interested in backend technologies and APIs, things like Go and Rust, for instance, than spending all my time debugging React.

That being said, React is also a lot more professionally relevant than Svelte. So, if I'm going to be at least spending *some* time working on frontend JS (TypeScript actually, but whatever), it might as well be React.

At some point, I'll figure out a way of serving Markdown posts from something more dynamic than a statically rendered frontend. I think trying to use SQLite or another DB like Postgres, at this point, is an insane level of premature optimization.

Honestly, I might never reach the point where that *isn't* overkill. But I did learn a lot from my foray into Svelte and using a DB to serve blog posts. It was a useful exercise at least, and it reminds me of some wisdom from the training world. Specifically on the idea that effort is never really wasted. Even if something didn't work out, you at least now have a bit more information on what *doesn't* work.

And kind of sucking at something is the first step towards being kind of good at something.
