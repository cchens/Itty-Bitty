# Deploying to production

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
