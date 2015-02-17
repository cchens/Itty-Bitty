# Team 1: Itty Bitty

### Overview

A [Sails](http://sailsjs.org) web application for learning about bitwise operations and conversion between numerical bases.


### Development

#### Prerequisites
- [Node.js](http://nodejs.org/)
- [Ruby](https://www.ruby-lang.org/en/)

#### Dependencies
From within the project directory, run:

- `npm install` for all Node.js dependencies
  - If you have difficulties with this: `sudo npm install`
- `gem install sass` for [SCSS](http://sass-lang.com/)

#### Running locally
Start a local server by running:
```
sails lift
```

You can then view the web app in your browser at http://localhost:1337/ (or http://0.0.0.0:1337/).

#### Branching
Create branches to work on things. When you're done working on it, you can submit a pull request to merge it back into the `master` branch.


### Deploying to production
We're using [Dokku](https://github.com/progrium/dokku) to deploy the website to a [DigitalOcean](https://www.digitalocean.com/) server.

To add your public key to the server, send it to the `sshcommand` command on the server. Assuming your public key is in `~/.ssh/id_rsa.pub` (contact the admin if not):

```
cat ~/.ssh/id_rsa.pub | ssh root@learnittybitty.com "sshcommand acl-add dokku <name>"
```

(Where `<name>` is any label you want for the key, probably your name)

Once your public ssh key has been added to Dokku, add the remote:

```bash
git remote add production dokku@learnittybitty.com:ittybitty
```

Then, you can deploy to the production server:

```bash
git push production master
```

On the server, PostgreSQL is used as the database. See [dokku-pg-plugin](https://github.com/Kloadut/dokku-pg-plugin).

The site is live at [learnittybitty.com](http://learnittybitty.com) or 104.236.254.212.
