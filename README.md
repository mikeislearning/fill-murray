# Fill Murray Shopify Mobile App

This app allows you to view random images of Bill Murray and Lorem Ipsum like you've never seen them before.

Using node v12.13.0

Using npm v.6.13.7

# To use this project

```
git clone https://github.com/mikeislearning/fill-murray
cd fill-murray
npm install && cd ios && pod install && cd ..
npm start
# in another tab or terminal window, one of:
npm run ios
npm run android (requires simulator to already be open)
```

# Modules used:

### React Navigation (v3)

https://reactnavigation.org/docs/3.x/getting-started/

Used as the navigation library, supplying structure for a title, a back button, and animation between screens.

### React Native Gesture Handler

https://github.com/kmagiera/react-native-gesture-handler

Dependency of react-navigation to allow gestures as a way to navigate between screens

### Redux

https://github.com/reduxjs/redux

Used to manage global state and simplify debugging

### React Redux

https://github.com/reduxjs/react-redux

React bindings when using Redux

### Redux Thunk

https://github.com/reduxjs/redux-thunk

Redux middleware that allows more customization in redux actions. It allows them to return functions instead of actions.

### Redux Devtools Extension

https://github.com/zalmoxisus/redux-devtools-extension

Allows easy sync up with the simulators to debug the redux store

### React Native Snap Carousel

https://github.com/archriss/react-native-snap-carousel

Carousel module used for displaying the photos and captions on the property detail page

### Lorem Ipsum React

https://github.com/anativ/lorem-ipsum-react-native

Used to generate Lorem Ipsum strings
