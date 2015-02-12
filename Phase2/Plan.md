# Phase 2 plan

This document contains revised user stories and the release and iteration plan for phase 2.


## User Stories

**Priority scale:**

1. vital feature, must be in MVP

2. important feature, but can be included in a later release

3. nice feature that can be put off until even later


**Difficulty scale:**

1. should take 1 person about 1 week to implement

2. should take 1 person about 2 weeks to implement


Each user story is followed by *(priority, difficulty)*.


---


As Jim, I want to learn more through **interactive online tutorials** that **presents material and allows me to answer questions interactively and receive feedback** via a truly hands-on approach with the actual material so I can learn more about the things I’m interested in. (1, 2)

As Oak, I want my students to learn how to quickly **convert between numerical bases (decimal, binary, and hexadecimal)** so that they can naturally do so and be able to more efficiently do their schoolwork. (1, 1)

As Oak, I want my students to **learn about and practice using bitwise operators (and, or, xor, shift)** so that they don’t have to keep using trial and error to achieve what they want to do. (1, 1)

As Sarah, I like being able to **pick up from where I left off** by being able to login to Itty Bitty and immediately being able to see which levels I have completed and which I have yet to do. (2, 1)

As Sarah, I want to have a **quick overview of the bitwise operators or base conversion** as I work on an assignment. (2, 1)

As Jim, I would enjoy **randomly generated daily challenges** so I would be motivated to keep checking LearnIttyBitty.com even when I completed the tutorials. (3, 2)

As Sarah, I would like the option of **skipping the "learning" section** and go straight to the exercises because I've already learned the material in school and all I need is practice. (2, 1)

As Oak, I want to see **statistics on what students have trouble with** so I can emphasize on those concepts during my lectures. (3, 2)

As Sarah, I like being able to **learn what Itty Bitty is from the landing page**, where I can then quickly login or register for an account. (2, 1)

As Jim, I would like to be able to **register and login quickly by connecting to my existing social network accounts**, such as Facebook or Twitter. (2, 1)

As Jim, I like that Itty Bitty is **web-based**, so I can **access it using any browser on any device, and having it scale nicely on any screen size**. (1, 2)

As Oak, I would like an **optional “10-foot UI”** so that when I use Itty Bitty during my lectures, the students sitting in the back of the room can also easily see what I’m doing. (3, 1)

As Jim, I like how the **levels increase in difficulty**, letting me progressively learn about the topic with a solid background first. (1, 1)

As Jim, I like how Itty Bitty first teaches **how to convert from decimal** (which I already know) **to other bases**, and then between the new ones. (1, 1)

As Jim, I enjoy playing video games and like the “gamified” aspect of Itty Bitty with its achievements, levels, and points system, which encourages me to play/learn more. (3, 1)

As Jim, I like **earning points by completing levels** and aiming for the top of the **leaderboards**. The competitiveness keeps me motivated to keep learning on Itty Bitty. (3, 2)

As Jim, I like **earning achievements** when completing levels. (3, 1)

As Jim, I like to **customize my user icon** to look cool on the leaderboards. (2, 1)

As Jim, I like **sharing to social networks** my progress on Itty Bitty. (3, 1)

As Sarah, I like being easily able to **easily choose which topic to work on** (bitwise operations or numerical base conversions). (1, 1)

As Oak, I like how **levels are unlocked as students go along**, which reinforces the content. (3, 1)


## Release and Iteration Planning

Features that we will be excluding from the first release include user accounts and associated features such as achievements, points, saved level state, and registration/login via social networks such as Facebook, Twitter, or Google+. Due to the timeframe of the first release (3 weeks), we will be primarily focusing on the more vital core features necessary for creating Itty Bitty, including the actual tutorial system.

For the first release, we will be setting up a basic web app using [Sails.js](http://sailsjs.org/) and planning out a proper database schema (for the entire system -- not just the parts relevant to the first release, and will be using PostgreSQL), which will be running on a DigitalOcean droplet configured for [learnittybitty.com](http://www.learnittybitty.com). A tutorial system that can display information (the “course material”) to users and accept and validate the users’ input will then be worked on. In the first iteration, tutorial content (for both subjects -- bitwise operations and conversion between numerical bases) will be drafted. For the rest of the time allotted for working on the first release, the aforementioned features will be improved upon and tweaked to ensure a good base for future work. If there’s time, some preliminary work will be done for features such as users (with social network integration), achievements, and points/leaderboards.
