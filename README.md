# Valto

This is a presenter project of @azollai to demonstrate how he can develop an Angular project.
Valto is an application that allows users to share their problems in their habitat and to see other's problems around them.

## Demo code

You can see running the application by using stackblitz: ... Or by cloning and starting the master branch of the project.

## Modules used by the project

- @angular/material - The project is built by Angular and uses the official Angular Material design
- @angular/flex-layout - The layout is set by Angular's flex-layout
- @angular/service-worker - It is also a Progressive Web Application (PWA), which is possible because of Angular's service worker
- @ngxs/store - State management is used in the project, with NGXS
- @types/googlemaps - The application is using GoogleMaps at the maps to find locations around the world and present them
- angularfire2 - The server is hosted with Firebase. AngularFire2 is used for the communication.
- ng-simple-slideshow - For the appearance of the imagegroups the app uses this package
- ngx-image-cropper - For the image-cropping process the application is using this package. But because of the missing of support of the package I had to download the source-code and add some extra to it to make it work. (It was not possible to pass more images to the component while it was easy to implement)
- ngx-infinite-scroll - For the scrolling 

## Features

### Authentication

- You can register by clicking thhe "Join us" button and filling out the form there. Or you can make it easier by connecting your Facebook account.
- If you already have an account, you can login

### 

## Special components

- place-search

## To be implemented

- Cypres end-to-end tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
