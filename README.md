# The Chronic

<img src="./static/img/og-image.jpg" width="300" style="display: block; margin: auto;" />

The Chronic is a comprehensive guide of curated resources for those with chronic illness who are navigating a broken healthcare system while trying to preserve their dignity and self worth, and ultimately attain wellness and health. 

## SEO Keywords

Non-article pages of your site inject the keywords listed in `src/SEOkeywords.js`. 

Article pages take the `tags` and `keywords` listed in the article file and inject those, after ensuring duplicates are removed. 

## Tests

This site uses Jest and Enzyme for testing. To run unit tests, run `npm test`

## Scripts

- `createArticle` generates a new markdown Article. It will ask you for some metadata like the article title, description, and a featured image ✨

- `preview` runs the site locally so you can inspect changes before publishing 👁️

- `previewDrafts` is the same as preview, but shows drafts as well as completed posts 👀

- `publish` commits your changes, makes sure you're up-to-date with GitHub, and then publishes your changes to GitHub and the world. It will ask you for a short commit message and tell you if something went wrong 🌎

- `update` refreshes your laptop with new code/articles/media from GitHub and the Netlify CMS 🧙

- `updateScripts` does just that 🧙‍♂️

- `ctrl + c` stops anything running in the terminal 🙅‍♀️

### Other Scripts

- `images` opens the images directory in Finder

- `articles` opens the articles directory in VScode

- `amberHealth` takes you to the folder The Chronic lives in on your laptop

Code for the aforementioned bash scripts can be found in `amber-scripts.sh`
