![paymentoption](https://user-images.githubusercontent.com/54033086/128783156-3eee0dc5-a5de-4cd9-9584-a8008499099f.gif)
# Mobile-shopping-App
Demo App for Shopping 
![eshop](https://user-images.githubusercontent.com/54033086/128782927-f7268398-d812-4469-8fe1-0f692722168e.gif)

## Description
This project is a simple implementation of a shopping system, this project aims to provide the basic features that are expected to be found in a mobile e-commerce applicaion where users can view and purchase products. To navigate through the app, users have to authenticate themselves. Once logged-in, users can scroll through the list of available products, add different products to the cart, and make orders.
The Payment option provided is not functional since this project just aims to learn the mobile e-commerce applicaion.

## Backend
The Server part which handle api calls are written in Node.js, which is a JavaScript runtime built on Chrome's V8 JavaScript engine.It allows javascript code to run on the server side.Since this project is for learing purpose the server is running locally.The server code has API for
handling all requests for Product,User,Orders etc.


## Authentication and Security

For Learning purpose app contains a simple authentication system implemented in backend using Node.js.If the authentication process is successful, a unique token is sent from the backend to the user in concern, the token is then stored locally in the device and will expire exactly after one day of its receival. When expired, the token is deleted from the device and the user will be automatically signed out and prompt to the login screen. Otherwise, if something went wrong with authentication process, the proper error message will be displayed in the screen.All forms in this project contain some basic validation algorithms that are reused whenever validation is required.

## Databases
Most data in this project (like products, orders, users, category etc) is stored in Atlas Mongo db.We use the free tire since this is learing project ,all the other data like auth token is save locally.
https://studio3t.com/knowledge-base/articles/connect-to-mongodb-atlas/

## Navigation
All navigation in this project is built with [React Navigation v5](https://reactnavigation.org/docs/getting-started/).

## Designs
All design assets used in this app (screens, components, input fields, icons...) are made manually in this project.

## Built with
React Navigation v5,
Redux: standalone state management library,has few sections while building the application which is listed below.
Actions: send data from your application to your store. They are the only source of information for the store.” this means if any state change necessary the change required will be dispatched through the actions.
Reducers: when an action is dispatched for state change its the reducers duty to make the necessary changes to the state and return the new state of the application.
Store: with help of reducers a store can be created which holds the entire state of the application it is recommended to use a single store for the entire application than having multiple stores which will violate the use of redux which only has a single store.
React Native Async Storage:It is use for store data in the local storage of React Native App. React Native Async Storage provides lots of methods to store, retrieve, and, remove data from Local storage. generally Async storage use for maintaining the session of the application.
