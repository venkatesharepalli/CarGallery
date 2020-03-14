# Car Gallery App.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App is built using:

HTML5,
CSS,
Javascript,
Es6,
React,
material ui,
webpack,
Jest

## To run App

### Prerequisite

Node
NPM

## Available Scripts

In the project directory, you can run:

### `npm install` and then `npm start`

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Development

Code base is structured based on feature (ex. gallery). All related files are grouped together and kept in one folder. In this way it is easy to find files and also helps others to understand the code base easily.

All the file names follow kabab case (ex., <>-<>.js) naming convention.

Component based design is followed.
```
src
- common - contain all common components
- helpers - contain helper methods to use across the application.
- photogallery - Main container responsible to display the gallery view and gallery details.
    - gallery-view-app - component reponsible for rendering the photo thumbnails of a car.
    - gallery-details - component responsible for rendering the selected photo details.
- utils - contain store and service information.      

