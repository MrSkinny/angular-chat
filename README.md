# Automated dev and build for Angular / Node

Skeleton for starting a new Angular or Node app. Can be adapted for other JS apps, but I put this together after getting tired of repeating steps for a lot of mini-apps while learning JS fullstack.

## Installation

* Install Node and NPM
* `npm install -g gulp`

## Usage

* `gulp` - default task is `gulp watch`
* `gulp watch` - compiles for dev, runs server at localhost:3000 incl. livereload
* `gulp build` - builds necessary files for /app/dist
* `gulp build-run` - builds for dist and runs server at dist to test production version

## How to build your app

### Your App's Javascript

**All your js work should be done in the `app/src` directory.**

When you run your first `gulp watch`, a `app/scripts` directory gets created. DO NOT MODIFY THESE FILES, they will get overwritten.
 
Every js file you add will need a corresponding `script` tag in the `index.html` pointing to the `/scripts/...` location. **Remember to use /scripts and not /src!** 

This is an intentional step to help with debugging and mindful upkeep of your app's configuration. I may remove in the future, but many tutorials include this step and I don't mind the step.

### Adding Javascript Libraries

**Libraries should be added unminified to the `app/lib` folder**

You will need to add a tag block to your `index.html`
```
<!-- build:lib-js-[library_name] -->
  <script src="/lib/[library_name].js">
<!-- endbuild -->`
```

Then change the `html` task in the `gulpfile.js` to transform the naming to the `.min.js` convention.

This process is intentional to allow unminified library source in your app folder for browsing comments, etc.  During the `gulp build` process, all libraries will get minified.

### Stylesheets

**All your css work should be done in `app/scss` directory**

The `gulp watch` will transpile/minify/concat, so no changes to `index.html` are required. 

### Images

Images are unmodified and copied to `dist` on `gulp build`

 
