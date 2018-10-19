# Bustle Site Clone

#### By Kendra Kelly

## Description

This project is to build a site clone of Bustle using Angular.

## Planning and Site layout

##### Model:

* Sponsored article: yes or no (medium articles only)
* Title
* Picture
* Description
* Author
* Subject (used solely for search/sorting articles)
* Date Added (used only for viewing the full article)

##### Components:

| Small Article Component | Medium Article Component | Headline Article Component|
|---------------|---------------|---------------|
| Picture | Sponsored y/n | Picture |
| Title | Picture | Title |
| Author | Title | Author |
|--------| Description |---------|
|--------| Author |---------|

Slideshow Component: places the small article components into a slideshow.

## User Needs

* A Visitor wants to be able to browse and read articles.
* A Visitor wants to be able use the menu to filter through article subjects.
* Admin wants to be able to fill out a form to add a new article.
* Admin wants to be able to edit an added article via another form.
* Admin wants to be able to remove an article from the site.


## Setup/Installation Requirements
Using Command Line:
1. ``git clone https://github.com/coffeeringsdesign/bustle-clone.git `` to clone the site.
2. ``cd ~`` to navigate to base directory
3. ``cd Desktop `` to navigate to your desktop
4. ``cd bustle-clone`` to enter the site folder
5. ``npm install`` to install all webpack dependencies
7. ``npm run start`` this will webpack and immediate pop open the site on your brower. I recommend Chrome.
8. `ng serve --open` for a dev server. This will automatically open your project in your default browser. The app will automatically reload if you change any of the source files. The URL is `http://localhost:4200/` if you should need it.
9. `ng generate component component-name` to generate a new component.
10. `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
11. `ng test` to execute the unit tests with Karma.
12. I recommend Atom to edit any html, javascript, or sass.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* Angular & Angular-CLI
* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## Suuport & Contact Details

Please feel free to get in touch. Reach out to me at kendra@coffeeringsdesign.com.

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Kendra Kelly**
