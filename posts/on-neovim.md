---
title: "On Neovim"
date: "2026-01-21"
---

**I use Neovim, btw.**

I've been using Neovim as my primary IDE (if it can be called that) for a little more than a year now, and in that time I've gotten enough of a handle on it to be able to write a short bit. This isn't a tutorial, it's my experience working with something that has a learning curve higher than other tools, but it's my opinion that that learning curve is more than worth it.

If you read articles about Neovim, often the most significant point of approval will be the flexibility. You can tweak and adjust and make plugins and script the behavior of your development tools to be as custom as you'd like, and many people do. That is true, but if I'm being honest, flexibility has never been the biggest appeal to me. I think people can overly fret about getting things perfect and waste a lot of time trying to hit a target that doesn't exist. It's not that there's no value in dialing things in, but rather I think people overestimate how much dialing in a tool can save time versus just jumping in with a tool that's good enough. 

Don't get me wrong though, I *love* Neovim. It's just not for the flexibility. I forked [Kickstart](https://github.com/nvim-lua/kickstart.nvim) and just ran with it from there, adjusting things as they came up. The thing I like about Neovim is the mentality that it, by necessity, creates. When something went wrong in my environment while using something like VS Code or IntelliJ, my solution was - almost always - to Google it. Now though? My first solution is to go look at my init.lua file. That's where my configurations are, and 90% of the time when something is screwed up, I'm the guy who screwed it, which means I'm the guy that has to unscrew it. I think that's a valuable skill to have and a valuable instinct to cultivate. The instinct to dig a little deeper before jumping down a rabbit hole on the internet. I still go on those rabbit holes, sure, but these days I'm a lot more likely to find the right rabbit hole before I go digging. 

Another nice thing about Neovim is Vim motions. These have been discussed ad nauseum as very helpful, and that's because they are. It takes getting used to, but once you've got it down the ability to put code down without having to pick up your hands from the keyboard it makes a huge difference. Maybe it's how I'm wired, but something about it keeps me engaged with what I'm doing, almost like a game. Vim motions combined with [nvim-tree](https://github.com/nvim-tree/nvim-tree.lua) takes that effect to the stratosphere, making it so that I don't have to touch a mouse when I code, often ever. Neovim also has a client built-in for [Language Server Protocols](https://neovim.io/doc/user/lsp.html), so don't think you have to give up modern code completion or intellisense either.

There's a lot of other things to like about Neovim: it keeps you in the terminal, it's extensible with Lua, and it's got a large community supporting it, just to name a few. I don't think it's a one-size-fits-all solution, I don't think those exist anyway, but it is a *good* solution, which is more than some IDEs I've used (looking at you PyCharm ( ¬ _¬) ).
