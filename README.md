# ionic-react-test

testing ionic 4 + react

#cloning setup

- clone repo
- (if needed) npm install -g ionic@latest
- npm install
- ionic serve

#instructions

- instructions from https://ionicframework.com/docs/react/your-first-app
- npm install -g ionic@latest (should install a version 5+)
- ionic start myApp blank --type=react (myApp is the name of the app, blank is whether a template or not)
- cd to app folder
- ionic serve (makes uses of ionic's catalyst so cordova isn't required anymore)
- /home has the default home page
- /components has some Ion toolbar components in a react class

# notes

- you need to make sure your ionic version is 5+ or type=react won't be recognized
- make sure your node and npm version is relatively up to date. I initially ran into an issue with one of the dependencies not being found but updating my npm version and reinstalling everything fixed the issue.

#useful pages

- https://ionicframework.com/docs/react/your-first-app
- https://ionicframework.com/docs/api
