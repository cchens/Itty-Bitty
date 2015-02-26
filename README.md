# Team 1: Itty Bitty

### Overview

A [Sails](http://sailsjs.org) web application for learning about bitwise operations and conversion between numerical bases.



### Development


#### Prerequisites
- [Node.js](http://nodejs.org/)
- [Ruby](https://www.ruby-lang.org/en/)


#### Dependencies
To install the Node.js dependencies and the [SCSS](http://sass-lang.com/) preprocessor, run (from the root of the repo directory):

```shell
[sudo] npm install
gem install sass
```

#### Running locally
Start a local server by running:
```shell
sails lift
```

You can then view the web app in your browser at http://localhost:1337/ (or http://0.0.0.0:1337/).

##### Watching for changes
If you're making changes to the code often and want to see the changes more or less immediately in your browser, you can install **nodemon**:

```shell
[sudo] npm install -g nodemon
```

To run the application through nodemon while watching the directory contents, make sure you're in the root of this repo directory and run:

```shell
nodemon --watch app
```

You can view it in your browser at the usual location (port 1337). Any changes made to the core configuration of the app (e.g. anything in the `config` directory) will require you to manually restart the serverr.


#### Branching
Create branches to work on things. When you're done working on it, you can submit a pull request to merge it back into the `master` branch.



### Deploying to production
We're using [Dokku](https://github.com/progrium/dokku) to deploy the website to a [DigitalOcean](https://www.digitalocean.com/) server.

To add your public key to the server, send it to the `sshcommand` command on the server. Assuming your public key is in `~/.ssh/id_rsa.pub` (contact the admin if not):

```shell
cat ~/.ssh/id_rsa.pub | ssh root@learnittybitty.com "sshcommand acl-add dokku <name>"
```

(Where `<name>` is any label you want for the key, probably your name)

Once your public ssh key has been added to Dokku, add the remote:

```shell
git remote add production dokku@learnittybitty.com:ittybitty
```

Then, you can deploy to the production server:

```shell
git push production master
```

On the server, PostgreSQL is used as the database. See [dokku-pg-plugin](https://github.com/Kloadut/dokku-pg-plugin).

The site is live at [learnittybitty.com](http://learnittybitty.com) or 104.236.254.212.
