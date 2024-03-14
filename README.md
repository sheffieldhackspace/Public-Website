# Public-Website

This is the website for Sheffield Hackspace. The site is written using [Jekyll](https://jekyllrb.com/). Posts and updates from members are welcome just make a PR.

## Making changes

All changes should be made as a pull request to main. All changes require a PR review from one trustee.

### Using Docker

Install docker and docker compose.

To start the site run `docker-compose up` then navigate to `http://localhost:4000/Public-Website/` in your browser

To update the `gemfile.lock` if you have changed a plugin run `docker-compose run jekyll bundle update`
