## Sprint summaries

*Note*: A lot of discussion happened via Slack chat due to scheduling difficulties amongst the group members. The logs are available in the Phase 2 folder, but they aren't processed to be very readable...

### Monday, February 9th**  
Location: Tutorial Room

Not an official scrum meeting as we haven't begun Phase 2 yet. At our TA's request we're writing more user stories so that we can properly coordinate our scrums. We intend to coordinate the writing of these user stories on Google Docs and then push them to GitHub when they are fully complete, as we did with our phase 1. **Eric Snyder** was appointed as our scrum master, and thus is currently writing this document. We decided our first proper meeting can be on **Thursday, February 11th** when our Phase 2 will be approved.

### Friday, February 13th
Location: Laptop Lab (BA 2270)

Planning Meeting #1

To do:
- Cindy: Database schema
- Eric, Christina: Tutorials
- Catherine, Inks: Display tutorial content (3 types) & topic/level selection menus
- Ben: tutorial system (display content with Q&A exercise)
- Sharon: Work on all screen sizes (responsive design) and browsers (ensure compatability)
- Eugene: Setup server
- Ben: Konami code

Tech stack:
- Sails.js (depends on Node.js), with PostgreSQL database
- Running on a DigitalOcean server with Dokku
- Tutorials stored as raw text within database?
  + Need to explore options

### Monday, February 23rd
Location: Tutorial

What was done:
- Not much, most people were busy studying for midterms and/or in different countries such as China or USA

To do:
- Finish setting up server (SASS support, database)
- Start drafting tutorials (1 each?)
- Start prototyping tutorial system (display material, prompt for answer, validate answer, move on appropriately)

### Monday, March 2nd
Location: Tutorial

What was done:
- App set up nicely, ready for development locally
  + Landing page done
- Models done
- Some demo views/controllers added so others can more easily understand how to work with Sails
- Tutorial content and cheat sheets written
- Rough mockup ideas for menus/tutorial systems

To do:
- Add data to database
- Tutorial system
- Topic/level menus


## GitHub conventions
- Each issue is roughly some feature that needed to be implemented
- Default tags are used (e.g. bug, enhancement)
- Tag for "Current sprint" used to keep track of what needed to be done during a sprint
- Milestones for Phase 2 and Phase 3 allow for more filtering
- Since GitHub only allows for 1 person to be assigned to an issue, users were simply tagged in the issue description/comments. We may switch to using tags for this next phase.


## Other tools
- GitHub is linked to our Slack chat, so we can get all the commit and issue activity there
- We also have a Trello, but it has become redundant now that we're using GitHub issue tracking


## Other decisions/conventions
- Eric is our scrum master, as it allows for consistant meetings that are done fairly quickly
