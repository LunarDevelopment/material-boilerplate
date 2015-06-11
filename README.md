# material-boilerplate

See a Live example of this boilerplate here: [Material Boilerplate Live](http://lunar-development.co.uk/Projects/material-boilerplate/#/) 


## Goodies

Out of the box this Repo contains examples of: 

- [Angular Core]( https://docs.angularjs.org/api )
- [ngMaterial]( https://github.com/angular/material )
- [ngMdIcons]( https://github.com/klarsys/angular-material-icons )
- [angular-loading-bar]( https://github.com/chieffancypants/angular-loading-bar )
- [ng-breadcrumbs]( https://github.com/ianwalter/ng-breadcrumbs )

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

## TODO: 
- readme 
  1. ~~List all modules~~ 
  2. Intro 
  3. Complete TODO list 
  4. Contribution Network
- ~~resolve bower package conflicts~~
- clean up controllers and HTML 
- test / shim backwards compatible browsers 