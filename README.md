# Public-Website

This is the website for Sheffield Hackspace. It is in two parts:

1. homepage - written using HTML
2. blog - written using [Jekyll](https://jekyllrb.com/)

## develop blog

see [blog readme](./blog/README.md)

## develop front page

```bash
# edit homepage/index.html and then make it sync with _site/index.html somehow
# option 1 - watch out because linking it means deleting _site/index.html deletes original file
rm _site/index.html
# option 2 - watch for changes and move it
find homepage | entr cp -rv homepage/* _site
# then set up a live server serving _site somehow (probably with)
python -m http.server 8080 -d _site
```

## build process

```bash
rm -rf _site
mkdir _site
# build blog (see blog README for how to install build tools)
(
    cd blog
    bundle exec jekyll build
    npx -y pagefind --site _site
)
# move blog to _site
cp -r blog/_site/* _site
# move homepage to _site
cp -r homepage/* _site
# open server
python -m http.server 8080 -d _site
```

## Styles

### Fonts

The header font used is ["Big Noodle Titling"] ([WOFF2][bntwoff2]).

![Screenshot of header, showing big noodle titling font](https://github.com/sheffieldhackspace/Public-Website/assets/13833017/af3c202b-37b4-4dce-8579-442e79ae201e)

The body font used is ["Fira Sans"].

![Screenshot of body, showing Fira Sans font](https://github.com/sheffieldhackspace/Public-Website/assets/13833017/e759a4c9-15c0-4bd2-ba1b-f124288f9d33)

["Big Noodle Titling"]: https://www.dafont.com/bignoodletitling.font
[bntwoff2]: https://www.sheffieldhackspace.org.uk/assets/fonts/big_noodle_titling-webfont.woff2
["Fira Sans"]: https://fonts.google.com/specimen/Fira+Sans

## Making changes

All changes should be made as a pull request to main. All changes require a PR review from one trustee.
