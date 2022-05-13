# Public-Website

This is the website for sheffield hackspace. The site is written using [Jekyll](https://jekyllrb.com/). Posts and updates from members are welcome just make a PR.

## Making changes
To run the site locally all you need is install is docker and docker compose.

To start the site run `docker-compose up`

To update the `gemfile.lock` if you have changed a plugin run `docker-compose run jekyll bundle update`

All changes should be made as a pull request to main. All changes require a PR review from one trustee.