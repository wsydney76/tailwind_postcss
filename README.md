# Tailwind PostCss

Simple setup for using Tailwind CSS in your project in case you don't want to
use a complex WebPack, Grunt, Gulp whatsoever build process.

## Quick Start

* Copy files from the `setup` folder to the root folder of your Craft CMS project.
* Run `npm install`
* Run `npm run dev`
* Add `<link href="/assets/styles/main.css" rel="stylesheet">` to your templates.

## Modules

__tailwindcss__

That's why you are here. Required.

__postcss__

The thing that runs the build process by calling all configured plugins. Required.

__postcss-cli__

Let us run PostCSS from the command line and npm scripts. Required in our setup.

__postcss-import__

Allows the use of `@import` in your css files. Optional.

__postcss-nested__

Allows the use of sass-like nested syntax in your css files. Optional.

__autoprefixer__

Adds vendor specific prefixes. Technically optional, but highly recommended.

__cssnano__

Optimises the css file for production. Technically optional, but highly recommended.

## Installation

### 1. Copy the files from ``setup`` to your project

You can either copy them to your root folder, or create a subfolder.

### 2. Disable unwanted PostCSS plugins

__You do not want to use @import statements:__
 
Remove references to `postcss-import` from `package.json` and `postcss.config.js`. 
  
Replace the content of `src/styles/style.css` with:

```
@tailwind base;   
@tailwind components;  
@tailwind utilities;    
``` 

__You do not want to use Sass like nested css:__ 

Remove references to `postcss-nested` from `package.json` and `postcss.config.js`. 

### 3. Check file paths in package.json and tailwind.config.js

The default setup contains some reasonable paths if copied to your root folder.

__If you use a separate folder, the paths likely have to be changed.__

The `scripts` section in `package.json` defines the available build steps:

`postcss <INPUTFILE> --output <OUTPUTFILE> ...`

Replace the defaults (relative to `package.json`) with your paths.

In `tailwind.config.js` check the `purge` section for all paths to your templates
(don't forget to include `svg` files in case they use tailwind classes).

### 4. Install dependencies

cd into the folder containing `package.json`.

* Check the `.node_modules` folder is ignored in your `.gitignore` file.
* Run `npm install`.
* Take a break and pray.


##  Build

cd into the folder containing `package.json`.

* Run `npm run dev` for a development build.  
By default this will skip autoprefixing and minifying, 
remove the environment checks in `postcss.config.js` if you don't want this.

* Run `npm run watch` for rebuilding your css when saving a file.

* Run `npm run build` for a production build.  
This will set the environment variable `NODE_ENV=production` so all configured PostCSS plugins will run,
 and Tailwind CSS wil purge all unused classes.

* Add a link to your css file to your templates. 
If you didn't change the file paths it will be `<link href="/assets/styles/main.css" rel="stylesheet">`   
This setup does not have a method for cache busting the css file, so may want to add a version
paramter to the link, e.g. `/assets/styles/main.css?v=202011231422`
