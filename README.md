# Public-Website

This is the website for Sheffield Hackspace. The site is written using [Jekyll](https://jekyllrb.com/). Posts and updates from members are welcome just make a PR.

## Making changes

All changes should be made as a pull request to main. All changes require a PR review from one trustee.

### Using Docker

Install docker and docker compose.

To start the site run `docker-compose up` then navigate to `http://localhost:4000/Public-Website/` in your browser

To update the `gemfile.lock` if you have changed a plugin run `docker-compose run jekyll bundle update`

## Styles

### Fonts

The header font used is ["Big Noodle Titling"] ([WOFF2][bntwoff2]).

![Screenshot of header, showing big noodle titling font](https://github.com/sheffieldhackspace/Public-Website/assets/13833017/af3c202b-37b4-4dce-8579-442e79ae201e)

The body font used is ["Fira Sans"].

![Screenshot of body, showing Fira Sans font](https://github.com/sheffieldhackspace/Public-Website/assets/13833017/e759a4c9-15c0-4bd2-ba1b-f124288f9d33)

["Big Noodle Titling"]: https://www.dafont.com/bignoodletitling.font
[bntwoff2]: https://www.sheffieldhackspace.org.uk/assets/fonts/big_noodle_titling-webfont.woff2
["Fira Sans"]: https://fonts.google.com/specimen/Fira+Sans
