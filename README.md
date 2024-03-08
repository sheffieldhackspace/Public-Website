# Public-Website

This is the website for Sheffield Hackspace. The site is written using [Jekyll](https://jekyllrb.com/). Posts and updates from members are welcome just make a PR.

## Making changes

All changes should be made as a pull request to main. All changes require a PR review from one trustee.

### Using Docker

Install docker and docker compose.

To start the site run `docker-compose up` then navigate to `http://localhost:4000/Public-Website/` in your browser

To update the `gemfile.lock` if you have changed a plugin run `docker-compose run jekyll bundle update`

### Using Ruby on Linux

#### Install Ruby + Gems

```bash
sudo apt-get install ruby-full
gem install bundler
bundle config set --local path 'vendor/bundle'
bundle install
```

#### Serve hot-reloading website

This is the same command used in [the docker compose file](./docker-compose.yml).

```bash
bundle exec jekyll serve --watch --force_polling --verbose
```
