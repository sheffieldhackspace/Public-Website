#!/bin/bash

set -euo pipefail

echo "remove existing _site"
rm -rf _site
mkdir _site

echo "build blog (see blog README for how to install build tools)"
(
    cd blog
    bundle exec jekyll build
    npx -y pagefind --site _site
)

echo "move blog to _site"
cp -r blog/_site/* _site

echo "move homepage to _site"
cp -r homepage/* _site
