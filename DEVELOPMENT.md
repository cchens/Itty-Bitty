# Development

*Note*: These instructions were written with a Linux system in mind. It should also work on OS X, but has not been tested on Windows. Windows users can ignore all the `sudo` keywords.

#### Prerequisites
- [Node.js](http://nodejs.org/)
- [Ruby](https://www.ruby-lang.org/en/)

#### Dependencies
To install the Node.js dependencies and the [SCSS](http://sass-lang.com/) preprocessor, run (from the root of the repo directory):

```shell
sudo npm install
sudo npm install -g sails
sudo npm install -g sails-migrations
sudo npm install -g nodemon
gem install sass
```

The `-g` flag installs the packages globally, so you can easily access them.

#### Configure PostgreSQL

*Note*: You'll need PostgreSQL 9.3.x. If you happen to be on Elementary OS, you can install it by following [these instructions](http://notes.kloop.kg/2014/11/11/install-postgresql-9-3-on-elementary-os/).

First, we need to configure PostgreSQL properly. Edit the `pg_hba.conf` file in `/etc/postgresql/9.3/main` so that the line that says

```
local   all             postgres                                peer
```

says

```
local   all             postgres                                md5
```

Then, restart Postgres by running:

```shell
sudo service postgresql restart
```

You should then be able to enter a `psql` console by running `psql --username=postgres`.

#### Migrate the database

We are using [barrels](https://github.com/bredikhin/barrels) to load fixtures from `test/fixtures`. The data is automatically loaded every time the server is launched (lifted). You will be prompted to choose how the tables/collections/sets are migrated (not migrated, attempt to keep existing data, or drop and rebuild).

You will need to change the password for the postgres user first to ensure it matches the configuration settings:

```shell
psql -U postgres -c "ALTER USER postgres PASSWORD 'postgres';"
```

To initialize the database:

```shell
sails-migrations db:create
```

or

```shell
createdb -U postgres ittybitty_dev
```

To drop the database, you could do it manually in `psql` or run:

```shell
sails-migrations db:drop
```

We are using [sails-migrations](https://www.npmjs.com/package/sails-migrations) for database migrations and [sails-postgresql](https://www.npmjs.com/package/sails-postgresql) as the adapter.

#### Running locally

Start a local server by running:
```shell
sails lift
```

You can then view the web app in your browser at http://localhost:1337/ (or http://0.0.0.0:1337/).

##### Watching for changes
If you're making changes to the code often and want to see the changes more or less immediately in your browser, you can use **nodemon** instead of running the regular `sails lift`. To run the application through nodemon while watching the directory contents, make sure you're in the root of this repo directory and run:

```shell
nodemon --watch app
```

You can view it in your browser at the usual location (port 1337). Any changes made to the core configuration of the app (e.g. anything in the `config` directory) will require you to manually restart the server, which can be done by typing `rs`.

#### Branching
Create branches to work on things. When you're done working on it, you can submit a pull request to merge it back into the `master` branch.

#### Reference
Some useful links:

- [Sails documentation](http://sailsjs.org/#!/documentation) (a lot of the links in the included comments in the app are out of date)
- [Waterline docs](https://github.com/balderdashy/waterline-docs) for writing queries
- [An example Sails tutorial](http://www.gazpachu.com/en/tutorial-how-to-build-a-multi-player-quiz-app-with-sails-js/)
- [A handy REST client for Chrome](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en)
