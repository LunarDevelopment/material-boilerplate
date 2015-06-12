# material-boilerplate

![material-boilerplate](http://lunar-development.co.uk/Projects/material-boilerplate/example.png)

See a Live example of this boilerplate here: [Material Boilerplate Live](http://lunar-development.co.uk/Projects/material-boilerplate/#/) 

## Motivation 

This is an AngularJS Material Design base for future websites and projects. 

I've made this because I was frustrated with the other boilerplates / material angular examples out there and decided to do something about it. 

I'll update as regularly as I can and Contribution / Stars / Feedback is more than welcome, just open a new issue to help out! 

## Goodies

Out of the box this Repo contains examples of: 

- [Angular Core]( https://docs.angularjs.org/api )
- [ngMaterial]( https://github.com/angular/material )
- [ngMdIcons]( https://github.com/klarsys/angular-material-icons )
- [angular-loading-bar]( https://github.com/chieffancypants/angular-loading-bar )
- [ng-breadcrumbs]( https://github.com/ianwalter/ng-breadcrumbs )

### Why material-boilerplate ?

Features: 

*  Angular Material `layout` and `flex` options can easily configure HTML containers.
*  Angular Material components, no bootstrap involved here! 
*  A 360 UI built around the `ng-view` with Left and Right `<md-sidenav>`, `<md-bottomsheet>` & global `<md-toolbar>` containing auto generated Breadcrums.
*  Custom controller for `$mdBottomSheet` with HTML partial template.
*  A set of html partial templates and directives for things such as unique menu buttons.
*  Responsive breakpoints and `$mdMedia` are used.
*  Using the `$mdThemingProvider` for quick app theme configuration.
*  Using expanded Angular Material `SASS` files for more customisation than [ngMaterial]( https://github.com/angular/material ) gives you out the box.
*  ARIA warnings used in the beautiful contact form.
*  `Menu factory` in place to automatically create a beautiful side menu as used on [material.angularjs.or](https://material.angularjs.org/latest/#/getting-started).
* Best practice examples of `$timeout`, `$location`, `$rootScope`, `$window`.
* `$mdToast` seamlessly integrated for notifications .
* `$animate` used app wide for smooth transitions and a consistent feel. 
*  [angular-loading-bar]( https://github.com/chieffancypants/angular-loading-bar ) has been set up to work autonomously, providing a loading bar for http requests, alerting your users to progress without you having to write a single word of Javascript! 
*  [ngMdIcons]( https://github.com/klarsys/angular-material-icons ) are implimented app wide to replace `<md-icon>` directive and its limited supply of SVGs out the box. 

## Yeoman generator-angular 
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1, so following their commands will work in this built repo, some examples:

```
yo angular:route blog 
```
Generates a controller + view for your blog section and generates Karma test for the controller. 

## Setting up

cd into a parent folder you'd like the project to live in

Then Clone this Repo: 
```
git clone https://github.com/LunarDevelopment/material-boilerplate.git {{YOUR FOLDER NAME}}

```
Then cd into your new project root: 
```
cd {{YOUR FOLDER NAME}}
```
Then to set up the project ready for use:  
```
npm install && bower install
```
> NOTE: Untill I find time to iron out all kinks, if you get any errors with the above command just run `npm install` again then `bower install` again seperatley.. 

Once this has been ran then you can ensure the quality of the install by serving it locally with `grunt serve`
>This will serve the app onto http://localhost:9000/

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## To-do: 
- Readme 
  1. ~~List all modules~~ 
  2. ~~Intro~~
  3. Complete TODO list 
  4. Contribution Network
- ~~resolve bower package conflicts~~
- clean up controllers and HTML 
- test / shim backwards compatible browsers 
- Annotate Code... 

## Known Issues: 
-  Right Nav rendering issue on mobile browsers (seperating nav menu into partial view should fix this)