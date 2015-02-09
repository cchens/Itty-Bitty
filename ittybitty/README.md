# Itty Bitty

A [Sails](http://sailsjs.org) web application for learning about bitwise operations and conversion between numerical bases.

## Prerequisites
- [Node.js](http://nodejs.org/)
- [Ruby](https://www.ruby-lang.org/en/)

### Dependencies
- All Node.js dependencies can be installed by running `npm install`
  - If you have difficulties with this: `sudo npm install`
- For [SCSS](http://sass-lang.com/): `gem install sass`


## Running locally
Run `sails test` from within the project folder. You can then view the web app in your browser at http://localhost:1337/ (or http://0.0.0.0:1337/).


## Deploying
First, set up a git remote:

```bash
git remote add production dokku@104.236.254.212:ittybitty
```

Then, you can push to the production server:

```bash
git push -u production master
```

*Note*: you must have your SSH keys set up on the server first.
