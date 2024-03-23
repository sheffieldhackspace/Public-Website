# Public-Website

This is the website for Sheffield Hackspace. The site is written using [Jekyll](https://jekyllrb.com/). Posts and updates from members are welcome just make a PR.

## Making changes

All changes should be made as a pull request to main. All changes require a PR review from one trustee.

### How to build

#### Using Docker

Install docker and docker compose.

To start the site run `docker-compose up` then navigate to `http://localhost:4000/Public-Website/` in your browser

To update the `gemfile.lock` if you have changed a plugin run `docker-compose run jekyll bundle update`

#### Using Jekyll locally

**Note: for debugging only**, you should use [Docker](#using-docker) to see the website as it will look [when built](./.github/workflows/build-and-deploy.yml).

```bash
sudo apt-get install ruby-full
gem install bundler
bundle config set --local path 'vendor/bundle'
bundle install
```

Serve. This is the same command used in [the docker compose file](./docker-compose.yml).

```bash
bundle exec jekyll serve --watch --force_polling --verbose
```

### How to add a blog post

1. Add a markdown file to [`_posts`](./_posts/) of the format `2024-03-09-font-workshop.md`
2. Add front matter meta data. This can be copied and edited from another post. An example is

    ```yaml
    ---
    id: 2150
    title: 'Computer font making workshop'
    date: '2024-03-09T00:05:46+01:00'
    author: 'alifeee'
    layout: post
    guid: 'https://www.sheffieldhackspace.org.uk/?p=2150'
    permalink: /font-workshop/
    categories:
        - Uncategorized
    tags:
        - workshop
    ---
    ```

    For `ID`, add 10 to the previous post `ID`. For `guid`, use the `ID`. For other keys, make an educated guess or copy from a previous post.

3. For images:

    1. Add a folder under [`/assets/blog/`](./assets/blog/) with the same name as the blog post.
    2. Use markdown image formatting, and use the `{{ baseurl }}` short code for the base URL. For example

       ```md
       ![Hand-drawn sign saying "font making workshop"]({{ site.baseurl }}/assets/blog/2024-03-09-font-workshop/workshop-sign.jpg)
       ```

4. Create a pull request!

    1. It is helpful if you enable GitHub pages on your repository Fork, so a preview can be seen.
