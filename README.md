# BonziWORLD

This respository is a fork of the [original](https://github.com/heyjoeway/BonziWORLD), [patched](https://github.com/duckduckstab1/BonziWORLD-patched), and [fully patched](https://github.com/Rafafrias2012/BonziWORLD-patched). It will be updated frequently to be fully secure and fix problems with either the server or the client.

This project was discontinued by heyjoeway due to his time being taken up by other responsibilities. ~~Thanks for all the laughs and memes along the way.~~

All the source code for the server and client is publicly available here. If you want to run your own BonziWORLD, by all means go ahead. Do whatever you'd like with this code. _Just try to put me somewhere in the credits._

## Dependencies
- Node.js and npm
- Ruby
- Scss/Sass
- Git
- Cordova (Optional)
- Grunt
- Winston

## Setup
In a terminal/command prompt, navigate to where you'd like BonziWORLD to be placed and run the following:
```
git clone -b dependabot/npm_and_yarn/server/lodash.mergewith-4.6.2 https://github.com/TheRealKCFan20/BonziWORLD
cd BonziWORLD
```

### Client
```
cd src
npm install
grunt build_www
cd ..
```

### Server
```
cd server
npm install
node index.js
```
After this, BonziWORLD will be accessible on port 3000. (http://localhost:3000/)

## Disclaimer
I'm not responsible if you screw up anything with your computer while setting this up. I have no idea how you would, but someone will find a way. I also will not provide support for installing dependencies. If you have everything installed properly, the above commands will work.

## License
MIT
