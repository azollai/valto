# Valto

This is a presenter project of @azollai to demonstrate how he can develop an Angular project.
Valto is an application that allows users to share their problems in their habitat and to see other's problems around them.

## Demo code

You can see the application running here: https://valto-214b6.firebaseapp.com or by cloning and starting the master branch of the project.

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
- @nguniversal/express-engine - basic server-side rendering (to be continued...)

## Features

### Authentication

- You can register by clicking thhe "Join us" button and filling out the form there, using your email address. Or you can make it easier by connecting your Facebook account.
- If you already have an account, you can login

### Feed browsing

- You can see the posts that were published on the site by navigating to the "News Feed" page or you can see the one that were posted by you by navigating to the "My feed" page. 
- Each post has picture(s) a short description, a tag (that describes the type of the post, e.g. bench) and a location. The posts are rated on the page, so the most rated ones can be seen first
- You can also filter the posts on the feed pages by the tagnames, by the location or by the ratings
- It is possible to create a post by clicking to the "Add Post" button. Here you can upload the content of a post which was just described.

## Special components/modules

- place-search - uses googlemaps library. By writing the name of an address to an input, it automatically advice the ones from googlemaps
- image wrapper - uses ng-simple-lideshow, ngx-image-cropper and other material elements to make it possible to upload and edit images at image upload 
- form-control-error-messages - by simply giving to it there validation-control errors, it displays them
- feed-filter - this component is filtering the postst of a feed using and combining material control elements
- chips-select - a simple angular material mat-chip-list that tightens it to make it fit for the feed's requirements

## To be implemented

- Cypres end-to-end tests
- Finishing and testing serverside rendering 
- Connecting CircleCI for Continous Integration and deploying
